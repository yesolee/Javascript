# HTML
- Hyper Text Markup Language
- 웹페이지 만들때 씀
- 마크업 언어
- 자료들이 어디에 어떻게 배치되었는지 "구조를 표현"하기 위한 언어

# 태그
- <h1></h1> : 제목 heading 1~6 / display: block / 기본 margin이 있음
- <p></p> : paragraph 본문 / display: block / 기본 margin이 있음
- <image src="이미지경로"> : image
- <a href="주소"></a> : 링크
- <button></button>
- <ul><li></li></ul> : 순서가 없는 리스트 unordered list / list item
- <ol><li></li></ol> : 순서가 있는(번호 있는) 리스트 ordered list / list item
  
1. 모든 요소는 태그 안에 넣어어 쓰는게 좋음 : 웹표준 지키기
=> 어떤 역할을 하는지 알기 위해

2. 일부 태그는 속성 기입가능
=> src, href 등

3. 태그안에 태그도 가능 
=> 이미지 누르면 구글로 이동 : <a href=""><img src=""></a>

** 숙제
  Q. 글자 일부(이동하기)를 누르면 네이버로 이동?
  
#  style="" 속성 사용하여 꾸미기
  
1. 이미지 가운데 정렬
- display: block; margin-left: auto; margin-right:auto;
 
2. 글자 스타일링
- font-size : 16px;
- vW : 현재 브라우저 창의 너비
- % : 단위는 내 부모 사이즈에 비례
- 자간 조절 : letter-spacing:1px;
- 글자 정렬 : text-align: center;
- 자동완성켜기 : ctrl + space
- 글자 중 일부만 스타일 주고 싶을때 : <span></span> 태그 사용
  => span : 글자를 감쌀 수 있는 별 뜻 없는 태그
- 글자 굵게 : font-weight : 100~900 또는 <strong></strong>
* <span> 은 display : inline => 폭, 높이 단독으로 결정X 부모 태그인 <p>에 설정해야 함
  
# CSS
- Cascading(폭포..) Style Sheet : 스타일 보관파일

1. 파일빼기  
- style 속성을 계속 쓰면 html을 보기 어려움 => .css파일로 뺄 수 있음
- <link href="css/main.css" rel="stylesheet" />  : 상대경로
- class 는 .class명(class selector) => 스타일 줄 때 사용

2. selector  
- id는 #id명(id selector) => JS개발할때 주로 사용
- 태그는 태그명(tag selector)
# => 여러개 스타일 겹칠 경우!? 우선순위에 따라 적용! ***
- style="" >>> id(#) >> class(.) > tag 

3. 웹레이아웃의 기초 : div를 이용한 박스 디자인
- <div></div> : division 화면을 분할하겠습니다.
- margin : 상하좌우 여백
- padding : 상하좌우 안쪽 여백 을 채운 후에 글자를 채워라

4. inherit(자식태그에 상속) 지원하는 스타일
- font-size
- font-family(글씨체)
- color ..

# 레이아웃 만들기 - 박스를 가로배치하기

(1) float

* 감싸는 container/wrapper 박스 만들어두면 유용한
- 전체 width를 정하는 역할
- div는 display : block 가로행 다 차지함
- float : left 요소를 붕 띄워서 왼쪽 정렬 => 붕띄워서 다음 요소 추가하면 float한거 무시하고 처음에쓴거 바로 다음 순서에 옴
- clear : both => float 다음에 오는 요소에게 주면 float으로 발생하는 이상한 현상 해결 가능
=> float쓴 다음에 clear해주는게 좋음

(2) display : inline-block 내 크기만큼 차지 => 박스사이 공백을 제거해야함 (엔터키치면X)
* 공백제거방법
1) div 사이에 주석달기<!--여기서엔터
-->
2) 부모태그에 font-size:0px
: 부모 태그로부터 inherit되는 스타일은 중요도 가장 낮음
=> font쓰고싶으면 자식태그에서 style="font-size : 20px"처럼 스타일주면 됨
=> 근데 그럼 이상해짐 : vertical-align: top;쓰면 해결됨 // inline요소에 적용
=> baseline이 옆에 존재하면(옆에 글자가 있으면) display: inline-block 요소들이 baseline위에오려고함 

