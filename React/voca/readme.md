#코딩앙마 react
> 6강 이벤트처리 (Handling Events)

함수 X 바로 만들기
return ( <input type='text' onChange={(e)=>{ console.log(e.target.value);}} /> )

함수 미리 만들어 놓고 불러오기 2-1. 함수만 불러오기 (매개변수 미리 지정)

function showText(e){ console.log(e.target.value); }

return( )

2-2. 인자 까지 전달받아 함수 불러오기

function showText(txt){ console.log(txt); }

return( <input type='text' onChange={(e)=>{ const txt = e.target.value; showText(txt); }} /> )

> 7강 useState
동일한 componenet를 3개 불러와도 각각의 state는 영향받지 X

> 8강 Props : properties 속성값

> 10강 라우터 구현 : reat-router-dom
* 버전6
1) Switch -> routes
2) component -> element
3) Routes 자식은 Route만 가능 => component를 element 안으로 넣기
