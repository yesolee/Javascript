import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Empty from './pages/Empty';

export let Context1 = createContext();

function App() {
  let [cocktail, setCocktail] = useState(data);
  let navigate = useNavigate();
  let [재고] = useState([10, 11, 12]); // Detail, Tabcontent에서 쓰고 싶은 경우

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark' className='navBar'>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/');
            }}
          >
            Solar's bar
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/categories');
              }}
            >
              Categories
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path='/'
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
