import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Empty from './pages/Empty';

function App() {
  let [cocktail] = useState(data);
  let navigate = useNavigate();

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
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link href='#features'>Categories</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Main cocktail={cocktail} />} />
        <Route path='/detail/:id' element={<Detail cocktail={cocktail} />} />
        <Route path='/event' element={<EventPage />}>
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
        </Route>
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
