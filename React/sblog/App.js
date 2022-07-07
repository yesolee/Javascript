import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      <button
        onClick={() => {
          let 정렬용제목 = [...글제목];
          정렬용제목.sort();
          글제목변경(정렬용제목);
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
          </span>{' '}
          {따봉}
        </h4>
        <p>
          2월 17일 발행
          <span
            onClick={() => {
              let 임시글제목 = [...글제목];
              임시글제목[0] = '여자 코트 추천';
              글제목변경(임시글제목);
            }}
          >
            {' '}
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
