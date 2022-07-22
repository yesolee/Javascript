import { Container, Row } from 'react-bootstrap';
import Item from '../component/Item.js';
import bgimg from '../img/cockimg.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Main(props) {
  let [cock, setCock] = useState([...props.cocktail]);
  let [count, setCount] = useState(1);
  let [load, setLoad] = useState(false);
  let [more, setMore] = useState(false);

  useEffect(() => {
    count > 1 &&
      axios
        .get(`https://yesolee.github.io/shop/data${count}.json`)
        .then((결과) => {
          let copy2 = [...cock, ...결과.data];
          props.setCocktail(copy2);
          setCock(copy2);
          setLoad(false);
        })
        .catch(() => {
          setLoad(false);
        });
  }, [count]);
  return (
    <>
      <div
        className='main-bg'
        style={{ backgroundImage: 'url(' + bgimg + ')' }}
      ></div>
      <button
        style={{ position: 'absolute', right: '2px' }}
        onClick={() => {
          let copy = [...cock];
          copy.sort(function (a, b) {
            var nameA = a.title.toUpperCase(); // ignore upper and lowercase
            var nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // 이름이 같을 경우
            return 0;
          });
          setCock(copy);
        }}
      >
        글자순정렬
      </button>
      <Container>
        <Row>
          {cock.map((item, i) => {
            return <Item cocktail={item} key={i} />;
          })}
        </Row>
        {more == false &&
          (cock.length < 9 ? (
            <button
              onClick={() => {
                setLoad(true);
                let copyCount = count;
                copyCount++;
                setCount(copyCount);
                copyCount == 3 && setMore(true);
              }}
            >
              더보기
            </button>
          ) : null)}
        {load == true ? <p style={{ fontSize: '30px' }}>로딩중...</p> : null}
        {/* {axios.post('https://yesolee.github.io/shop/data3.json', { id: '9' })} */}
      </Container>
    </>
  );
}
