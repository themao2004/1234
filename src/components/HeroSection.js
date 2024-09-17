import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className="hero-section bg-primary text-white text-center py-5">
      <Container>
        <Row>
          <Col>
            <h1 className="display-4">Welcome, I am Son, I am 20 year old</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant="light">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
