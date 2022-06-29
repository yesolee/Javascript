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
1.  버전6
 1) Switch -> routes
 2) component -> element
 3) Routes 자식은 Route만 가능 => component를 element 안으로 넣기

2. Link to="여기에 변수를 넣어야 할때"
 1) 시도 : Link to=`바로 백틱 사용하면 오류남`
 2) 해결 : Link to ={`괄호 안에서 백틱 쓰면 해결!`}
 
 3. Day.js에서 word.day === Number(day) 를 했는데 빈페이지가 안나오는 이유
 1) APP.js를 보면 빈페이지는 경로가 * 일 경우이고,
 /day/로 시작하면 빈페이지가 아닌 DAY페이지를 보여줌
 2) DAY페이지 중 <tobody>는 위의 const wordList에서 filter를 통해 특정 조건만 남겼으므로 해당이 안되는 항목은 없기 때문에 안나오는 것임
 
 > 11-12강
 1. json-server, REST API
 2. useEffect, fetch()
 1) useEffect 특징 : 렌더링 되고 일어남
 예시) 버튼을 클릭할때마다 state값이 바뀌는 경우
 => 새로운 state가 재 렌더링 됨
 => useEffect도 렌더링 될때마다 작동함
 2) useEffect 사용법
 첫번째 매개변수에 함수를 전달해줌 but 원하지 않을때(state가 변경되지 않을때)도 렌더링 되면 함수가 계속 호출됨
 => 두번째 매개변수에 배열(의존성 배열)을 넣어줌
 => 해당 배열이 변경될 때에만 함수가 호출됨
 예) useEffect(()=>{},[변경할 satate] )  
 => 그냥 맨 처음에만 호출하고 싶으면 빈 배열을 두번째 매개변수로 넣어줌!
