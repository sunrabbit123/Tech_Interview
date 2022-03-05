# 각 언어 관련 질문 요모조모

## 목차

### Python과 Go언어의 차이점을 설명해보세요 ( Python, Golang )

<Detail>

</Detail>

### const, let, var의 차이는 무엇인가요? ( JS, TS )

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

### 일반 function 표현식과 arrow function 표현식의 차이는 무엇? ( JS, TS )

<Detail>

  #### 선언 방식의 차이
  
  `function`의 경우 다음과 같이 선언한다.
  ```js
  function getOne(){ return 1; }
  ```
  
  그와 달리 `arrow function`의 경우 다음과 같이 선언한다.
  ```js
  const getOne = () => 1;
  const getOne = () => { return 1; }
  ```
  
  이렇게 선언 방법에서의 차이도 있지만, 함수내에서의 접근에서 차이도 있다.
  
  #### this 접근
  
  일반 `function`에서는 함수에 어떻게 접근되었는지에 따라서 `this`가 어떤 것을 가르키는지 달라진다.   
  콜백함수 내부에서의 `this`는 전역 객체 `Window`지만, `nodejs`에서는 얘기가 달라집니다.  
  
  `module.exports`, `exports`인거죠, 해당 문서에서는 `모듈 수출 객체`라고 칭하겠습니다.  
  이는 바로 모듈을 수출할 수 있도록 돕는 그 객체입니다.  
  하지만 `nodejs`에서는 일반적인 함수선언문 내부에서의 `this`는 `global`을 나타냅니다.  
  
  이러한 복잡한 `this`는 화살표 함수에서는 달라집니다.  
  바로 자신의 상위 스코프의 this를 상속받는 것이죠  
  
  복잡하니 표로 나타내겠습니다.  
  
  |상황| Vanilla JS | Node JS |
  |:--:|:----|:----|
  |함수 밖 | Window 객체 | 모듈 수출 객체 |
  | 일반함수 내부 | 호출방법에 따라 달라짐 | global |
  | 콜백함수 내부 | Window 객체 | 모듈 수출 객체 |
  | 화살표 함수 | 상위 스코프의 this | 상위 스코프의 this |
  | setTimeOut 함수 내부 | X | TimeOut 객체 |
  
  정리하자면 화살표함수에는 `this`와 `prototype`이 없으며  
  그러기에 상위 스코프로 찾아 올라가게 되며, 그로 인한 현상들이다.  
  
  > `prototype`이 없기에, 화살표함수로 생성자를 선언할 수 없다.
  
</Detail>
