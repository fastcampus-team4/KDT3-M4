# 4차 과제 : 스마트 스토어 만들기

배포:https://kdt3-m4-of-team4.netlify.app/
클론 사이트: https://smartstore.naver.com/freshmentor
멤버: 강해경, 김혜인, 김지원, 홍혜원, 황이삭

## 프로젝트 목표

1. 리액트 라이브러리를 학습하고 익숙해지는 것
2. 다양한 리액트 라이브러리 경험
3. 디자인보다 기능 구현에 초점 맞춘 작업
4. 팀프로젝트를 통한 협업을 경험
   - 깃허브를 이용한 협업
   - 코드 컨벤션과 규격화
   - 문서화 등

## 사용

1. `React`

- `framer-motion` : 애니메이션 효과 구현
- `react-hook-form` : 각종 form의 state관리, 유효성검사
- `react-icons` : 아이콘 컴포넌트
- `react-query` : 서버에 데이터 요청, 캐싱으로 최적화
- `react-router-dom` : 라우팅 기능
- `recoil` : 전역 state 관리

2. `post CSS` : 디자인
3. `npm` : 패키지 매니저
4. `prettier` : formatter
5. `firebase` : 장바구니 기능 위한 서버구현

## 목표 기능구현

- [x] 상품 정보 객체 만들기
- [x] GNB
  - [x] 전체상품
  - [x] 베스트
  - [x] 농산물
  - [x] 수산물
- [x] 검색
  - [x] 낮은 가격순, 높은 가격순
- [x] 카테고리
- [ ] 제품 상세페이지
  - [ ] 장바구니
  - [ ] 구매하기
  - [ ] 상세정보
- [ ] 제품리스트
- [x] 로그인
- [x] 회원가입,
- [x] 마이페이지
- [ ] 장바구니
  - [ ] 전체삭제
  - [ ] 상품당 삭제
  - [ ] 주문하기
- [ ] 구매하기
  - [ ] 배송지 선택
  - [ ] 주문자 정보
  - [ ] 결제수단
    - [ ] 계좌결제
- [ ] 관리자 페이지
  - [x] 상품 관리
    - [x] 상품 추가
    - [x] 상품 수정
    - [x] 썸네일 이미지 없는 경우 처리
    - [x] 전체 선택
    - [x] 선택 삭제
    - [ ] 선택항목 매진 여부 토글
    - [ ] 상품목록 리셋
  - [ ] 판매 조회

## 이슈 발생과 해결

- 리액트 컴포넌트 간의 겹침문제 https://github.com/fastcampus-team4/KDT3-M4/issues/17
- git이 대소문자 구별하지 못하라 때 https://github.com/fastcampus-team4/KDT3-M4/issues/30
- 슬라이드 framer-motion 애니메이션 적용 안된 문제 https://github.com/fastcampus-team4/KDT3-M4/issues/65
- Link 버튼 누를때 의도치 않은 쿼리 fetch로 로딩되는 문제https://github.com/fastcampus-team4/KDT3-M4/issues/66

## 앞으로 도전해볼 과제

- [ ] typescript 템플릿을 적용하여 마이그레이션
- [ ] 리팩토링을 통해 코드 퀄리티, 통일성 높이기
- [ ] 에러 및 예외처리 코드 추가
- [ ] css프레임워크 도입하기
- [ ] 디자인 퀄리티 높이기 위한 작업
- [ ] 반응형 디자인 적용하기
- [ ] 애니메이션 효과 적용하기
- [ ] 백엔드를 자체적으로 구현하여 api 대체하기
- [ ] 서버사이드 랜더링
- [ ] 상세정보 섹션 개선
- [ ] 웹사이트에 더 많은 기능 추가하기
  - [ ] 알림 기능
  - [ ] 문의 기능
  - [ ] 네이버나 카톡을 통한 로그인 기능
  - [ ] 쿠폰/포인트 및 할인 기능
  - [ ] 리뷰 및 평점시스템
  - [ ] Q&A 페이지
  - [ ] 주간 판매 랭킹
  - [ ] 성능 최적화
  - [ ] 사용성 개선

