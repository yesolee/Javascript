import { Container, Row } from 'react-bootstrap';
import Item from '../component/Item.js';
import bgimg from '../img/cockimg.jpg';
import { useState } from 'react';

export default function Main(props) {
  let [cock, setCock] = useState([...props.cocktail]);
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
          {cock.map((item) => {
            return <Item cocktail={item} />;
          })}
        </Row>
      </Container>
    </>
  );
}
