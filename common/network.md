---
sidebarDepth: 3
---

# Network 관련 질문 요모조모

## 목차

1. [브라우저에서 도메인을 입력하면 브라우정 렌더링되기까지의 과정](#브라우저에서-도메인을-입력하면-브라우정-렌더링되기까지의-과정)

### 브라우저에서 도메인을 입력하면 브라우정 렌더링되기까지의 과정

<Detail>

</Detail>

### HTTP 프로토콜의 특징

<Detail>

1. Stateless  
   연결을 끊는 순간 클라이언트와 서버의 연결이 끊기며, 상태가 유지되지않음

2. Connectionless  
   클라이언트가 request를 서버에보내고,서버가 클라이언트에 요청에 맞는 response를보내면
   바로 연결을 끊는다.

</Detail>

### 3 / 4 way handshake

<Detail>

#### 3 way handshake

이는 TCP 연결을 초기화하는 과정입니다.  
이는 양쪽 모두 데이터를 주고받을 준비가 되었다는 것을 보장하며,  
실제로 데이터를 전달하기 전, 다른 쪽이 준비되었다는 것을 알 수 있게한다.

순서는 다음과 같습니다.

> Client : Syn(n) 서버야 잘 있니?  
> Server : Ack(n + 1), Syn(m) 어, 잘 있어 근데 너는 잘 있니?  
> Client : Ack(m + 1) 그럼 연결할게~

임의의 난수를 넣은 Syn 패킷을 날리며,  
이에 응답하는 의미로 Syn + 1의 값을 담은 값을 Ack로 전송합니다.

#### 4 way handshake

이는 세션을 종료하기 위한 절차입니다.

클라이언트는 서버에 연결통지를 해제하며,  
서버가 이를 확인했으며, 확인했다는 메세지를 보내는 절차입니다.

> Client : Fin(1) 서버야 나 연결 끊는다? 끊는다?  
> Server : Ack(Fin.seq + 1), Seq(n) 확인했어, 일단 보내던것만 마저 보내고
> Server : Fin(1), Seq(n + 1)ㅇㅋ, 이제 끊어
> Clinet : Ack(n + 2), Seq(Fin.seq + 1) ㅇㅋ 끊음

단 `Server`가 보낸 `Fin`패킷이 기존에 보내던 데이터값들보다 먼저 도착할 수 있기에  
`Client`는 `TIME_WAIT`의 시간을 지니다, `CLOSE`가 됩니다.

</Detail>

### gRpc

<Detail>

| **Feature**            | **gRPC**                      | **HTTP APIs with JSON**       |
| :--------------------- | :---------------------------- | :---------------------------- |
| Contract               | Required(`.proto`)            | Optional(OpenAPI)             |
| Protocol               | HTTP/2                        | HTTP                          |
| Payload                | Protobuf(small, binary)       | JSON(large, human readable)   |
| Prescriptiveness       | 엄격한 사양                   | 느슨하며, 모든 HTTP 가능      |
| Streaming              | 클라이언트, 서버, 양방향      | 클라이언트, 서버              |
| Browser support        | 안하며, gRPC 지원하는 웹 필요 | 지원함                        |
| Security               | TLS                           | TLS                           |
| Client code-generation | Yes                           | OpenAPI + third party tooling |

#### 이런 gRPC는 다음과 같은 상황에 좋습니다.

1. MSA  
   gRPC는 짧은 대기시간과 높은 처리량 통신을 위해 설계됨  
   효율성이 중요한 경량 마이크로서비스에 적합

2. node간 실시간 통신  
   gRPC는 양방향 스트리밍을 지원  
   풀링없이 실시간으로 메세지를 푸시할 수 있다.

3. 다중 언어 환경  
   gRPC 도구는 널리 사용되는 모든 개발 언어를 지원  
   다국어 환경에 적합

4. 네트워크 제약이 있는 환경  
   gRPC 메시지는 경량 메시지 형식인  
   Protobuf를 사용하여 직렬화됩니다.  
   그러기에 gRPC 메시지는 항상 해당하는 JSON 메시지보다 작습니다.

5. IPC(프로세스 간 통신)  
   Unix 도메인 소켓 및 명명된 파이프와  
   같은 IPC 전송은 gRPC에서 동일한 머신에 있는  
   앱 간에 통신하는 데 사용할 수 있습니다.

#### 이런 gRPC는 단점이 있어요!

1. 브라우저 지원이 한정적입니다!

2. 사람이 읽을 수가 없어요!  
    HTTP API 요청은 텍스트로 전송되지만  
    gRPC 메시지는 기본적으로 Protobuf로 인코딩됩니다.

   이러한 이진 형식은 사람이 읽을 수가 없습니다!

3. 이럴때는 다른 프레임워크를 추천해요  
   브라우저에서 액세스 가능한 API  
   브로드캐스트 실시간 통신

</Detail>
