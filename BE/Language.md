# 각 언어 관련 질문 요모조모

## 목차

### Python과 Go언어의 차이점을 설명해보세요

<Detail>
</Detail>

### const, let, var의 차이는 무엇인가요?

<Detail>
JS에서 변수를 선언하는 방법은 위의 세가지 방법이 있습니다.
`const`, `let`, `var`

이런 변수 선언 예약어는 두가지로 구분을 나눠 볼 수 있습니다.

1. `변수`와 `상수`
2. `function-scoped`와 `block-scoped`

#### 변수와 상수

변수는 값이 변하기에 변수라고 불립니다.

```js
let a = 1;
console.log(a); //expected 1

a = 2;
console.log(a); //expected 2
```

그리고 상수는 변하지 않기에 상수라고 불립니다.

```js
const a = 1;
console.log(a); //expected 1

a = 2; // VM122:1 Uncaught TypeError: Assignment to constant variable.
console.log(a); //expected 1
```

#### **function-scoped** 와 **block-scoped**

JS에서는 scoped의 종류가 두개로 나뉩니다.

1. function
2. block

##### function-scoped

```js
for (var j = 0; j < 10; j++) {
  console.log(j); // 1 ~ 10
}
console.log(j); // 10
// 이 경우 정상적으로 작동을 한다.

// 그러나 아래의 경우에는 에러가 발생한다.
function counter() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}
counter();
console.log(i); // ReferenceError: i is not defined
```

말 그대로 `function-scoped`이기에, `scope`의 단위가 `function`인 것이다.

그러기에 `j`의 경우 `for 반복문`안에서 선언된 값도 그저 밑에서 사용 가능하지만
`i`의 경우 함수 안에서 선언되었기에, 밑에서 사용을 못하고, 에러가 나타날 뿐이다.

##### block-scoped

```js
for (let j = 0; j < 10; j++) {
  console.log(j); // 1 ~ 10
}
console.log(j); // ReferenceError: j is not defined

function counter() {
  for (let i = 0; i < 10; i++) {
    console.log(i); // 1 ~ 1-
  }
}
counter();
console.log(i); // ReferenceError: i is not defined
```

이 경우는 두개 모두 에러가 나타난다.

`{}`를 하나의 블럭으로 취급하여, 이 안에서 선언된 변수는 이 안에서만 사용가능하다.
`{}`를 통해 변수 사용 범위를 지정해주었다고 볼 수 있다.

그러기에 `for`문 안에서 사용된 변수는 `for`문 안에서만 사용가능한 것이다.
`function`도 하나의 `{}`, 즉 블럭이기에 밖에서 출력이 안되는 것이다.

</Detail>

### 일반 function 표현식과 arrow function 표현식의 차이는 무엇?

<Detail>
</Detail>
