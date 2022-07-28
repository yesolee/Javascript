import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Item(props) {
  let navigate = useNavigate();
  return (
    <Col
      onClick={() => {
        navigate('/detail/' + props.cocktail.id);
        let getWatched = JSON.parse(localStorage.getItem('watched'));
        getWatched.unshift(props.cocktail.id);
        localStorage.setItem('watched', JSON.stringify(getWatched));
      }}
    >
      <div width='1504px'>
        <img src={props.cocktail.link} width='100%' height='320vw'></img>
      </div>

      <h4>{props.cocktail.title}</h4>
      <p>{props.cocktail.price}</p>
    </Col>
  );
}
