import { useParams } from 'react-router-dom';
import Empty from './Empty';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    let a = setTimeout(() => {
      setAlertBox(!alertBox);
    }, 2000);
    console.log(2);

    return () => {
      console.log(1);
      clearTimeout(a);
      // mount 시 실행 (2번실행됨, 디버깅을 위해서 , 배포 이후 발행하고나서는 1번 동작 )
      // update 시 실행 : 재렌더링 ->state변경
    };
  }, [count]);

  return id < props.cocktail.length ? (
    <div className='container'>
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
          <img src={props.cocktail[id].link} width='60%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{props.cocktail[id].title}</h4>
          <p>{props.cocktail[id].content}</p>
          <p>{props.cocktail[id].price}원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  ) : (
    <Empty />
  );
}
