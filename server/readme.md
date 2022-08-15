#날려서 처음부터 다시함..

# 서버란 ? 
- 요청을 받으면/ 요청한 내용을 보내주는 프로그램

``` 네이버웹툰 서버 개발자
어떤 사람이 comic.naver.com 으로 접속하면
네이버웹툰 메인 html 파일을 전송해주셈
```

** 요청 ? HPPT 4가지 요청 방식 
- 읽기(GET)  : 나 이런 페이지 읽고 싶어! // 읽기 요청
- 쓰기(POST) : 새로운 글 생성해주세요~
- 수정(PUT) 
- 삭제(DELETE) 


```서버 개발
어떤 사람이 /list 라는 페이지를 GET 요청하면..
거기 해당하는 list.html파일을 보내줌
```

=> 서버 개발 시 사용하는 프로그래밍 언어 : Node.js(자바스크립트 런타임)를 이용해 JS 문법으로 서버 짤 것임

# Node.js
- JS : html 조작과 변경을 위해 만들어진 언어 (웹페이지를 다이나믹하게 바꿔주기 가능)
- html : 웹페이지를 만들기 위한 언어 : 특) 안움직임, 웹페이지에 글쓰고 그림 넣는 언어
- JS 해석은 누가 ? 브라우저가(크롬 등)! 
- 브라우저 마다 JS 해석 엔진이 있음 (ex. 크롬 - V8)
- V8에 살을 붙여서 출시 : Node.js(JS해석 엔진+a)
=> 브라우저 말고도 다른환경(로컬 등) 에서도 JS 실행할 수 있게 도와줌, 실행창, 실행환경
- Node.js로 서버 만드는 이유
1) 쉬움
- 코드 두줄, 세줄로 완성 가능해 만들기도 빠름
- 프로토 타입 만들기 좋음

2) Non-blocking I/O
- ex. 영화 예매해주는 웹서버 (일반언어로 만든서버 vs Node.js서버)
- 일반언어로 만든 서버 : 순차적이라 무거운 요청이 오면 서버가 멈출 수 도 있음
- Node.js로 만든 서버 : 일단 다 접수 받고 빨리 끝나는거 먼저 보내줌
* SNS, 채팅서비스 등 요청이 매우 많은 경우 유리 함
- 물론, 일반 언어로도 창구를 많이 만든다던지(서버 스케일링, 멀티쓰레드) 하면 해결 할 수 있긴 함

3) 웹서비스가 아닌 경우는 좀..
- ex.이미지 처리 서버 : 라이브러리들이 좋은게 별로 없어서 C계열이나 python 등을 쓰는 것이 더 좋음..


# Express
- Node.js가 지원하는 라이브러리(코드 쉽게 짜기 위해 빌려쓰는 코드 모음집)
- 설치 : npm init =>  (npm : 라이브러리 설치를 도와주는 도구)
- 어떤 라이브러리 설치했는지 기록 : package.json => 만들기 위해 npm init
- 엔트리 포인트만 내가 원하는 파일 명으로(ex. server.js)
- npm install express

- node_modules : 라이브러리에 필요한 파일들을 담는 공간
- npm 대체 : yarn

# Get요청
- .listen : 원하는 포트에 서버를 열어주세요
.listen(원하는 포트, function(){
    서버 오픈시 실행할 코드
})
- 메세지 보내주기
.get('/url', function(요청, 응답){
    응답. send('펫용품 쇼핑할 수 있는 페이지입니다.')
  }) 누가 /url로 들어오면 fucntion을 보내주세요
  
 ** 서버 끄고, 파일저장하고, 서버키고 귀찮아..
 => npm install -g nodemon 으로 nodemon 설치 //g는 글로벌
 
- HTML파일 보내주기
app.get('/', function (요청, 응답) {
  응답.sendFile(__dirname + '/index.html');
});
 
# 부트스트랩
- Bootstrap v5는 IE 지원 X
- Bootstrap v4는 IE11+
- Bootstrap v3는 IE9+

# 콜백함수
- .get()함수 안에 function() = 콜백함수
- 순차적으로 실행하고 싶을때 콜백함수 사용
- /beauty로 접속을 하면=> function() 해주세요~
- 콜백함수 안에 2가지 파라미터 가능
- .get('경로',(요청내용, 응답할방법)=>{}) 이렇게 써도 됨

# <form> 태그 기능 개발
- 꼭 있어야 하는 2개 속성 : action(/"add" : POST 요청할 경로), method("POST" : GET이냐 POST냐 => 관습적으로 POST씀)
- .post('/add', function(요청, 응답){
    응답.send('전송완료')
    })
    * submit 한 정보는 어디로 ?? => 요청에 들어감 !! 근데 쉽게 꺼내쓰려면 라이브러리 필요 : npm install body-parser
    
