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

# npm install method-override 
1. <HTML> form 태그는 GET/POST만 가능
- PUT, DELETE 위해 method-override 라이브러리 사용
- server.js 파일 상단
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
- edit.js 파일
<form action="/경로?_method=PUT" method="POST">

** 서버에서 응답은 필수!! 

# indexing
1. 컴퓨터 찾기 알고리즘
=> 기본은 처음부터 끝까지 순차적으로 찾는 것
2. Binary Search
=> 1~100 중 숫자 맞추기 : 50이상이니? 75이상이니? 87이하니? ... 절반씩 짤라서 물어보며 찾는 기법
=> 대신 미리 숫자순으로 정렬이 되어있어야함
=> MongoDB : _id 순으로 미리 정렬되어있음
=> 제목을 정렬해두면(indexing 해두면 : 미리 다른 collection에 복사본 정렬하면) DB는 알아서 Binary Search 해줌
=> 문자자료는 index 만들때 한꺼번에 해야 함


* text index 만들어두면
1. 빠른검색 : Binery searcch
2. or 검색가능 : 띄어쓰기 해서 검색
3. - : 제외가능
4. "정확히 일치하는 것만 "
5. 문제점*** 띄어쓰기 기준으로 단어를 저장함
=> 한국/중국/일본어에는 안좋음
** 해결방법 *
- 방법 1: ex. 맨앞 1000개(오늘부터 일주일간 발행된 게시물) 중에서만 찾아봐라
- 방법 2: 띄어쓰기 단위로 indexing 금지, 2글자 이상 검색(ex. nGram)
- 방법 3: search index 만들기
lucene.korean 설정해주면 글쓰기를로 검색해도 글쓰기로 검색하는 등의 조사 걸러줌
    
    # 회원기능이 필요하면
    - passport 세팅하는 부분이 위에 있어야 함
    - 정규식 /abc/ 하면 abc 포함하는거 찾아줌 (띄어쓰기로 구분해서 밥먹기->먹기로 검색하면 X )
    - 저장전에 id가 이미 있는지 먼저 찾아봐야함
    - id에 알파벳 숫자만 잘 들어있는지 확인해야함
    - 비번 저장 전에 암호화 했는지 확인해야 함 * 라이브러리 설치 해 사용
    - DB에 작성자 이름 등등 저장 ? => objectId만 알면 컬렉션 조회 가능해서 필요없음, 하지만 Nosql은 부가정보도 게시물이랑 함꼐 거장해서 collection 뒤질 필요 없게하는게 좋음
      (DB읽고 쓰는데 돈들기두함)
    
# 저장 못해서 날아감.. 내일 다시 해야지
- router 쪼개기
```routes 폴더 만들고 shop.js파일 생성
var router = require('express').Router();

// 미들웨어 만들기
function 로그인했니(요청, 응답, next) {
  if (요청.user) {
    // 로그인 후 세션이 있으면 요청.user가 항상 있음
    next();
  } else {
    응답.send('로그인안하셨는데요?');
  }
}
// 여기있는 모든 라우터(URL)에 미들웨어 적용
//router.use(로그인했니);
// '/shirts' 세부 라우트로 접속할떄만 미들웨어 적용
router.use('/shirts', 로그인했니);

router.get('/shirts', function (요청, 응답) {
  응답.send('셔츠 파는 페이지입니다.');
});

router.get('/pants', function (요청, 응답) {
  응답.send('바지 파는 페이지입니다.');
});

module.exports = router;
```

```server.js 파일에 해당 내용 추가

// 전역 미들웨어 (모든 요청과 응답 사이에 쓰겠다)
app.use('/shop', require('./routes/shop.js'));
app.use('/board/sub', require('./routes/board.js'));
// '/'로 접속한 사람은 이 미들웨어(방금만든 라우터)를 적용해주세요

```

# 서버에 업로드
- github는 정적 html 만 호스팅 할 수 있음. 서버는 안됨
- 구글 클라우드 가입

