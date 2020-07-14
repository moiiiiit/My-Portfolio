import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <div style={{ display: "flex", justifyContent: 'space-between' }}>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center py-5">
            <Col md={8} sm={12}>
              {props.title && (
                <h1 className="display-1 font-weight-bolder">{props.title}</h1>
              )}
              {props.subTitle && (
                <h3 className="display-4 font-weight-light">
                  {props.subTitle}
                </h3>
              )}
              {props.text && (
                <h3 className="lead font-weight-light">{props.text}</h3>
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      {props.title == "Hello!" ? (
        <div style={{ height: 250, width: 250, marginTop: '5%', marginRight: '10%' }}>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/f2xsGxi.jpg"
            alt="Profile"
          />
        </div>
      ) : null}
    </div>
  );
}

export default Hero;