- POST 요청으로 서버에 데이터 전송하고 싶으면
    1. body-parser 필요
    2. input들에 name ="이름작명" 쓰기 (서버에서 input을 구분하기 위함)
    3. 요청.body.nmae이름으로 data 사용 가능!
 
  - 데이터를 DB에 저장하고 싶으면? 
    
   # REST API
   - API를 ? (웹개발시) 웹서버와 고객간의 요청방식(소통방법), 통신규약, 문서, 어떻게해야 서버와 통신할 수 있을까 ? 
   - REST 하게 만들어라? 6개 원칙
    1) Uniform interface ***** 중요해 >.< 
    - 하나의 자료는 하나의 URL로
    - URL 하나를 알면 둘을 알 수 있어야함 (예측 가능해야 함) ex. www.example.com/products/66432 => 66432번째 상품 보여줄거같음
    - 요청과 응답은 정보가 충분히 들어있어야 함
    
    ```이름짓기 원칙
    - URL을 명사로 작성
    - 하위문서를 나타낼땐 / ex. facebook.com/netgeo/photos 하위폴더 만들듯이 나눠주면 좋음
    - 파일확장자(.html)쓰지말기
    - 띄어쓰기는 대시-이용
    - 자료 하나당 하나의 URL
    ```
    
    2) Client-Server 역할구분
    - 브라우저는 요청만 할 뿐
    - 서버는 응답만 할 뿐
    3) Stateless
    - 요청1과 요청2는 의존성이 없어야함(독립적) 1=>2도 안됨
    4) Cacheable (실은 브라우저가 잘해줌)
    - 서버에서 보내주는 정보들은 캐싱이 가능해야 함
    - 캐싱을 위한 버전 같은 것도 관리 잘해야함
    5) Layered System
    6) Code on Demand
    
   # 웹사이트 기능만들기
    1. 서버로 데이터 전송할 수 있는 UI만들고
    2. 서버에서 원하는대로 정보를 처리해주면 됨

   # DB 
   1. DB종류
     1) 관계형 : 가로, 세로 칸이 나눠져있음 => 3차원 X
    ex. MySQL, MariaDB, Oracle, MS SQL Server
    - 대부분 SQL 이라는 언어 써야함
     2) NoSQL : Object 자료형으로 입출력 가능
    ex. MongoDB
    
  2. MongoDB 무료 호스팅 (512MB)
    - database(폴더) > collection(파일)
    
  3. 서버에서 가져온 할일 리스트 HTML 파일 만들기
    => EJS 라이브러리 설치 : npm install ejs
    => EJS 쓰면 html안에다가 서버데이터를 넣을 수 있음 : 대체품 React!!
    => views 폴더 생성 후 ejs파일 폴더에 넣기
    server.js에 app.set('view engine', 'ejs'); 해줘야 node.js가 ejs파일 렌더링 가능
    
    
  4. var, let, const
  - var : 재선언O, 재할당O, 생존범위는 function
  - let : 재선언X, 재할당O, 생존범위는 {}
  - const : 재선언X, 재할당X, 생존범위는 {}
 
 5. DB 수정
 - db.collection('counter').updateOne({어떤데이터를 수정할지},{??: {수정값}},function(){}) // function은 없어도 됨.
 // 여러개 한번에 수정 => updateMany
 // 수정값은 opertator ($set(변경), $inc(기존값에 변경) 등등..)
 
 6. HTML은 GET, POST만 가능
 => DELETE요청하는법 
 1) method-override 라이브러리 이용 (Node에서 쓸 수 있는)
 2) JavaScript AJAX를 이용
 
 *** 서버는 꼭 뭔가 응답해줘야함
 - 2XX : 성공
 - 4XX : 실패
 실패 staus 코드를 보내자
 - 5XX : 서버문제로 실패
 
 # AJAX란?
 - 새로고침 없이 서버에 요청하는걸 도와주는 JS문법

- ( : ) : url Parameter //detail/어쩌구로 get요청을 하면~
app.get('/detail/:id', function (요청, 응답) {
  db.collection('post').findOne({ _id: 요청.params.id }, function (에러, 결과) {
    console.log(결과);
    응답.render('detail.ejs', { 이런이름으로: 이런데이터를 }); //ejs파일로 데이터를 보내는 방법
  });
});

# ejs문법
- <%= %> : 변수
- <%- %> : 자바스크립트 문법
