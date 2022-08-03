import { useParams, useNavigate } from 'react-router-dom';
import Empty from './Empty';
import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Context1 } from './../App.js';
import { addCart } from './../store/cartSlice.js';
import { useSelector, useDispatch } from 'react-redux';

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == 'blue' ? 'white' : 'black')};
  padding: 10px;
`;

styled.button(YellowBtn);
let Box = styled.div`
  background: grey;
  padding: 20px;
`;

export default function Detail(props) {
  let [alertBox, setAlertBox] = useState(false);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let [alertMemo, setAlertMemo] = useState(false);
  let [입력값, 입력값변경] = useState(0);
  let [탭, 탭변경] = useState(0);
  let [fade, setFade] = useState('');
  let navigate = useNavigate();
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  let { 재고, cocktail } = useContext(Context1);

  useEffect(() => {
    (Number(입력값) >= 0) & Number.isInteger(Number(입력값))
      ? setAlertMemo(false)
      : setAlertMemo(true);
  }, [입력값]);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, []);
  //  또다른방법 isNaN()

  // useEffect(() => {
  //   isNaN(입력값) == true && alert('그러지마세요');
  // }, [입력값]);

  useEffect(() => {
    setTimeout(() => {
      setAlertBox(true);
    }, 2000);
  }, []);

  return id < props.cocktail.length ? (
    <div className={`container start ${fade}`}>
      {재고[0]}
      {alertBox == false ? (
        <div className='alert alert-warning'>2초 이내 구매시 할인</div>
      ) : null}
      <Box>
        {count}
        <YellowBtn
          bg='blue'
          onClick={() => {
            setCount(count + 1);
          }}
        >
          버튼
        </YellowBtn>
      </Box>
      <div className='row'>
        <div className='col-md-6' style={{ paddingTop: '20px' }}>
          <img src={props.cocktail[id].link} width='60%' height='320vw' />
        </div>
        <div className='col-md-6'>
          {alertMemo == true ? (
            <div
              style={{
                backgroundColor: 'red',
                height: '20%',
                color: 'white',
                fontSize: '30px',
                padding: '20px',
                boxSizing: 'border-box',
              }}
            >
              경고:숫자만입력하세요
            </div>
          ) : null}
          {/* <input
            onChange={(e) => {
              입력값변경(e.target.value);
            }}
          /> */}
          <h4 className='pt-5'>{props.cocktail[id].title}</h4>
          <p>{props.cocktail[id].content}</p>
          <p>{props.cocktail[id].price}원</p>

          <input
            placeholder='숫자를 입력해주세요'
            onChange={(e) => {
              입력값변경(e.target.value);
            }}
            style={{ marginTop: '20px', textAlign: 'center' }}
          ></input>

          <button
            onClick={() => {
              if ((입력값 > 0) & Number.isInteger(Number(입력값))) {
                dispatch(
                  addCart({
                    id: props.cocktail[id].id,
                    name: props.cocktail[id].title,
                    count: Number(입력값),
                  })
                );
                navigate('/cart');
              } else {
                alert('수량을 입력해주세요');
              }
            }}
            className='btn btn-danger'
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav
        variant='tabs'
        defaultActiveKey='/home' // 기본으로 눌려있을 버튼
        style={{ paddingTop: '20px' }}
      >
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey='link0'
          >
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey='link1'
          >
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey='link2'
          >
            Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} cocktail={props.cocktail} />
    </div>
  ) : (
    <Empty />
  );
}

function TabContent({ 탭, cocktail }) {
  let [fade, setFade] = useState('');
  let { 재고 } = useContext(Context1);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, [탭]);

  return (
    <div className={`start ${fade}`}>
      {[<div>{재고}</div>, <div>리뷰</div>, <div>Q&A</div>][탭]}
    </div>
  );
}
