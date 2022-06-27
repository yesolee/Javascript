import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  return (
    <div className='App'>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}
////boolin type이나 객체는{변수}문법 X
export default App;
