import { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Container className="mt-5 pt-5 col-md-6">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow">
            <Card.Body>
              <h2 className="mb-4">Counter : {count}</h2>
              <div>
                <Button
                  variant="secondary"
                  className="mx-2 btn-outline-dark"
                  onClick={increment}
                >
                  Increment
                </Button>
                <Button
                  variant="light"
                  className="mx-2 btn-outline-dark"
                  onClick={reset}
                >
                  Reset
                </Button>
                <Button
                  variant="secondary"
                  className="mx-2 btn-outline-dark"
                  onClick={decrement}
                >
                  Decrement
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