## 1차 프로젝트 회고

### 강해경

- 협업과제가 처음이라 초기 역할 분담과 디렉토리 구조를 잡는 부분이 어렵고 혼란스러웠다.
- 개인 과제하듯이 기능 구현을 위해 코드작성에 빠져버리면 내가 작성한 코드에 대한 설명이나 사용한 라이브러리, 진행상황을 문서화하고 공유해야하는 부분을 제때 공유할 수 없게 되었고 이로 인한 충돌이나 별도의 상의과정이 필요한 문제가 발생하였다.
- 리액트 사용이 처음이라 걱정했지만 다른 조원이 작성한 코드를 읽어보고 에러가 나는 부분에 대해 함께 이야기 하는 과정이 리액트를 익히고 리액트에 대한 이해도를 높이는데 도움이 되었다.

### 김혜인

### 김지원

##### 프로젝트를 하며 느낀점
- 초기 프로젝트 세팅을 세심하게 할 필요성을 느꼈다. 프로젝트를 일단 시작하는 것에 급급해서 코드 컨벤션이나 컴포넌트 작업 방식에 대한 충분한 논의가 이루어지지 않아 추후 수정한 부분이 많았다. 
- 문서화를 많이 하지 못 했다. 앞으로는 git issue를 적극적으로 활용해 발생한 문제점과 해결 과정을 적어야겠다.
- react 공부를 아주 아주 많이 해야겠다 .. 부족한 점이 많다. 다음 기회에는 api와 firebase를 활용하는 작업을 더 많이 해보고 싶다.

##### 질문사항
- 정확도순, 낮은가격순, 높은가격순으로 상품을 정렬하는 기능을 구현했습니다. 현재는 버튼을 클릭할 경우, 기존의 제품 배열을 복사한 뒤 가격순으로 상품을 재정렬합니다. 지금은 상품 개수가 많지 않아 이 방법을 사용할 수 있었는데 현업에서 상품이 많을 때는 어떤 방식으로 상품을 정렬하나요?

### 홍혜원

### 황이삭

- 역할 분담이 엄격하게 이루어지지 않은 것 같다.
- 초기 프로젝트 세팅에 신경 써야 될 것 같다. 각자가 세팅에 손을 대면서 충돌이 너무 심하게 났다. 세팅을 미리 정하고 한명이 만들어서 배포하면 다른사람들이 받는 방식으로 바꿔야 할 듯
- 코드 컨벤션 정하기 어려웠다.
  - 모두가 사용할 코드 형식이 무엇인지 정하는 게 힘들었고, 작업 효율성과 엄밀함 사이에서 밸런스 잡는 것이 까다로웠다.
- 문서화의 어려움
  - 문서화 하는 것이 시간이 너무 많이 걸린다.
  - 문서화를 잘 안하려고 한다
  - 이미지도 넣고 싶기도 하고, 더 자세하게 적고 싶을 때도 있었지만 시간적 압박과 문서가 쓸데없이 길어지는 문제도 같이 생겼다.
  - 플랫폼을 정하기 어려웠다. issues 게시판, 노션을 이용했는데 문서가 너무 파편화 되었다.
  - 코딩하느라 잠시 놓으면 뭘 문서화 할지 모르게 돼버린다. 그렇다고 이 둘을 병행하니 작업 효율이 너무 안나왔다.
  - 작성해도 잘 안읽는 거 같다 (좀 더 읽을만한 내용으로 개선해야 할 듯)
- 리액트로 컴포넌트 별로 작업을 나눠서 맡으니까 충돌도 별로 없고 협업하기 좋았던 것 같다.
- 깃허브에 좀 더 익숙해진 것 같다
