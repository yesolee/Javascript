import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changeAge } from './../store/userSlice.js';
import { increase, decrease, sort, deleteCart } from './../store/cartSlice.js';
import {
  memo,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';

let Child = memo(function () {
  console.log('재랜더링');
  return <div>자식임</div>;
});

let a = new Array(10000).fill(0);

// function 함수() {
//   return 반복문 10억번 돌린 결과
// }

export default function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);
  let [name, setName] = useState('');
  let [isPending, startTransition] = useTransition();
  let state1 = useDeferredValue(name);
  // let result = useMemo(()=>{return 함수()},[state])
  // let [num, setNum] = useState(0);
  // let [age, setAge] = useState(20);

  // useEffect(() => {
  //   if ((num > 0) & (num < 3)) {
  //     setAge(age + 1);
  //   }
  // }, [num]);

  return (
    <div>
      {/* <div>안녕하십니까 전 {age} </div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        누르면 한 살 먹기
      </button> */}
      {/* <Child count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      /> */}
      {/* {isPending
        ? '로딩중'
        : a.map(() => {
            return <div>{state1}</div>;
          })}

      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(changeAge(100));
        }}
      >
        버튼
      </button> */}
      <button
        onClick={() => {
          dispatch(sort());
        }}
        style={{ position: 'absolute', top: '105px', right: '16px' }}
      >
        글자순정렬
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>상품명</th>
            <th>수량</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>
                <button
                  style={{ marginRight: '10px' }}
                  onClick={() => {
                    dispatch(increase(data.id));
                  }}
                >
                  +
                </button>
                {data.count}
                <button
                  style={{ marginLeft: '10px' }}
                  onClick={() => {
                    dispatch(decrease(data.id));
                  }}
                >
                  -
                </button>
              </td>
              <td>
                <p
                  style={{ marginBottom: '0px' }}
                  onClick={() => {
                    window.confirm('삭제하시겠습니까?') &&
                      dispatch(deleteCart(data.id));
                  }}
                >
                  ❌
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