# 이미지 업로드
- <input type="file" action="/upload" enctype="multipart/form-data" /> 
// enctype을 저거로 설정 안하면 인코딩 되서 파일 용량 1.3 배 커짐
- 업로드한 이미지 저장하는 법 : 보통 작업폴더안에 저장시킴
- DB에 저장하면 비쌈, 일반 하드에 저장하는게 싸고 편함
- 아마존 같은 클라우드 서비스에서 하드 구매 후 아마존 제공 예제 코드를 활용해 서버에서 이미지를 아마존하드에 저장 시키면
아마존은 이미지 URL을 줌, 이 URL을 DB에 유저의 id와 함꼐 저장한 뒤, URL을 불러오는 방식으로 개발하면 됨!

# Mongoose 필수?
= MongoDB에 데이터 넣고 뺼때 라이브러리 : MongoDB Native Driver (지금까지 쓴거, js느낌) vs Mongoose(jqueary 느낌)
- 약간 편해지고 한글입력하면 제한하거나 이런걸 Data Validation이라고 하는게 이게 쉬워짐
스키마를 만들어서 데이터를 끼울 수 있음.
- 예전엔 Native Driver가 안좋았는데 지금은 좋아져서 Mongoose 설치 안해도 괜찮음 : validation 탭에서 설정 가능 

# 보안 ? 
- Validation 엄격히 하는거
내가 악성 유저가 되어서 내 사이트를 테스트해보자!
ex. 회원가입시 너무 긴아이디, 영어 넣어야 할 곳에 한글?, 빈칸보내면? 미로그인상태에서 이것저것 조작? -> if문 사용 등..
- 많이 알려진 서버에 대한 공격들
ex. <script>를 서버로 보내는 XSS 공격 -<>를 서버로 못보내게 하거나 변환해서 보내기
-brute force attack 1분동안 1억번 로그인 요청함 => 요청횟수 제한할수있음ex. 1분동안 30회로 제한
express-rate-limit 라이브러리
-db 비번 털기 / 비번은 암호화해서 저장해야함

# 관리자 기능 ?
- 어떤 회원은 모든 글 삭제 가능
- 관리자 필드를 만들고 if(요청.user.role =='관리자')
```
_id: ObjectId(234243252"")
id: "kim"
pw: "1234"
role : "관리자"
```

# 쇼핑몰? 큰 프로젝트 만들때는 크게 생각하면 어렵고 작은 기능부터 만들면 됨
1. 판매할 상품 상품 등록기능
2. 상품 보여주는 페이지
3. 주문기능(게시물발행)
4. 주문관리페이지
5. 카드결제기능 (보통 PG사들의 카드결제모듈을 이용하기 떄문에 PG사와 계약 필요)
- 사업자번호, 2주, 계약금,,, 결제모듈을 줌 
- 아임포트 서비스 쓰면 PG모듈 설치 더 쉬어짐

# 목표와 수단의 차이
- 개발목적 : 만들어보는것도 굿
- 뭘 팔 목적 : 빌려쓰는게 좋을듯.. 

- 라이브러리 설치 : npm install multer (파일 전송, 저장, 파일명 분석 도와주는 라이브러리)

# 채팅창 만들기
1. 게시물간 관계맺기 > 게시물간의 종속관계 표현하고 싶을때 부모정보까지 저장해두면 됨!
=> 게시물 컬렉션이랑/ 대화내용 별도의 컬렉션으로 나누기!
   서버에 내용 전송할때는 서버가 이미 알고있는 내용은 빼고 최소한의 데이터만 보내는것이 보안에 유리할 수 있다.
2. DB실시간 업데이트

1) 채팅방 들어가기 / 채팅방 선택하기
2) 메세지 남기기
댓글도 그냥 게시물 발행임
-document1개는 글자 16M까지 가능


