import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Hero title={this.props.title} text={"Drop me a message!"} />
        <Row className="justify-content-md-center">
          <Col xs={12} sm={2} md={2}>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/mUK4gQI.png"
                alt="Chat"
              />
          </Col>
        </Row>
        <div style={{ height: "100%", marginTop: '5%' }}>
          <h3
            style={{ textAlign: "center" }}
            className="display-8 font-weight-light"
          >
            My LinkedIn:{" "}
            <a href={"https://www.linkedin.com/in/mohitbhole/"}>/mohitbhole</a>
          </h3>
          <h3
            style={{ textAlign: "center" }}
            className="display-8 font-weight-light"
          >
            My Email: mohitbhole@outlook.com
          </h3>
        </div>
      </div>
    );
  }
}

export default ContactPage;