** inline 사용 시 주의사항
- 자기 크기만큼 자리 차지함
- 공백제거 필요
- 주변에 글이 있으면 가끔 이상해짐
  
** 박스부터 배치하고 내용 채우기 시작하면 쉬움

* class 이름 작명할 땐 의미전달도 중요함

# float 관련 문제
  - margin이 안먹힘
  - <div>사이에 <div style="clear : both"></div>를 넣어줌
  - float준 요소 다음에 이런 가상의 박스 넣어주는걸 추천
  
# nav
  - div : 박스만들때 씀
  => 한번에 어떤 기능인지 알기 위해 다른이름으로 쓸수있음
  - nav : 네비게이션 만들때 div대신 쓸수있음
  - section
  - footer
  
  * selector 문법
  1) 공백 : ~안에 있는 모든자식
  2) > : ~안에있는 직계자식 => 자식의자식은 안바뀜
  * 주의
  .container div>div>p>span {
    color : red; //비추천
  }
  
  p쯤에 class정해서 p class명 span { 
    딱 읽었을때 어디에 쓰는지 잘보여서 더 좋음
  }

# background

* background-image: url(/cat.jfif), url(); url 2개 이상 넣으면 그림이 겹쳐짐 => ex. 투명도를 지원하는 png 이미지 사용
* bacground-size : 
1) cover : 배경짤려도 상관없으니 빈공간없이 배경으로 꽉 채워라
2) contain : 배경짤리면 안됩니다.  
* background-repeat : no-repeat 공간남으면 반복되는거 막아줌  
* background-position: center; 가운데부터 그림 나옴
* filter brightness(70%): 박스에 보정 입히기 => 이미지 위에 글씨쓸때 이미지 어둡게해서 그 위에 쓴다던지 함
- 안에 글씨 있으면 글씨에도 필터 입혀짐=>이미지에만 따로 쓰는게 좋음
- 옛날버전 tint 주는법 : 
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url();
* background-attachment : fixed; 웹사이트가 스크롤되도 이미지 고정

*** margin collapese현상
- 박스(div) 2개일 경우 위쪽 테두리가 겹침(큰네모안에 작은네모 or 큰네모 바로 밑에 작은 네모) => marine도 합쳐짐 (큰걸 우선적으로 적용시킴)
=> 해결법 : 테두리를 안붙게 하면 됨 ex. 패딩주기

*** body 태그는 기본 마진이 있음. 처음에 body에 margin:0px 해놓기

# class명 중복을 피하는 방법
- 접두어를 활용 ex. button => main-button

# position(기준점 잡기)
1) 좌표 이동 가능
- position : 
* relative; 내 원래 위치를 기준으로 이동하세요
*absolute 내 부모 태그가 기준 => 대신 부모태그에 position:relative써줘야함
- 가운데 정렬로 absolute하고 싶으면
left: 0; right :0; margin:auto; width : 원하는 요소 크기 (안적으면 가로 행 다 차지함)
* static; 기준이 없음 좌표적용 불가X, 
* fixed; 현재화면이 기준 (viewport)
- top : 100px; 이런식으로 position을 줘야 함
2) 공중에 뜸
=> 글 다음에 position부여한 버튼이 있으면 공중에 뜨기때문에 길이 아무리 길어져도 원하는 위치에 계속 있을 수 있음

# z-index
- 공중에 떠있는 애들이 많으면..
누가 맨 앞에 올것임? => z-index 사용-
- 정수 사용, 높을수록 앞에옴

# max-width
- width : 80% // 부모요소 크기의 80%
- 반응형 웹페이지 만들고 싶으면 % 사용
- PC사이즈에서 너무큼 => max-width 사용

*** width는 content 영역의 너비를 의미함
=> 패딩, 보더 등은 width랑 상관없음
=> 패딩이 크면 박스도 커짐
=> 해결법 : width를 패딩과 보더 포함해라
box-sizing : border-box;
기본은 content-box임

** css파일 맨 위에
div {
  box-sizing: border-box;
}
body {
  margin : 0px;
}

브라우저마다 기본 디자인이 다르게 보일 수 있음 
=> 호환성 이슈 해결책부터 CSS파일 맨위에 첨부 reset, normalize.css
or html에 link태그 첨부

# form
* input
- input name="인풋이름" (서버개발할때 사용)

* select
- option

* textarea rows="크기세팅가능" 인풋 크기 조정가능

** 버튼 만드는법 2가지
1. input type="submit"
2. button type="submit"


# selector 문법 : 
1) 타입이 텍스트인 인풋만 스타일링 할 수 있음
input[type(속성명)='text'(속성값)] {
  타입이 텍스트인 인풋만 스타일링 할 수 있음
}

2) 콤마로 여러개 선택 가능
-div,input,textarea {
  box-sizing: border-box;
}

# css 쓰는 꿀팁
1) 초보들은 그때그때 class 새로 만들어서 씀
2) 고수들은 기존에 있던 클래스(ex. w-100)명 재사용
=> 어떻게 class만들어야 재사용이 가능할지 고민하기!
3) 기존에 있던 클래스에 추가 스타일링(ex.h-80)이 필요할 경우 class2개쓰기
class="w-100 h-80"

# label태그
- input쓸때 같이 쓰는 태그 for="sub" 속성 넣어줌 input에는id="sub"
=> 라벨 누르면 인풋도 누른것처럼 동작

* 버튼 오른쪽 정렬 간단히 하는법
- display:block; margin-left:auto

# 표만들기
- 장바구니같은거 만들떄 씀
- table태그 쓰기
- 가로 행 tr
- 세로 열 td
** tr부터만들고 td만들어야함
- 제목용 세로 열 만들때(글씨 굵게) th

** 제목 thead, tbody
- table은 기본적으로 틈이 존재
table {
  border-collapse: collapse;
}

** 셀안에 내용 정렬 (세로정렬) style="vertical-align: middle/top/bottom"
- 용도1) inline (폭과 너비가 없는 요소, 항상 옆으로 채워짐)
ex. 대표적인 inline요소 span 
/inline-block요소 간의 세로정렬할 때 vertical-align 씀
=> 위첨자(super) 처럼 정렬도 가능해짐, 아래첨자sub
- 용도2) table안에서 세로정열할때 사용 (top/middle/bottom)만 가능

** 일반 div로 표 만들기 display:table
    <div style="display: table">
      <div style="display: table-row">
        <div style="display: table-cell">21</div>
        <div style="display: table-cell">23</div>
      </div>
    </div>

  ** td 폭 조정시 유의사항
 - td에게는 최대한 이만큼 차지해보세요(다른셀에 영향을 주지 않는만큼)~ 라는 max-width와 유사한 의미(글자 보이는 최소폭이 있기 때문에)
 - 표는 맨위에 폭만 조저래도 아래 표는 자동으로 늘어남
 - nth-child()셀렉터 ***
  
  .cart-table th:nth-child(2) { //두번째 th요소를 설정해라
    n번째 등장하는 요소만 스타일링 할때 클래스명 안만들어도 되서 편리함
  }
  
  # pseudo-class
  
  * :hover 마우스 올릴때 스타일
  * :focus 커서찍혀있을때 스타일
  * :active 클릭할때 스타일
넣을 땐 순서가 중요함 (기억안나면 hofa로 외우기)
  * :link 클릭 전 스타일
  * :visited 클릭 후 스타일
  
  
 # 코드양이 줄어드는 class 작명법 (OOCSS, BEM)
  
  (1) OOCSS 
  
  - 중복을 피하기 => 살 발라내기
  ex. 뼈대 class1개 + 특징 1개 
  
  - 장점 : css양이 줄어든다, 유지보수 편리함 =>OOCSS
  Object Oriented CSS
  - 단점 : html이 더러워짐
  
  - Utility class : 스타일 한두개만 들어있는 class
  ex. 부트스트랩 같이 쓰는거
  ex. 폰트사이즈 미리 정해둠
  .f-samll / f-mid / f-large
  
``` HTML
      <button class="main-btn bg-red f-lg">더알아보기</button>
      <button class="main-btn bg-blue">구매하기</button>
```
```  css
.f-lg {
  font-size: 20px;
}  
  
.main-btn {
  padding: 15px;
  border: none;
  cursor: pointer;
}

.bg-red {
  background: red;
}

.bg-blue {
  background: blue;
}
```
 
  (2) class 작명할때 창의력이 딸리면 BEM
  Block_Element--Modifier
  
  -class 덩어리 이름__역할--세부특징
  -div class="profile"
    -img class="profile__img"
    -h4 class="profile__title"
    -p class="profile__content"
    -button class="profile__button--red
    -button class="profile__button--blue
  
  근데 이건 button class 2개 만들어야 하니까 OOCSS랑 합쳐서
  - button class="profile__button bg-red"
  - button class="profile__button bg-blue" 로 하는게 좋아보임
  
  *** 근데 React, Vue쓰면 덩어리(Component) 단위로 HTML 파일 나눠서 코드 짜기 때문에 Component에만 사용 가능한 CSS 생성 가능
  => 각 component끼리 똑같은 클래스명 사용 가능 (각각 만들기 때문에)
  
  
  # 폰트 설정
  - font family : 'a글씨체' , '안되면 b글씨체', '이것도안되면 이거로해주세요c'
  // 페이지 사용하는 유저의 컴퓨터에 해당 폰트가 있어야함
  // 한글은 용량이 커서 가능하면 woff 파일을 사용 (ttf의 1/3수준)
  => 1~2개만 씁시다
  
  // 내가 준비한 폰트파일을 css에서 사용가능하게 등록
  @font-face {
  font-family: '이쁜폰트';
  src: url(../font/NanumSquareR.woff);
}
  .body {
  margin: 0;
  font-family: '이쁜폰트';
}

** 폰트 부드럽게 처리하려면 회전시키기
p,
h4,
h3,
span,
button {
  transform: rotate(0.03deg);
}

# flex
- inline, table과 비슷한 속성
- width: 600px; 일 경우 최대한 맞춰주세요~ (꼭 600px아닐 수 있음)
- 가로정렬 : justify-content: (flex-start/center/flex-end)
- 세로배치 : flex-direction: column;
- width크면 밑으로 보내고 싶을 떄 flex-wrap:wrap
- 상하정렬 : align-items (flex-start/center/flex-end)
* align-content : 박스가 여줄일때 박스들의 상하정렬
(space-between, space-around) 포함
- 박스크기를 비율로 설정 가능 flex-grow:2 // 다른 요소에 비해 2배큼(최대한, 정확이2배는 아님)

# Emmet 기능 활용
- div.container>div 엔터 (.class명 css셀렉터 문법)
=>  <div class="container">
      <div></div>
    </div>

- div#header>p.title*3 (#id명 css셀렉터 문법)
      <div id="header">
        <p class="title"></p>
        <p class="title"></p>
        <p class="title"></p>
      </div>
      
 - lorem 엔터 => 임시글자 무작위 생성
 
 *** 연습하기
 1) div 몇개 필요할 지 전체적인 구조 생각
 2) 여기 글은 p태그로 쓸지 h1으로 쓸지 먼저 생각
 3) 클래스명은 뭘로 할지 미리 생각
 4) 그다음에 스타일 입히기
 
 - color : #까지만 입력하면 내가 위에서 사용한 색상 힌트 보여줌
 
 # head 태그 안에 들어가는 태그들
 1) link (css파일) 태그
  <link href="css/main.css" rel="stylesheet">
  ** 경로
  - css/main.css : 현재 html과 같은 경로에 있는 css라는 폴더 내의 main.css파일 => 상대경로
  - /css/main.css : 현재 사이트의 메인 경로 (yesolee.github.io)경로에 /css/main.css를 추가 => 절대경로
  
  2) style(css) 태그
  - html 파일안의 코드는 위에서부터 읽으므로 body태그 맨 밑에 두면 사이트 로딩 시 스타일이 잠깐 깨질 수 있어 head에 넣음
  
  3) title 태그
  - 사이트 제목 (탭에 뜨는 이름)
  
  4) 여러가지 meta태그
  - 사이트의 인코딩 형식 charset="UTF-8"
  - 사이트 검색 결과 화면에 뜨는 글귀 수정
 * name="description"(구글검색시 팦란 제목으로 뜨는 글귀) content="어쩌구"
  * name="keywords" 검색에 도움을 주는 키워드 등 "content"="HTML,CSS,코딩"
  - 사이트 초기 zoom 레벨이나 폭 지정
  * name="viewport" , content="width=device-width"//모바일 기기의 실제 폭으로 렌더링 해주세요
  content=",initial-scale=1" // 접속시의 화면 줌레벨 설정
  => 반응형 웹 만들때 쓰는 meta 태그
  ```HTML
  <head>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  ```
  
  5) open graph
  - 이미지 박스안에 사이트 설명, 제목, 이미지가 뜨는데 이걸 커스터마이징 하고 싶을때 사용
  ```HTML
  <head>
  <meta property="og:image" content="/이미지경로.jpg">
  <meta property="og:description" content="사이트설명">
  <meta property="og:title" content="사이트제목">
</head>

6 Favicon
- 웹사이트 옆에 뜨는 아이콘
- ico 혹은 png파일
- 32*32 사이즈
- 바로가기 추가 아이콘
rel="apple-touch-icon-precomposed"  
- OS 호환 : favicon generator

  ```
  <head>
  <link rel="icon" href="아이콘경로.ico" type="image/x-icon">
</head>
  ```
  
  
  # 반응형 웹페이지
  - 화면사이즈가 작으면 스타일을 변경해주세요~
  
  ** 사이즈
  - vw : viewport width 브라우저 폭에 비례
  - vh : 브라우저 높이에 비례
  - rem : 기본 폰트 사이즈에 비례 (HTML 16px의 10배 10rem = 160px)
  => 쓰는 이유 : 옛날 브라우저는 설정에 들어가서 font-size옵션에서 수정함
  => layout이 깨질 수 있음
  => 모든 곳을 rem으로 크기 지정하면 기본 font-size 커져도 모든게 같이 커짐
  => 요즘은 ctrl 마우스 하면 다같이 커져서 안씀
  => 요즘은 typography 디자인할때 px 외우기 귀찮을때 씀
  
  - em 내 폰트 사이즈의 n배

# media query => 항상 멘 밑에 있어야 잘 작동!

@media screen and (max-width: 1200px) { // 1200px 이하에 밑에꺼 적용해주세요
  .main-title {
    font-size: 30px;
  }
  .nav-menu {
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .nav-menu {
    font-size: 10px; // 768px 이하면 이거 추가해주세요 => css는 밑에 줄에 있는거 우선 적용
  }
}

=> 큰사이즈 -> 작은사이즈 순으로 작성
=> 다른 사람이 많이 쓰는 breakpoint 기준 px값을 따라하는 것을 권장
- 1200px : 태블릿 디자인
- 992px : 
- 768px : 모바일
- 576px : 
=> 어디서 넣을지는 정하기 나름 (4개 넘어가면 복잡하니까 3개정도로 만족하기)

- screen 모니터 print 프린터화면 (프린트는 생략가능)

* 숙제 : PC 글자4개 옆으로 배치 / 태블릿 사이즈 2열 / 모바일 세로로배치

1) PC용 레이아웃 부터 만들면 쉬움
2) flex-box 안쓰고 float만 써도 만들 수 있음
  
  # 디버깅
  - 내가 원하는대로 안나올때
  - 스타일이 중첩되어있는 경우 있을 수 있음
  
  1) CSS파일부터 살펴보기(오래걸림)
  2) 크롬 브라우저 개발자 도구 활용
  => 우선적용중인 스타일을 맨 위에서 보여줌
  3) 태그안에 스타일속성 있는 경우 맨 위에 보여줌
  ***** 여러개 스타일 겹칠 경우!? 우선순위에 따라 적용! ******
- style="" >>> id(#) >> class(.) > tag 

 * 사용자 에이전트 스타일시트
  - 브라우저 기본 css
  
  # 브라우저
  - IE11이상에서만 display : flex 가능
  - 익스플로어 용 css파일 및 if문 추가
  ```html

<!--[if lt IE 10]> //10미만 버전일때
  <link rel="stylesheet" type="text/css" href="css/ie8.css" />
<![endif]-->
  ```
