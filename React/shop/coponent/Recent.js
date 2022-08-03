import { useNavigate } from 'react-router-dom';
export default function Recent(props) {
  let navigate = useNavigate();
  let getWset = [...new Set(JSON.parse(localStorage.getItem('watched')))];

  return (
    <div>
      <ul>
        {' '}
        최근 본 상품
        {getWset.map((item, i) => {
          let index = props.cocktail.findIndex((cock) => cock.id == item);
          if (index >= 0) {
            return (
              <li
                key={i}
                onClick={() => {
                  navigate('/detail/' + props.cocktail[index].id);
                }}
              >
                <img
                  src={props.cocktail[index].link}
                  width='150px'
                  height='120vw'
                ></img>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
