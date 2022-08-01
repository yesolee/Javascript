1. react 파일 생성
- npx create-react-app shop <- shop은 만들고싶은 폴더 명

2. 부트스트랩 사용 (html, css 편의상)
- https://react-bootstrap.netlify.app 접속
- vs code에서 npm install react-bootstrap bootstrap 입력 (22년 7월기준)
- app.js파일에 import { Navbar, Container, Nav, Col, Row .. 등등 사용할 것들} from 'react-bootstrap'; 
- className 정하면 커스터마이징 가능 !!

3. 이미지 삽입
방법 1) CSS 파일에서 이미지 경로 불러오기
.main-bg {
  height: 500px;
  background-image: url('./img/cocktail.jpg');
  background-size: cover;
  background-position: center;
}
방법 2) JS파일에 폴더 경로 import해서 사용하기
import bg from './img/cocktail.jpg';
      <div
        className='main-bg'
        style={{ backgroudImage: 'url(' + bg + ')' }}
      ></div>
      
      // 변수 사용할때 (' + bg + ')
      
방법 3) public 리액트는 사이트 발행전에 html,js,css파일을 압축함(bundling), public안의 폴더는 압축 안됨
 가. codingapple.com/에 발행할 경우 
 - public폴더 이미지 사용할땐 그냥 /이미지경로 (src='/cocktail.jpg')
 나. 내 사이트의 서브 경로가 있을 경우 : codingapple.com/어쩌구/에 발행할 경우
 - src={process.env.PUBLIC_URL + './cocktail.jpg'}

### export , import
1. 언제 사용 ? 데이터가 많아서 다른 파일에 저장해놓고 그걸 사용하고 싶을때 등등..
2. 어떻게 사용? 
 1) data가 들어있는 js 파일 : data.js
'- 1개만 내보낼때 : export default 내보내고 싶은 변수 ; 
'- 2개 이상 내보낼때 : export {내보내려는 변수이름, 내보내려는 다른 변수 이름}
 2) 사용하려는 js파일 : App.js
'- 1개만 가져와쓸때(복사) : import 원하는 이름 작명 from '파일경로'; 
'- 2개 이상 내보낼때 : import {가져오려는 변수이름, 가져오려는 다른 변수 이름} from '파일경로'; //작명불가

2. 데이터 뽑기
- 시작기호가 [이거면 aaray : 인덱싱[0]으로 접근
- 시작기호사 {이거면 object : .key이름

** 숙제 
- 1. 상품목록 컴포넌트로 만들기
- 2. 데이터바인딩 새로 하기
- 3. 반복적인 부분 map사용


### 상세페이지
- JS : html 여러개 만들어서 해당 페이지 불러옴
- react : 컴포넌트 만들어서 상세페이지 내용 채움 => 누가 /detail 접속하면 그 컴포넌트 보여줌
=> react-router-dom 라이브러리 쓰면 쉽게 만들 수 있음

1. react-router-dom 사용법
- 터미널 오픈 => npm install react-router-dom@6 //6버전
- index.js 파일에 import {BrowserRouter} from "react-router-dom";
root.render( ) 안에 있는 <App />을 <BrowserRouter>로 감싸줌

** import 시 내가 만든 파일 경로는 './'로 시작함 아닌것들은 대부분 설치한 라이브러리 


### Hook 
- 유용한 함수같은거 들어있는 거 : use~로 시작하는 것들
1. 페이지 이동 도와주는 useNavigate()
            <Nav.Link
              onClick={() => {
                navigate('/detail'); // 이 함수 실행하면 이 페이지로 이동됨
              }}
              href='#pricing'
            >

 navigate(1)//앞으로 1페이지 이동
 navigate(-1)//뒤로 1페이지 이동
 
 2. 404페이지 (없는페이지)
<Route path='*' element={<div>없는페이지에요</div>} /> / *:그 외 모든것

3. Nested Routes : 태그안에 태그 들어간거
1) <Route path='/about/location' element={<div>위치임</div>} />이거대신에
        
2) 이렇게 쓰는걸 말함
<Route path='/about' element={<About />}>
 <Route path='member' element={<div>멤버임</div>} />
</Route>

