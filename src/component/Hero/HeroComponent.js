import React from "react";
import "./HeroComponent.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Hero } from "../../assets/index";

function HeroComponent() {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col>
            <Row>
              <Col>
                <h1 className="title-hero">
                  We are the best agency in the world
                </h1>
                <p className="py-2 desc-hero">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <Row className="align-items-center">
                  <Col lg={4}>
                    <Button className="btn-hero-start">Start a Project</Button>
                  </Col>
                  <Col lg={4}>
                    <Button className="btn-hero-more">Learn More</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            <Image src={Hero} width={520} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroComponent;
