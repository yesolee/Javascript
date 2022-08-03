import { Container, Row } from 'react-bootstrap';
import Item from '../component/Item.js';
import bgimg from '../img/cockimg.jpg';
import { useState } from 'react';
import axios from 'axios';
import Recent from '../component/Recent.js';
import './../App.css';

export default function Main(props) {
  let [cock, setCock] = useState([...props.cocktail]);
  let [load, setLoad] = useState(false);
  let [more, setMore] = useState(false);

  return (
    <>
      <div
        className='main-bg'
        style={{ backgroundImage: 'url(' + bgimg + ')' }}
      ></div>
      <section className='mainList'>
        <Container className='itemList'>
          <Row>
            {cock.map((item, i) => {
              return (
                <>
                  <Item cocktail={item} key={item.id} />
                </>
              );
            })}
          </Row>
          {more == false &&
            (cock.length < 9 ? (
              <button
                onClick={() => {
                  let length = cock.length / 3;
                  setLoad(true);
                  axios
                    .get(
                      `https://yesolee.github.io/my-app/data${length + 1}.json`
                    )
                    .then((결과) => {
                      let copy = [...cock, ...결과.data];
                      props.setCocktail(copy);
                      setCock(copy);
                      setLoad(false);
                    })
                    .catch(() => {
                      setLoad(false);
                    });
                }}
              >
                더보기
              </button>
            ) : (
              setMore(true)
            ))}
          {load == true ? <p style={{ fontSize: '30px' }}>로딩중...</p> : null}
          <button
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

          {/* {axios.post('https://yesolee.github.io/shop/data3.json', { id: '9' })} */}
        </Container>
        <Recent className='recentList' cocktail={cock} />
      </section>
    </>
  );
}