3) Nested Routes장점 : nested route 접속시엔 element 2개나 보임 (about꺼랑 member꺼)
- 대신 어디 보여줄지 작성해야함 => about 컴포넌트 안에 원하는 위치에 outlet사용
- 작성안하면 상위의 about꺼만 보임

4) Nested Routes왜쓰는거야/ 어디쓰는거야?
- 여러 유사한 페이지 필요할 때

5) Routes장점 : 이런식으로 UI만들면 뒤로가기 버튼 이용 가능, 페이지 이동이 쉬움(UI스위치 조작 쉬움)

3. 상세 페이지 많이 만들고 싶다면? URL 파라미터 사용!
- <Route path='/detail/:id' element={<Detail cocktail={cocktail} />} /> // :id는 작명 가능, 아무거나 오면~이라는 뜻
- useParams라는 훅 사용!

## styled-components 라이브러리
- 터미널 서리 : npm install styled-components
- js파일에 import (import styled from 'styled-components')
* 이쁜 버튼 만들고 싶으면? className넣고 css 파일 가야함
- 라이브러리 쓰면 js파일에서 전부 해결 가능
let YellowBtn = styled.button` //하나의 컴포넌트이기 떄문에 대문자로 시작하는 작명
  background : yellow;
  color:black;
  padding:10px; //백틱 안에 스타일 지정
` : 방금 버튼태그 만든것임
// 사용도 컴포넌트처럼 사용
< YellowBtn> 버튼 </ YellowBtn>

1. 장점 : 다른 js파일 간섭X -> css오염x (react 는 파일을 하나로 합쳐서)
- 다른방법 : App(컴포넌트명).module.css 로 파일 만들면 App.js에만 적용이 됨

2. 로딩시간이 단축됨
css파일 만드는게 아니라 <style></style>태그로 넣어 줘서

3. 비슷하게 여러번 쓰고 싶다면 ? props문법쓰면됨!
let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == 'blue' ? 'white' : 'black')}; //간단한 프로그래밍 가능
  padding: 10px;
