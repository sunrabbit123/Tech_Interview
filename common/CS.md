---
sidebarDepth: 3
---

# CS 관련 질문 요모조모

## 목차

1. [로드밸런싱의 개념(L4, L7)](#로드밸런싱의-개념-l4-l7)
2. [Public / Private 클라우드의 차이, laas의 의미](#public-private-클라우드의-차이-laas의-의미)
3. [REST API의 정의](#rest-api의-정의)
4. [GraphQL API의 정의](graphql-api의-정의)
5. [아키텍쳐는 무엇이고, 대용량 트래픽을 견뎌낼만한 아키텍쳐는 무엇인가](#아키텍쳐는-무엇이고-대용량-트래픽을-견뎌낼만한-아키텍쳐는-무엇인가)
6. [immutable에 대해서 설명 좀](#immutable에-대해서-설명-좀)

## 질문들

### 로드밸런싱의 개념(L4, L7)

<Detail>

한줄 요약 : 트래픽 분할

로드밸런싱이란 들어온 packet을 적절한 목적지로 전달(스위치) 역할 수행 및
적절한 알고리즘을 통해 부하를 분산시키는 시스템을 얘기한다.

L7은 L4의 서비스 단위 로드밸런싱을 극복하기 위하여
포트 + 페이로드 패턴을 이용하여 패킷스위칭을 진행하며

L4는 TCP/UDP 패킷 정보를 분석하고 해당 패킷이 사용하는 서비스 종류별(HTTP, FTP 등)로 처리한다.

</Detail>

### Public / Private 클라우드의 차이, Iaas의 의미

<Detail>

**Public / Private 클라우드의 차이는 해당 클라우드에 대한 최종사용자의 소유여부라고 볼 수 있습니다.**

#### Public 클라우드

최종 사용자(유저)가 소유하지않은 `IT 인프라`에서 생성되는 클라우드 환경입니다.
유명한 `Public 클라우드 제공 업체`로는 `AWS`, `GCP`, `Azure`등 이 있습니다.

#### Private 클라우드

클라우드 컴퓨팅 서비스와 인프라가 기업 자체의 인트라넷이나 데이터 센터, 또는 최종 사용자 전용으로 돌아가는 클라우드 환경으로,

일반적으로 사용자의 방화벽 내에 위치하며, 대부분 온프로미스에서 구동되는 경우가 많습니다.

#### Iaas의 의미

> Infrastructure as a Service

클라우드 컴퓨팅의 가장 기본적인 계층이며,  
인프라를 제공하는, 즉 서비스형 인프라입니다.

비즈니스 운영에 필요한 스토리지, 네트워킹 및 컴퓨팅 리소스들을 제공합니다.

그러기에 사용자 입장에서는 `O/S`, `Middleware`, `Runtime`, `Data`, `Application`만 관리하면 됩니다.

</Detail>

### REST API의 정의

<Detail>

우선, 위키백과의 정의를 보면 다음과 같다.

> 월드 와이드 웹(World Wide Web a.k.a WWW)과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식으로 자원을 정의하고 자원에 대한 주소를 지정하는 방법 전반에 대한 패턴

그리고 `REST API`의 `REST`는 다음과 같다.

> REpresentational State Transfer

그리고 `ful`이라는 어미를 붙여 `~한 API`라고 흔히들 얘기한다.
그래서 `RESTful API`란 `REST` 규칙을 잘 지킨 API라고 볼 수 있다.

또한 `REST`는 정의에서 눈치챌 수 있지만, 디자인패턴이 아닌 아키텍처이다.
좀 더 정확하게 이야기하자면 `Resource Oriented Architecture`라고 볼 수 있다.

API 설계의 중심에 `자원(Resource)`이 있으며, `HTTP Method`를 통해 자원을 처리하도록 하는 것 이다.

결론적으로 돌아와서 보면, `REST API`란 소프트웨어 아키텍처의 한 형식으로,
`자원`을 정의하고, `자원`에 대한 주소를 지정하여 `자원` 중심으로 API를 설계하는 것 이다.

#### Reference

- [REST API 제대로 알고 사용하기 - TOAST](http://meetup.toast.com/posts/92)
- [바쁜 개발자들을 위한 RESTFul api 논문 요약](https://blog.npcode.com/2017/03/02/%EB%B0%94%EC%81%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%93%A4%EC%9D%84-%EC%9C%84%ED%95%9C-rest-%EB%85%BC%EB%AC%B8-%EC%9A%94%EC%95%BD/)
- [REST 아키텍처를 훌륭하게 적용하기 위한 몇 가지 디자인 팁 - spoqa](https://spoqa.github.io/2012/02/27/rest-introduction.html)

</Detail>

### GraphQL API의 정의

<Detail>

::: tip GraphQL
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
:::

위 내용은 GraphQL 공식사이트의 메인페이지에 있는 글이다.

단순히 얘기하면 `GraphQL`은 `API`를 위한 `Query Language`라는 것이다.
그렇다면 `GraphQL API`는 `GraphQL`를 위해 구성된 `API`라는 추론이 나온다.

또한 쿼리 랭귀지라는 장점을 살려, 클라이언트에서 원하는 데이터값만 서버에 요청할 수 있다.  
이로 인해, 클라이언트는 불필요한 리소스를 아낄 수 있으며
서버입장에선 API를 확장해나가기가 편하다.

</Detail>

### 아키텍쳐는 무엇이고, 대용량 트래픽을 견뎌낼만한 아키텍쳐는 무엇인가

<Detail>

</Detail>

### immutable에 대해서 설명 좀

<Detail>

</Detail>
