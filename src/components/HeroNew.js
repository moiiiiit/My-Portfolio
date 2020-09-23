import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePic from "../assets/images/profile.jpg";
import Typist from "react-typist";

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0,
      typing: true,
    };
    window.addEventListener("resize", this.update);
  }
  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };
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
      <div style={{ alignItems: "center" }}>
        {this.state.height < this.state.width ? null : (
          <div
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: this.state.width * 0.6,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img className="d-block w-100" src={ProfilePic} alt="Profile" />
            </div>
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
              <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                  <Row style={{ alignItems: "center" }}>
                    <h1 className="display-1 font-weight-bolder">Hello!</h1>
                    <img
                      alt=""
                      src={require("../assets/images/hand.png")}
                      style={{ marginLeft: 34, height: 60, width: 60 }}
                    />
                  </Row>
                  <span style={{ fontSize: 40, fontWeight: "light" }}>
                    I'm Mohit
                  </span>
                  {this.state.typing ? (
                    <Typist
                      avgTypingDelay={50}
                      onTypingDone={this.done}
                      cursor={{
                        show: true,
                        blink: true,
                        element: "_",
                      }}
                      style={{ position: "relative", zIndex: 1 }}
                    >
                      <span
                        style={{
                          fontSize: 40,
                          fontWeight: "light",
                          fontStyle: "italic",
                        }}
                      >
                        A Software Developer
                      </span>
                      <Typist.Backspace count={20} delay={800} />
                      <span
                        style={{
                          fontSize: 40,
                          fontWeight: "light",
                          fontStyle: "italic",
                        }}
                      >
                        A Problem-Solver
                      </span>
                      <Typist.Backspace count={20} delay={800} />
                      <span
                        style={{
                          fontSize: 40,
                          fontWeight: "light",
                          fontStyle: "italic",
                        }}
                      >
                        An Innovator
                      </span>
                      <Typist.Backspace count={20} delay={800} />
                      <span
                        style={{
                          fontSize: 40,
                          fontWeight: "light",
                          fontStyle: "italic",
                        }}
                      >
                        A Critical Thinker
                      </span>
                      <Typist.Backspace count={20} delay={800} />
                    </Typist>
                  ) : (
                    ""
                  )}
                  <h3 className="lead font-weight-light">
                    Here's some of my projects and skills. Check them out!
                  </h3>

                  <h3 className="lead font-weight-light">
                    I will graduate from Universtity of Texas at Dallas with a
                    BS Computer Science in December 2020
                  </h3>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          {this.state.height >= this.state.width ? null : (
            <div
              style={{
                width:
                  this.state.width < this.state.height
                    ? 600
                    : 6 * this.state.height < 4 * this.state.width
                    ? this.state.width * 0.3
                    : this.state.width * 0.6,
                marginRight: this.state.width < this.state.height ? "1%" : "4%",
              }}
            >
              <img
                alt=""
                className="d-block w-100"
                src={ProfilePic}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Hero;
