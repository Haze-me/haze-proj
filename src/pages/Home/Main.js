import React from 'react'
import { Row, Col, Container, Card, Button} from 'react-bootstrap';

const Main = () => {
  return (
    <>
      <section className='view'>
          <Row>
            <Col xs={12} sm md xl xxl lg={4}>
              <Card style={{ width: '18rem' }} className='shadow-lg'>
      <Card.Img variant="top" src="five.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col xs={12} sm md xl xxl lg={4}>
              <Card style={{ width: '18rem' }} className='shadow-lg'>
      <Card.Img variant="top" src="five.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col xs={12} sm md xl xxl lg={4}>
              <Card style={{ width: '18rem' }}className='shadow-lg'>
      <Card.Img variant="top" src="five.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
          </Row>
      </section>
    </>
  )
}

export default Main
