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
=> 여러개 스타일 겹칠 경우!? 우선순위에 따라 적용! ***
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
  
* background-repeat : no-repeat 공간남으면 반복되는거 막아줌  
* cover : 배경짤려도 상관없으니 빈공간없이 배경으로 꽉 채워라
  
