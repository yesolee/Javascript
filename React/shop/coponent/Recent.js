// import { useNavigate } from 'react-router-dom';

export default function Recent(props) {
  // let navigate = useNavigate();
  let getWatched = [...new Set(JSON.parse(localStorage.getItem('watched')))];
  return (
    <div>
      <ul>
        {' '}
        최근 본 상품
        {getWatched.map((item, i) => {
          // let index = props.cocktail.findIndex((cock) => cock.id == item);
          // index >= 0 ? console.log(index) : console.log('이상한데');
          return (
            <li key={i}>
              {/* <img
                src={props.cocktail[index].link}
                width='150px'
                height='240vw'
              ></img> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
