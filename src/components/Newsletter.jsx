import { useState, useEffect } from "react";
import { Col, Row, Alert, Form, Button } from "react-bootstrap";

const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "success") {
      setEmail("");
      setError("");
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    onValidated({ EMAIL: email });
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp p-4 bg-light rounded shadow-sm">
        <Row className="align-items-center">
          <Col lg={12} md={6} xl={5} className="mb-3 mb-md-0">
            <h3 className="mb-3">
              Subscribe to our Newsletter
              <br />
              <small className="text-muted">
                Never miss the latest updates
              </small>
            </h3>

            {status === "sending" && <Alert variant="info">Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="warning">{error}</Alert>}
          </Col>

          <Col md={6} xl={7}>
            <Form onSubmit={handleSubmit} noValidate>
              <div className="d-flex flex-column flex-sm-row align-items-stretch gap-2">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  required
                />
                <Button type="submit" variant="primary">
                  Subscribe
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;