# ajax 요청문 사용 버전
``` 버전1
     $('.delete').click(function(e){
        var 글번호 = e.target.dataset.id; // e.target 지금 클릭한것
        var 지금누른거 = $(this); // this 지금 이벤트 동작하는 곳
        $.ajax({
        method : 'DELETE',
        url : '/delete',
        data : {_id : 글번호}
      }).done(function(결과){ // 요청이 성공하면 function을 실행해주세요~
        // 페이지를 강제로 새로고침 해주세요
        // 삭제 버튼을 누른 <li> 요소를 제거/안보이게 해주세요
          console.log('성공했어염')
          지금누른거.parent('li').fadeOut();
        }).fail(function(xhr, textStatus, errorThrown){
          //요청이 실패시 실행할 코드
          console.log(xhr, textStatus, errorThrown);
        }) 
      })
```

```버전2
    $('.chat').click(function(e){
      var _id = e.target.dataset.id;
      $.post('/chatroom', {당한사람id:_id}).then(()=>{
        console.log('성공')
      })
    });
```
축약해서 사용 가능

# insertOne 버전
```
insertOne({}, 여기 콜백함수 써도 되고 )
insertOne({}).then(여기 콜백함수 써도 됨)
```

```
  db.collection('chatroom')
    .insertOne(저장할거)
    .then((결과) => {
      응답.send('성공');
    });
    
```

# post 요청
- data-id에 array가 담기지 않아 Jquery를 이용해 다른 input 태그의 value값을 원하는 값을 넣고 display :none으로 설정했다.
display로 변경하면 원하는 값이 input안에 담겨 있는게 보이지만, 출력해보면 해당 태그의 val()은 항상 1이 나온다
뭐가 문제일까..

해결 ! data-id를 1개만 지정가능한 줄 알았으나 data-작명 을 통해 한번에 여러 값을 전송할 수 있다.
```
<button class="chat" data-id="<%= posts[i].작성자 %>" data-post-id="<%= posts[i]._id %>" onclick="location.href='/chat/<%= posts[i]._id %>'">채팅하기</button>
      var _id = e.target.dataset.id;
      var post_id =  e.target.dataset.postId; //-는 카멜케이스로 꺼내올 수 있음!! 
 ```
 
 # this 와 e.target
 
 ```
       var 지금누른채팅방id;
      $('.chatlist').click(function(){ // 함수안에서 만든 변수는 함수 바깥에서 사용불가
        지금누른채팅방id = this.dataset.id; // this : 지금 클릭이벤트 동작하는 곳
      })
```
- this를 사용하면 e가 없어도 된다.
* this와 e 차이점 찾아보기 !!!!

# 미들웨어
- 미들웨어가 작동하지 않는다 원인을 찾다 시간이 다 가버렸다..

# 서버와 실시간 소통
1) DDoS 공격 : get요청 1초마다 날리기 > 서버는 요청많으면 힘들어함, 사용자 많으면 엄청 느림
2) 서버와 유저간 실시간 소통채녈 열기 (Server Sent Events) 서버가 일방적으로 데이터 실시간 전송 가능(user가get요청할필요없음)

=> Header를 바꿔줌

- GET, POST는 HTTP요청이라고도 부름
- HTTP 요청시 몰래 전달되는 정보들도 있음 (유저의 언어, 브라우저정보, 가진쿠키, 어디서왔나) : Header라는 공간안에 담겨있음 
- 서버가 응답해줄때도 (서버=>유저) 이런 내용이 저장되어 있음
=> 전달되는 Header를 이렇게 바꾸면 실시간 채널 개설됨
```
app.get('/어쩌구', 로그인했니, function (요청, 응답) {
  응답.writeHead(200, {
    'Connection': 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });
});
```

* 일반 GET, POST 요청은 1회 요청시 1회 응답만 가능
* 위에 처럼 하면 여러번 응답 가능

1) 유저에게 데이터 전송은
```server.js
  응답.write('evnet : 보낼데이터이름\n'); // \n은 개행
  응답.write('data : 보낼데이터\n\n'); 
```

2) 유저가 데이터 수신은
``` .ejs 파일
new EventSource('/경로'); // 실시간 데이터 받기 위한 GET요청
```

* 변수를 여러군데 쓸때, 함수밖에 var 변수명; 선언 후 함수에서 변수사용

