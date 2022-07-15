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
