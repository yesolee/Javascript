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
  오래걸리는 for문 등등 을 이 안에 넣어주면 html이 먼저 뜸!
})
