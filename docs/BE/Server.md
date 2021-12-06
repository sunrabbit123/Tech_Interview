# 서버관련 요모조모

## 목차

### 클라이언트의 요청마다 Thread가 생성되고 Controller에 요청을 할텐데 어떻게 1개의 Controller만으로 요청들을 다 처리할 수 있는가?(Singleton)

서버가 실행되고 Controller는 Spring Beans에 담겨있어 Client Thread의 요청이 들어오면 Controller객체를 새로 생성하지 않고 Spring Beans Container에서 꺼내쓰는 구조
