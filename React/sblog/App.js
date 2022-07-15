import './App.css';
import React, { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [따봉, 따봉변경] = useState([...글제목].map((제목) => 0));
  let [modal, setModal] = useState(false); //형식은자유
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [날짜, 날짜변경] = useState(
    [...글제목].map((날짜) => '2022년 7월 12일 발행')
  );

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
      {/* <div className='list'>
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
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
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {글제목.map((제목, i) => {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>{' '}
              {따봉[i]}
            </h4>
            <p>
              {날짜[i]}
              <button
                onClick={() => {
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                }}
              >
                삭제
              </button>
            </p>
          </div>
        );
      })}
      {modal == true ? (
        <Modal
          color={'skyblue'}
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
        />
      ) : null}
      <div className='inputBox'>
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let 제목copy = [...글제목];
            let 따봉copy = [...따봉];
            let 날짜copy = [...날짜];
            const now = new Date();
            입력값 != ''
              ? 제목copy.unshift(입력값)
              : alert('값을 입력해주세요');
            입력값 != '' && 따봉copy.unshift(0);
            입력값 != '' &&
              날짜copy.unshift(
                `${now.getFullYear()}년 ${
                  now.getMonth() + 1
                }월 ${now.getDate()}일 발행`
              );
            글제목변경(제목copy);
            따봉변경(따봉copy);
            날짜변경(날짜copy);
          }}
        >
          추가
        </button>
      </div>
      <Profile />
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let 제목변경 = [...props.글제목];
          제목변경[0] = '여자코트 추천';
          props.글제목변경(제목변경);
        }}
      >
        글수정
      </button>
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Kim', age: 30 }; //state만드는법
  }
  chageName = () => {
    this.setState({ name: 'Park' });
  };

  render() {
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={this.chageName}>버튼</button>
      </div>
    );
  }
}

export default App;
