import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const CommentReview = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      setReviews([...reviews, { name, comment }]);
      setName("");
      setComment("");
    } else {
      alert("Please fill in both name and comment.");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
        
          <h2 className="text-center mb-4">Comment Review</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit Review
            </Button>
          </Form>

          <h3 className="mt-5 mb-4 text-center">Customer Reviews</h3>
          {reviews.length > 0 ? (
            <div>
              {reviews.map((review, index) => (
                <Row key={index} className="review-box py-2 border-bottom">
                  <Col>
                    <strong>{review.name}</strong>
                    <p>{review.comment}</p>
                  </Col>
                </Row>
              ))}
            </div>
          ) : (
            <p className="text-center">
              No reviews yet. Be the first to leave a comment!
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CommentReview;
