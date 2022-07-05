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
 1) useEffect
 
 가. 사용목적 : 렌더링 되고 이후에 API 호출해주고 싶을때 사용
 나. 특징 : 렌더링 되고 일어남
 예시) 버튼을 클릭할때마다 state값이 바뀌는 경우
 => 새로운 state가 재 렌더링 됨
 => useEffect도 렌더링 될때마다 작동함
 다. useEffect 사용법
 첫번째 매개변수에 함수를 전달해줌 but 원하지 않을때(state가 변경되지 않을때)도 렌더링 되면 함수가 계속 호출됨
 => 두번째 매개변수에 배열(의존성 배열)을 넣어줌
 => 해당 배열이 변경될 때에만 함수가 호출됨
 예) useEffect(()=>{},[변경할 satate] )  
 => 그냥 맨 처음에만 호출하고 싶으면 빈 배열[]을 두번째 매개변수로 넣어줌!
 
 2) fetch()
 가. 사용목적 : API 비동기 사용을 위함
 fetch(API주소)
 
3. custom Hooks 
 - 사용목적 : 반복적으로 사용되는 부분을 하나의 파일로 만들어
 재사용성을 높이고 수정을 용이하게 하기 위함.
 - 사용법 : hooks라는 폴더를 만들고 use로 시작하는 js파일 생성
 
 4. CRUD
 Create - POST
 React - GET
 Update - PUT
 Delete - DELETE
 
 > 14강 CRUD 중 Update(PUT 수정), Delete(DELETE 삭제)
 1) 사용법:
 fetch(주소, 객체{
 요청의 옵션들을 입력
  method : 'PUT',
  headers : {
   Content-Type(보내는 리소스의 타입 ) : 'application/json',-> 문자열, 이미지 html, 등등 가능 
  },
  body : JSON.stringify({
   ...word,
   isDone : !isDone
  })
 })
GET : 단순히 가지고 옴
PUT : 수정을 위한 정보들을 실어서 가져와야 함 -> body에 입력


 > 15강 CRUD 중 Create(POST, 생성), useNavigate()
 react-router v6에서 useHistory 네이밍 변화
 useHistory.push('경로') -> useNavigate('경로')
 
  > 16강 느린 인터넷 환경 테스트 : 개발자도구 > 네트워크 조건 > 느린 3G
  - 여기서는 length가 있냐 없냐로 구분함
  - 과제 : day 삭제 기능 , day간 이동 할때 화살표로 이동하기
 
