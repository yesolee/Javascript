import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { createContext, lazy, useEffect, useState, Suspense } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Main from './pages/Main';
// import Detail from './pages/Detail';
// import Cart from './pages/Cart';
import Empty from './pages/Empty';
import Recent from './component/Recent';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export let Context1 = createContext();

const Detail = lazy(() => import('./pages/Detail.js'));
const Cart = lazy(() => import('./pages/Cart.js'));

function App() {
  let [cocktail, setCocktail] = useState(data);
  let navigate = useNavigate();
  let [재고] = useState([10, 11, 12]); // Detail, Tabcontent에서 쓰고 싶은 경우

  useEffect(() => {
    let getwatched = JSON.parse(localStorage.getItem('watched'));
    getwatched !== null
      ? localStorage.setItem('watched', JSON.stringify(getwatched))
      : localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  let result = useQuery(
    ['작명'],
    () =>
      axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
        return a.data;
      }),
    { staleTime: 2000 }
  );

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark' className='navBar'>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/my-app');
            }}
          >
            Solar's bar
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/my-app');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className='ms-auto' style={{ color: 'white' }}>
            {result.isLoading && '로딩중'}
            {result.error && '에러남'}
            {result.data && `접속자 : ${result.data.name}`}
          </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={<div>로딩중임</div>}>
        <Routes>
          <Route
            path='/my-app'
            element={<Main cocktail={cocktail} setCocktail={setCocktail} />}
          />
          <Route
            path='/detail/:id'
            element={
              <Context1.Provider value={{ 재고, cocktail }}>
                <Detail cocktail={cocktail} />
              </Context1.Provider>
            }
          />
          } />
          <Route path='/event' element={<EventPage />}>
            <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Empty />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
