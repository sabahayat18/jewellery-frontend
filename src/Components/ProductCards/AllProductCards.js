import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function ProductCards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title>{props.text1}</Card.Title>
        <Card.Text>	
        {props.text2}
        </Card.Text>
        <Button style={{backgroundColor: 'brown'}}>{props.text3}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCards;