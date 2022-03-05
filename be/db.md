# DB 관련 요모조모

## 목차

### ElasticSearch의 키워드 검색과 RDBMS에서 %LIKE% 검색의 차이점

<Detail>

RDBMS에서의 `%LIKE%` 검색은 이 글을 보는 대부분은 아시겠지만,
중간에 해당 단어가 들어간 것들만 나오도록 필터링을 한 것 입니다.

ElasticSearch에서의 검색은 `역색인(inverted index)` 방식을 이용합니다.

> `색인(Index)`은 키워드를 찾아보기 쉽도록 정렬 및 나열한 것 입니다.
> `역색인(Inverted Index)`은 키워드를 통해 문서를 찾아내는 방식입니다.

이러한 역색인 방식은 `검색 키워드`를 통해 보다 빨리 원하는 문서를 찾아낼 수 있게됩니다.

> `%LIKE%` 검색은 `Full Text Search`인 반면
> 역색인방식은 전처리가 있기에, 후에 검색속도가 빨라지는 형태다.

</Detail>

### RDMBS에서 INDEX가 어떻게 구성되어있는가?

<Detail>

</Detail>

### RDB와 NoSQL의 차이점

<Detail>

RDB와 NoSQL의 대표적인 차이점으로 두가지를 꼽을 수 있다.

1. 관계의 유무
2. SQL 사용 유무

NoSQL의 의미는 non Relational 이라는 의미가 크다
RDB보다 덜 제한적인 일관성 모델의 데이터 저장 및 검색을 위한 환경을 제공해준다.

이 중 유명한 것은 MongoDB, Redis 등이 있다.

`MongoDB`는 문서지향적, `Redis`는 키-값의 형태를 띈다.

본론으로 돌아와 둘의 차이점에는 관계의 유무가 큰 영향을 끼친다.
`NoSQL`은 데이터 구조를 알 수 없으며, 확장 및 축소가 중요하다면 사용하는게 좋으며
데이터 구조가 명확하며, 명확한 스키마가 중요하다면 `RDB`를 사용하는 것이 좋다.

</Detail>

### 어트리뷰트가 굉장히 많은 테이블을 설계해야한다. 어떻게 설계할 것 인가?

<Detail>

1. Master - slave, 스토리지 사용, 카디널리티 기준 인덱싱 선정
2. 인덱싱 성능 검사
3. explain 사용

</Detail>

### DB의 멀티인덱싱에 대해 아십니까?

<Detail>

</Detail>
