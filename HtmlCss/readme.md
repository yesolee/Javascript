# HTML
- Hyper Text Markup Language
- 웹페이지 만들때 씀
- 마크업 언어
- 자료들이 어디에 어떻게 배치되었는지 "구조를 표현"하기 위한 언어

# 태그
- <h1></h1> : 제목 heading 1~6
- <p></p> : paragraph 본문
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

