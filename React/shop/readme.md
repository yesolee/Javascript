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
  
