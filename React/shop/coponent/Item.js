import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Item(props) {
  let navigate = useNavigate();

  return (
    <Col
      onClick={() => {
        navigate('/detail/' + props.cocktail.id);
      }}
    >
      <img src={props.cocktail.link} width='80%' height='320vw'></img>
      <h4>{props.cocktail.title}</h4>
      <p>{props.cocktail.price}</p>
    </Col>
  );
}
