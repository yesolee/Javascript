// const Hello = () => {
//   <p>Hello</p>;
// };

// export default Hello;
import World from './World';
import styles from './Hello.module.css';

export default function Hello() {
  function showName() {
    document.getElementById('title').innerHTML = 'Mike';
  }

  function showAge(txt) {
    console.log(txt);
  }

  function showText(txt) {
    console.log(txt);
  }

  return (
    <div>
      <h1 id='title'>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button
        onClick={(e) => {
          const txt = e.target.value;
          showText(txt);
        }}
      >
        Show age
      </button>
      <input
        type='text'
        onChange={(e) => {
          const txt = e.target.value;
          showText(txt);
        }}
      ></input>
    </div>
  );
}
