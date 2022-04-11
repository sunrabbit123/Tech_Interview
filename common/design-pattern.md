---
sidebarDepth: 3
---

# CS 관련 질문 요모조모

## 질문들

### 디자인 패턴이란?

<Detail>

> 반복적으로 일어나는 방법론을 어떻게 풀어나갈 것인가에 대한 **솔루션**

</Detail>

### 생성 패턴

<Detail>

시스템이 어떤 구체적인 클래스를 사용하는지에 대한 정보를 캡슐화 한다.  
또한 이들 클래스의 인스턴스들이 어떻게 만들어지며, 맞붙는지에 대한 부분을 완전히 가린다.

즉, 객체의 생성과 조합을 캡슐화해 특정 객체가 생성되거나 변경되어도
프로그램 구조에 영향을 크게 받지 않도록 유연성을 제공한다.

</Detail>

### 싱글톤 패턴

<Detail>

생성 패턴이며  
어떤 클래스의 인스턴스는 단 하나임을 보장함  
전역적인 접근점을 제공하며, 공통된 객체를 여러곳에서 접근해야 하는 경우 사용한다.

- 장점 : 인스턴스로의 접근이 통제되며, 접근이 캡슐화가 된다.

#### 구현

다음과 같이 하나의 인스턴스를 유지하기 위하여 인스턴스 생성에 제약을 둔다.  
또한 new를 실행 못하게 private을 걸고 유일한 단일 객체 지원을 위해 정적 메서드를 지원한다.  
그리고 유일한 단일 객체를 참조할 정적 참조변수가 필요하다.

```java
public class Singleton {
    private static Singleton singletonObject;

    private Singleton() {}

    public static synchronized Singleton getInstance() {
        if (singletonObject == null) {
            singletonObject = new Singleton();
        }
        return singletonObject;
    }
}
```

또한 `synchronized` 키워드가 없다면,  
멀티스레딩환경에서 하나만 있어야 되는 것이 둘 이상이 될 수 있기에 위험하다.  
그러기에 해당 키워드를 통해 메서드를 동기화 시켜준다.

그렇지만 이는 성능상의 문제가 생긴다.  
그러기에 다음과 같은 모습을 추천한다.

```java
public class Singleton {
    private static volatile Singleton singletonObject = new Singleton();

    private Singleton() {}

    public static Singleton getSingletonObject() {
        return singletonObject;
    }
}
```

클래스가 로딩 될 때, 객체를 준비해주는 모습이다.

</Detail>

### 빌더 패턴

<Detail>

생성 패턴이며  
복잡한 객체를 생성하는 클래스와 표현하는 클래스를 분리한다.
따라서 복합적인 객체를 생성하는 과정을 세밀하게 분리할 수 있다.

생성과 표현을 분리하여 데이터에 따른 생성자 증가가 이루어지지않는다.

> 명시적인게 특징

</Detail>

### 팩토리 메서드 패턴

<Detail>

생성 패턴이며  
어떤 객체를 생성할지 서브클래스에게 위임한다.  
보통 자신이 어떤 객체를 생성할지 모르는 상황에 사용한다.

</Detail>

###
