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
              let copy = [...글제목];
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
    </div>
  );
}

export default App;
