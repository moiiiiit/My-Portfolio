import React from "react";
import Hero from "../components/Hero";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0,
    };
    window.addEventListener("resize", this.update);
  }
  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  render() {
    return (
      <div
        style={{
          marginLeft:
            this.state.width > this.state.height ? this.state.width / 8 : 0,
          marginRight:
            this.state.width > this.state.height ? this.state.width / 8 : 0,
          minHeight: this.state.height - 118,
        }}
      >
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
        <div style={{ height: "100%", marginTop: "5%" }}>
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
        <div style={{ height: this.state.height * 0.1 }}></div>
      </div>
    );
  }
}

export default ContactPage;
