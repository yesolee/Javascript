///* eslint-disable */ //Lint끄는 기능

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬독학',
  ]);

  let [따봉, 따봉변경] = useState(0);
  let [logo, setLogo] = useState('ReactBlog');

  // 데이터 바인딩 : 리액트=> {post}
  //바닐라JS : document.querySelector('h4').innerHTML = post;
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4 style={{ fontSize: '16px' }}>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy2 = [...글제목];
          글제목변경(copy2.sort());
        }}
      >
        가나다순정렬
      </button>
      <div className='list'>
        <h4>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>
          2월 17일 발행
          <span
            onClick={() => {
              let copy = [...글제목]; // 그냥 글제목이라고 하면 참조값이 할당되는거라서 변경X
              copy[0] = '여자 코트 추천';
              글제목변경(copy);
            }}
          >
            🔄
          </span>
        </p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
      <Weather></Weather>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function Weather() {
  return (
    <div className='weather'>
      <h3>지역</h3>
      <p>기온</p>
      <p>강수확율</p>
    </div>
  );
}
export default App;