`;
--
      <YellowBtn bg='blue'>버튼</YellowBtn>

let Btn = styled.button(YellowBtn) // 복사해서 쓸수도 있음

4. 단점 : js파일 매우 복잡해짐
5. 중복스타일은 컴포넌트 간 import 할텐데 그럼 css와 다를 바가 없음
6. 협업시 css 담당의 숙련도 이슈
7. 연습 : 직접 여러가지 레이아웃 만들어보기

#컴포넌트의 Lifecycle 인생주기
1. 개념
- 페이지에 장착되기도 하고 (mount)
- 가끔 업데이트 되고 (update)
- 필요없으면 제거되고 (unmount)

=> 왜 알아야 하나? : 중간 중간 코드실행 가능 - 갈고리 다는 것처럼(훅)

2. 사용법
1) 과거 버전
class Detail2 extends React.Component {
  componentDidMount() {

  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
}

2) 요즘버전
useEffect라는 훅을 씀 : 훅 -갈고리

export default function Detail(props) {
  useEffect(() => {
    // mount 시 실행 (2번실행됨, 디버깅을 위해서 , 배포 이후 발행하고나서는 1번 동작 )
    // update 시 실행 : 재렌더링 ->state변경
    console.log('안녕');
  });

***     console.log('안녕');를 useEffect 밖에 써도 동작함 -> 호잉... 언제쓰는거지? 왜쓰는 거?
useEffect(()=>{
  요 안의 코드는 렌더링이 다 된 이후에(html이 로딩이 다 된 이후에) 실행이 됨.
  자바스크립트는 위에서 아래로 죽 내려오기떄문에
  오래걸리는 **어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착 등***
  이 안에 넣어주면 html이 먼저 뜸!
})

3) 왜 이름이 Effect ?
Side Effect 함수의 핵심기능(html렌더링 등)과 상관없는 부가기능

4) 실행조건 [여러개 가능1, 여러개가능2]
- useEffect(()=>{}, [count]) // mount시, count라는 state가 변할때만 실행됨 =>[count]를 dependency라고 부름
- 꼼수! []공란으로 두면 update시에는 반영X, mount시에만 실행됨
- return ()=>{} 입력시 useEffect 동작 전에 실행됨 : clean up function
  useEffect(() => {
    let a = setTimeout(() => {
      setAlertBox(!alertBox);
    }, 2000);
    return () => {
      기존 타이머는 제거해 주세요 ~~ //react는 타이머가 많아서 에러 막기위해 필요!
      clearTimeout(a) //타이머 제거해주는 함수임
    };
  }, [count]);
  
  ** 주의 : 서버로 데이터 요청 시 2초 소요될 경우, 가져오는 도중에 재 렌더링이 되면 또 서버에 요청을 날리고... 꼬임
    return () => {
      기존 요청은 제거해 주세요 ~~ 
      clearTimeout(a) //타이머 제거해주는 함수임
    };
    clean up fucntion은 mount시 실행안됨, unmount시 실행됨!
    
    정리!!
    1. 재렌더링마다 코드 실행하고 싶다
    useEffect( ()=>{} )
    2. 컨포넌트가 로드 될때 딱 한번만 실행하고 싶다
    useEffect( ()=>{} , [])    
    3. 컴포넌트가 삭제 될때 1번만 실행하고 싶다(unmount시)
    useEffect( ()=>{
      return ()=>{
        
      }
    } , [])
    4. useEffect 실행 전에 뭔가 실행하려면 
    언제나 return ()=>{}
    5. 특정state변경시에만 실행하려면 [state명] //첫 mount시에도

## input 태그
1. type을 text로 할 경우 숫자를 입력해도 typeof는 text
- <input type = 'text'></input> 후 typeof Number(e.target.value) 하면 글자던 숫자던 다 Number가 나옴..
- Number(입력값) >= 0 || Number(입력값) < 0 하면 숫자는 true,  문자는 false
- 또 다른 방법 :  isNaN (숫자는 false, 문자는 true)

## Axios 서버 통신
: 비동기식 자바스크립트 XML(Asynchronous Javascript And XML)의 약자
1. 서버에 데이터를 요청할건데..
 1) 서버 : 데이터 요청하면 진짜로 데이터 보내주는 프로그램
 2) 서버개발시 짜는 코드 : 누가 A요청하면 A 보내주세용
 3) 요청방법 : 1. 방법(GET가져오기/POST보내기) / 2. 어떤자료(URL) URL은 서버개발자에게 물어보면됨 

2. GET요청 하는법
 1) 브라우저 주소창 : GET요청하는 곳 but GET/POST 요청 시 새로고침됨
 2) ajax 사용 - 새로고침 없이 JS로 요청 가능
  - 3가지 방법 중 선택 (1. XMLHttpRequest 옛날JS JS, 2. fetch() 요즘JS문법, 3. axios 외부라이브러리 )
  - 터미널에 설치 : npm install axios(라이브러리) 후 import axios from 'axios'; axios.get('url').then()
  - ajax요청 실패할 경우 ? .catch( ()=>{} )
  
  ***동적인 UI 만드는법 !! 잘 기억해둡시다
  
  ** 배열을 복사할때 꿀팁 let copy = [...shoes, ...결과.data]
3. POST
- axios.post('url', {name : 'kim'})
동시에 ajax요청 여러개 하려면
Promise.all([axios.get('/url1'), ('/url1') ]) //둘다 만족할때
.then(()=>{})

- 서버와 문자만 전달 가능 => "{"name":"kim"}" 이렇게 따옴표로 감싸줌(json) => array나 object 받아올 수 있음

2)fetch('url') // 그냥 JS기본문법으로도 GET 요청 가능
.then (결과 => 결과.json()) json을 array나 object로 변환해줌 , axios는 변환할 필요 없어서 편리함
.then(data =>{})

## 탭만들기
- Nav 만들떄 유의점 : eventkey를 각 각 지정해줘야함
- defaultActiveKey : 기본으로 눌러지는 버튼

* if문 쓰는 법 ?
Component 만들어서 사용
=>  return 값을 꼭 지정해줘야함

오늘의 팁 1) porps.어쩌구가 귀찮으면 {props이름}
function TabContent({탭) {
  if (탭 == 0) {
    return <div>내용0</div>;
  }
  if (탭 == 1) {
    return <div>내용1</div>;
  }
  if (탭 == 2) {
    return <div>내용2</div>;
  }
}

2) if문 안쓰고 자료 꺼내오는 법 => array활용
function TabContent({탭}) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]
}

# CSS 전환애니메이션
- 부착하면 애니메이션 나오는 className하나 만들고 원할때 부착하면 됨
1) 애니메이션 동작 전 스타일을 className 만들기
2) 애니메이션 동작 후 스타일 className 만들기
3) className에 transition 스타일 속성 추가
// transition : opacity 0.5s => opacity가 변경될때 0.5초에 걸쳐서 변경해주세요
4) 원할때 2번 className 부착


* <리액트의 automatic batching 기능>
- state 변경하는 함수들이 근처에 있으면 하나로 합쳐서 한번만 state 변경해줌
ex. state변경함수() -> 재렌더링 x
state변경함수() -> 재렌더링 x
state변경함수() -> 재렌더링 x
state변경함수() -> 재렌더링 x
state변경함수() -> 재렌더링 O => 마지막에 재렌더링 해줌
=> setTimeout 처럼 시간차 두면 해결

# single Page Application 단점 : 컴포넌트 간 state 공유 어려움
- 부모컴포넌트 -> 자식컴포넌트 props 전송은 가능

1. App > Detail > TabContent : state 전송시 한번에 X 
: cocktail={cocktail} props전송해줌  => cocktail = {props.cocktail} 한번더 props 전송해줌
문제점 : 10번 넘게 중첩되면 복잡하고 귀찮음

해결법
1_ Context API(react기본문법)
- props전송없이 state공유가능
- but 성능이슈, component재활용이 어려워서 잘 안씀
<단점>
1) 부모 state 변경시 쓸데없는것까지 재렌더링, 자식 Coponent 중에서 {재고}안쓰는 컴포넌트들도 다 재렌더링 됨
2) 자식 컴포넌트가 context 문법을 사용하고 있으면 이 컴포넌트를 다른 컴포넌트에서 사용하고 싶을때 이상해질 수 있음 (재사용이 어려움)

1) createContext() import 하고 함수 밖에 state 보관함(context) 만듬 (변수에 담아줌) => export하기
2) <Context>로 원하는 컴포넌트(Detail) 감싸고 value={{전달하고 싶은 state이름 넣기}}
3) 사용하고자 하는 컴포넌트로 가서 import {} from './../App.js'
4)   useContext를 import 하고 
  let { 재고, cocktail } = useContext(Context1); // 보관함 해체 
5) 컴포넌트의 자식(TapContent)에서도 useContext()사용
  let { 재고 } = useContext(Context1); => props 함수의 변수로 담을 필요 X


2. 외부 라이브러리(Redux 등) 사용 

 # table 
  1) tr : 가로줄
  2) th, td 줄 중 하나 : 세로줄
  3) thead 제목 / tbody 
  
  1. redux 설치 ------- Redux가 복잡해서 요즘은 Redux 개선 버전인 Redux Toolkit 사용
-  npm install @reduxjs/toolkit react-redux
-  store.js 파일 생성 후 
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer:{
    
  }
})

- index.js가서 <Provider store={store}>로 감싸주기

2) redux 왜씀 ? 컴포넌트 간 state 공유 편해짐 props전송 필요없음
 가. store.js파일
- createSlice를 import 해오기
- createSlice를 이용한 하나의 slice 생성
let user = createSlice({
  name: 'user',
  initialState: 'Kim',
});

- reducer에 등록
export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
 나. Cart.js 사용하려는 컴포넌트
 - useSelector 를 import (redux)
 - useSelector((state)=>{return state})로 Redux store 가져오기
 원하는것만 가져오고 싶으면 return state.user , 중괄호랑 return은 생략 가능 : useSelector((state)=> state.user)


3. 컴포넌트 몇개 없으면 props가 더 편함

4. redux 쓴다고 해서 sotre안에 다 넣을 필요 없음. 공유필요없으면 그냥 useState쓰면 됨.

5. Redux의 state변경하는법
- state수정해주는 함수 만들고,
- 원할때 그 함수 실행해달라고 store.js에 요청
(1) state 수정해주는 함수 만들기
reducers : {
  함수명() {
    return '변경 후 state이름'
  },
  함수명2() {
  }
  .. 여러개 생성 가능
}

(2) 만든 함수를 export 해야 함
slice 밖에서
- 보관함이름.actions => state 변경함수들이 남음
- 귀찮으니까 distructuring 문법(변수로 빼는 문법) 사용 export let { changeName } = user.action;

(3) 만든 함수를 import 해서 사용
- import { changeName } from '파일경로'
- useDispatch 를 import => let dispatch = useDispatch(); store.js로 요청 보내주는 함수임
- dispatch(state변경함수()) 사용

(4) 결론 : 그지같음 but 사이즈가 커지면 버그 방지 할 수 있어서 좋은 방식임~!
- 모든 컴포넌트들이 직접 state 수정하면 에러 났을 때 어떤 컴포넌트에서 오류가 났는지 찾기 어려움. 
- state 변경을 요청하는 형식으로 진행하면 버그 났을때 store.js만 찾아보면 됨

(5) state 변경 : array/object의 경우

let user = createSlice({
  name: 'user',
  initialState: { name: 'Kim', age: 20 },
  reducers: {
    changeName(state) {
      return { name: 'park', age: 20 };
    },
  },
});

- array/ object 의 경우 return없이 직접 수정해도 state 변경됨 => 그래서 문자하나만 필요해도 일부러 {}안에 담기도 함
  reducers: {
    changeName(state) {
      state.name = 'park' // immer.js라이브러리가 자동으로 설치되서 state 복사본을 return해줘서 그냥 이렇게 짜도 변경 가능
    },
  },
  
  - 함수 안에 파라미터 사용하고 싶을 경우 .payload(화물, 소포, 택배..._) 써주면 됨
      changeAge(state, action) {    // action : state 변경함수
      state.age += action.payload;
    },
  
  changeAge(10) // a=10 메세지에 싣어보내는 화물임

  - 파라미터 잘 쓰면 함수 여러개 안만들어도 됨!
  
  # store의 state의 수정은
  1. 수정함수 만들기
  2. export
  3. 원하는 곳에서 import 
  
  
  ** 숙제 : 삭제기능 만들기
  - 문제1 :  slice 사용하였으나 state에 반영이 안됨 
  - 해결1 : slice는 shallow copy라서 변경이 안되므로 slice를 return 값으로 넣어줘야함!
  - 해결2 : slice는 삭제된걸 남기므로 splice를 써야함 !!
  - 해결3 : splice는 직접 수정되므로 return 지워주자!!!
  
  - 문제2 : alert 말고 confirm창은 어떻게 쓸까?
  - 해결 : window.confirm('메세지') && 참일때 실행할 내용
  
# localStorage


** 브라우저를 새로고침하거나 재 접속하면, HTML,JS파일을 처음부터 다시 읽기 때문에 state도 초기값으로 돌아감
-> state를 서버로 보내서 DB에 영구 저장하면 초기값으로 안돌아가고 남아있음
-> 서버 말고 다른 방법은 localStorage사용하면 반영구적으로 사용가능(브라우저 청소하면 삭제됨)
-> session storage는 브라우저 끄면 날아감

1. 로컬스토리지 사용법
- 브라우저에서 개발자도구>어플리케이션>Storage>localStorage
- key : value 형태로 저장가능 
- 문자만, 5MB까지 저장가능 =>array나 object는 저장 못함 but JSON으로 바꾸면 가능! JSON.stringfy(object자료)
- 유저몰래 localStorage에 저장하는법 ! 
  -> 데이터 저장은 localStorage.setItem('이름','값')
  -> 데이터 출력은 localStorage.getItem('이름')
  -> 데이더 삭제는 localStorage.removeItem('age')
  -> 데이터 수정하는 문법은 없어서 데이터 꺼내와서 수정하고 다시 집어넣으면 됨
  -> array나 object는 저장 못함 but JSON으로 바꾸면 가능! JSON.stringfy(object자료)
     이때 가져올때도 다시 object형으로 변환해줘야함
     
     localStorage.setItem('data', JSON.stringify(obj));
  console.log(JSON.stringify(obj)); //{"name":"kim"} JSON
  let 꺼낸거 = localStorage.getItem('data');
  console.log(JSON.parse(꺼낸거).name); //{name: 'kim'} Object
  
  # 코드짜는 법을 모른다면
  1. 컴퓨터한데 아주 상세히 설명해줘야함 
  2. 방법 : 코드부터X 한글먼저 쓰고 코드로 옮기기
  예) 누가 Detail 페이지 접속하면 2. 상품번호 가져와서 3. localStorage에 watched 항목에 추가
  => JS로 번역
  1) Detail componenet로 이동, useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id)
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify([꺼낸거])
  })

3. 사이트 재 접속시에도 데이터 유지되게 만들려면 localStorage 사용
=> 모든 state를 localStorage에 자동 저장 ? redux-persist 같은 라이브러리 사용

4. Redux : state 관리 library 
- 다른 라이브러리 : Jotai, Zustand 리덕스와 비슷하고 더 쉬움

# 실시간 데이터가 중요하며 => React-query 
- ajax 성공시/실패시 html 보여주려면? => 다른UI 보여주고 싶을때
- 몇초마다 자동으로 ajax 요청? 
- 실패시 몇초 후 요청 재시도?
- prefetch? 
=> 실시간 SNS, 코인 같이 실시간 데이터를 계쏙 가져와야 하는 사이트에 쓰면 좋음

1. 사용법
- 터미널에 npm install @tanstack/react-query
- index.js로 가서  <QueryClientProvider client={queryClient}> </QueryClientProvider>로 감싸줌
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
const queryClient = new QueryClient;

2. useQuery로 감싸면 장점
1) ajxa요청이 성공했는지 실패했는지 로딩중인지 쉽게 파악 가능
- result.data
- result.isLoading // 요청중이면 true가 반환됨
- result.error // 실패했다면 true
2) state 만들 필요 없음
3) 틈만나면 자동으로 재요청(refetch_해줌)
- 시간 간격 조정할 수 있음 => { staleTime: 2000 }
4) 실패시 retry 알아서 해줌
5) state 공유 안해도 됨. ajax 요청해서 가져올 수 있음 but 똑같은 요청 2번이나? => react-query는 똑똑해서 한번만 해줌
- ajax 성공결과를 기억함(캐싱) => 똑같이 실행하면 그 결과를 우선적으로 가져와서 보여주고, ajax 수행
- redux=toolkit 설치하면 RTK Queryeh 자동으로 설치되나, 복잡함

# 성능개선, 디버깅, 버그찾기 팁

- 버그 발생 예)
- props 보냈는데 왜 출력 안되는것? 왜 이미지 안나옴?
=> 코드를 확인하거나 개발자도구를 킴
- 요소 tap에서 html/css 검사 가능
- 우리가 만든건 컴포넌트인데 검사 도구에서는 html로 보임

1.  컴포넌트 구조를 보고싶다 => 크롬 확장프로그램 설치(React Developer Tools)
=> props, state 같은거 확인하기 좋음
=> 성능저하되는 컴포넌트 범인찾기
=> 대부분의 지연 시간은 서버에서 데이터 늦게와서 그럼(서버가 느린거임) ajax 요청 같은거

2. Redux DevTools 크롬 확장프로그램 설치
- store 한 눈에 보여줌
- state 변경한 내역 알려줌

3. React로 만든 페이지 => Single Page Application
- 발행(build)하면 하나의 js파일에 모든 코드 다 쑤셔넣음 : 사이즈가 매우 큼
=> 유저가 메인 페이지 접속하면 html 파일 > css파일 >  큰 js파일 다운 받음 => 로딩 속도가 느림
=> 쪼갤 수 있음 :  lazy()사용 => 필요해질때 import 해주세요~ => 메인페이지 로딩 속도 개선
가. 방법 : import {lazy} from 'react';

const Detail = lazy(() => import('./pages/Detail.js'));
const Cart = lazy(() => import('./pages/Cart.js'));

=> 사이트 발행할 때도 별도의 js파일로 분리됨

나. 단점 : Cart, Detail 페이지로 유저가 이동하면 컴포넌트 로딩시간 발생
=> Suspense 를 import 후 컴포넌트를(Routes를 감싸도 됨) Suspense로 감싸고 fallback속성 안에 로드 할 동안 보여줄 html작성

4. 자식 컴포넌트의 재랜더링 막고 싶을때
=> 렌더링 시간이 오래 걸리는 컴포넌트가 자식이면 성능이 저하됨
=> 꼭 필요할때만 재렌더링해라 : memo()사용  (import { memo} from 'react';)
// memo의 원리 : props가 변할때만 재ㅐ렌더링해줌 => 매번 props가 변경되었는지 비교할것임 => props가 길고 복잡하면 손해일수도있음.
=> 꼭 필요한 무거운 컴포넌트에만 사용 : 대부분 쓸일X

5. useMemo 사용법
  let result = useMemo(()=>{return 함수()}, [state]) // useMemo() import
  함수가 엄청 오래걸리는 경우 useMemo사용하면 컴포넌트 렌더링시 1회만 실행해줌
  
 6. Memo는 html return문 보여주고 실행, useMemo는 렌더링되면 같이 실행됨
 
 7. batch 기능
 - state1변경()
 - state2변경()
 - state3변경()
 => 이런식으로 연달아 뭉쳐있으면 재 렌더링이 맨 마지막에 한번만 딱 일어남 : batch
 => 예외) ajax, setTimeout 늦게 동작하는거 내부라면 batching이 일어나지 않았는데, react 업데이트 되면서 batching됨
 
 2. useTransition으로 느린 컴포넌트 성능 향상 가능 : 카드 빚 돌려막기
 조작 후 0.2 초 넘게 걸리면 유저는 느리다고 생각함
 해결법 
 1. html이 많으면 나누기
 2. useTransition()사용 //import 해와서
 - 지연되는 원인이 되는 state를 useTranstion()으로 감싸주기
 => 동작원리 : 1) 브라우저는 한번의 하나의 작업만 가능(single thread)
 브라우저가 할일 1. a를 <input>에 보여주기 2. div 박스 10000개 만들기 => 오래걸림
 let [isPending, 늦게처리(startTransition] = useTranstion();
 startTransition(()=>{함수()}) a를 input에 보여주기 => 시간 생기면 div 만들어주기
 isPending은 처리 중일때 true임
 
 3. useTransition()과 같은 기능
 => useDeferredValue() // 뭔가 감싸거나 하진 않고 props나 state 담을 수 있음
 let state = useDeferredValue(name) : name이라는 state 변경될때마다 좀 늦게 처리해줌
 
 # PWA
 - 바로가기 버튼인데 앱처럼 보임
 - 장점 : 설치 마케팅 비용 적음 
 - 아날로그 유저들 배려
 - html css js만으로 앱까지
 - 푸시알림, 센서 등 사용 가능 
 
 1. 만드는법
 - PWA가 셋팅된 리액트 프로젝트 생성하기
 => vs code 터미널에서 npx create-react-app my-app --template cra-temlate-pwa입력하여 작업 폴더 생성
 
 - 기존프로젝트를 PWA로 만들려면? 
 => 그냥 새 PWA 프로젝트 만들고 기존코드 복붙
 - 물론 필요한 라이브러리도 설치
 
 < PWA의 조건>
 1) manifest.json 있어야
 2) service-worker.js 있어야 // 오프라인에서도 사이트 열 수 있게 도와줌 (인터넷 안터져도 가능) 앱 구동에 필요한 모든 파일이 하드에 저장되기 때문
 => 나는 html css js파일을 미리 하드에 저장해둘 것임, 사이트 접속할떄 html css js다운받지 말고 하드에 있는거 쓰셈~ : 캐싱 이라는 파일
 aaset-manifest.json : 캐싱할 파일 목록
 
 - 캐싱 하기 싫은 파일 있는 경우 
 - nodemodule > react-script- config- webpack.config.js = InjectManifest 찾아서 exclude 부분에 파일 입력
 
 => PWA로 만들어서 새로 만들필요 X 이미 만들어져 있음
 index.js 가서 serviceWorkerRegistration.register();로 바꾸고 빌드
 npm run build
 