```

* 게시글 당 1개의 채티룸 설정 완료

# MongoDB Change Stream 
- 실시간 DB가 업데이트 되면 유저에게 쏴주세요 기능 
- DB변동시 -> 서버에 알려줌 -> 유저에게 보낼 수 있음

``` server.ejs
    const pipeline = [
      {$match : {'fullDocument.parent':요청.params.id}}
    ];
    const collection = db.collection('message');
    const chageStream = collection.watch(pipeline); // .watch()붙이면 실시간 감시해줌
    chageStream.on('change', ()=>{
    });

```

# 내 대화는 노란색으로
- user._id가 채팅작성자 id와 같으면 class를 chat-mine, 다르면 chat-writer로 수정

# SSE말고 WebSocket(실시간 소통 채널) 서버, 유저간 실시간 통신 가능
- SSE : 서버가 유저에게 일방적으로 데이터 쏴줌
- WebSocket 양방향 통신 가능 : 브라우저 호환성을 위해 socket.io라이브러리 써서 더 간편하게 해보자
=> 단톡방만들기
```server.js
const app = express(); 이거 밑에

const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http);

하단에 app.listen 부분을 http.listen으로
* nodejs는 http.listen 근데 express 라이브러리 쓸려면 app.listen 
근데 결국는 똑같은 기능임
```

```유저가 보는 html파일에도 socket.io 세팅해야함
socket.io cdn 검색 후 JS파일을 socket.ejs에 script 태그 복붙
** 주의 npm install socket.io 의 버전과 동일해야함 //package.json확인

<script>
// 유저가 WebSocket에 접속하는법
var socket = io();       
// 서버에게 웹소켓으로 실시간 메세지 보내는 법
$('send').click(function(){
 socket.emit('작명','메세지')
})
<script>

```server.js 
서버가 수신하려면 socket.on(작명, 콜백함수)
 누가 'user-send'이름으로 메세지 보내면 내부코드 실행해주셈
  socket.on('user-send', function(data){
    console.log(data);
  })
  ```
  
  # 서버-> 유저 메세지 전송
 1.
  io.emit() -> server.js
  메신저 수신은 언제나 socket.on() -> socket.ejs
  
  => io.emit : 이 사이트 접속한 모두한테 방송해라 : broadcast한다
  => 단톡방 만들때 쓰면 됨
  
2. 서버- 유저1명간 단독으로 소통하고 싶은 경우
접속시 자동 발급되는 socket.id사용
  socket.on('user-send', function (data) {
    io.to(socket.id).emit('broadcast', data);
  }); //자기한테
  
3. 채팅방 만들고 입장은
  socket.join(방이름);
  
html에서 서버에 요청할때 socket으로 GET/POST 요청 대체 가능
html : socket.emit(작명,메세지)
server : socket.on('joinroom', function(){
    socket.join('room1');
}) // 서버는 joinroom 이름의 메세지 받으면 채팅방 넣어줌

    
# 리액트에서 DB쓰는 법

```server.js
    app.use(express.json());
    var cors = require('cors');
    app.use(cors());
    
    밑에 api작성
    
   app.get('/product', function(요청, 응답){
    응답.json({name : 'black shoes'}) // 응답.json( array혹은 object )
    })

```
    
    
    # 배포 완료!
    https://todoapp-359714.du.r.appspot.com
    
    # 채팅이 안되는 에러 갈생
    google cloud는 스케일링이 자동이라 여러 컴퓨터로 get post 분산처리를 해줘서 인증이 풀린걸수도 ? 
    => 세션을 DB에 저장하거나 https://github.com/googleapis/nodejs-datastore-session 사용
    
    => npm install @google-cloud/connect-datastore
    https://console.cloud.google.com/iam-admin/serviceaccounts/details/100528899053365016647/keys?hl=ko&project=todoapp-359714&supportedpurview=project
    사용자계정을 생성하고 projectID와 key파일경로를 환경변수 파일에 저장했는데 되지 않는다
    
    google-library말고 DB에 저장하는 방법을 다시 찾아봐야겠다.
    
