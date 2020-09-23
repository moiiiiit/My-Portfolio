import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Hero from "../components/HeroNew";
import FlexView from "react-flexview";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PicCard from "../components/PicCard";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");

class HomePage extends React.Component {
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
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div
          style={{
            marginLeft:
              this.state.width > this.state.height ? this.state.width / 8 : 0,
            marginRight:
              this.state.width > this.state.height ? this.state.width / 8 : 0,
            paddingBottom: "3%",
          }}
        >
          <FlexView
            hAlignContent="center"
            vAlignContent="center"
            wrap
            style={{
              paddingTop: "5%",
              marginBottom: "5%",
            }}
          >
            <h1
              style={{ color: "#17202A" }}
              className="display-1 font-weight-bolder"
            >
              Welcome
            </h1>
            <div>
              <h3
                style={{
                  marginTop:
                    this.state.width > this.state.height
                      ? 46
                      : this.state.width > 648
                      ? 46
                      : 0,
                }}
                className="lead font-weight-light"
              >
                to my
              </h3>
              <h3
                style={{ marginTop: -20, color: "#2C3E50" }}
                className="display-4 font-weight-light"
              >
                portfolio
              </h3>
            </div>
            {this.state.height < 1.2 * this.state.width ? (
              <img
                alt=""
                src={require("../assets/images/coder.png")}
                style={{ marginLeft: 40, height: 60, width: 60 }}
              />
            ) : null}
          </FlexView>
          <Hero style={{ marginLeft: "4%" }} />

          <Row
            style={{
              marginTop:
                this.state.height < 1.2 * this.state.width
                  ? this.state.height * 0.1
                  : this.state.height * 0.05,
              marginBottom: this.state.height * 0.1,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: this.state.width * 0.08,
              marginRight: this.state.width * 0.08,
            }}
          >
            <img
              alt="Java"
              src={require("../assets/logos/java.png")}
              style={{
                height: 64,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="C++"
              src={require("../assets/logos/c++.png")}
              style={{
                height: 60,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="JavaScript"
              src={require("../assets/logos/javascript.png")}
              style={{
                height: 50,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="React"
              src={require("../assets/logos/react.png")}
              style={{
                height: 64,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="Flutter"
              src={require("../assets/logos/flutter.png")}
              style={{
                height: 50,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="Node.js"
              src={require("../assets/logos/nodejs.png")}
              style={{
                height: 55,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="Android"
              src={require("../assets/logos/android.png")}
              style={{
                height: 55,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="MySQL"
              src={require("../assets/logos/mysql.png")}
              style={{
                height: 70,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="PyTorch"
              src={require("../assets/logos/pytorch.png")}
              style={{
                height: 50,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="UNIX"
              src={require("../assets/logos/unix.png")}
              style={{
                height: 40,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
            <img
              alt="Azure"
              src={require("../assets/logos/azure.png")}
              style={{
                height: 55,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 32,
              }}
            />
          </Row>

          <Row
            style={{
              justifyContent:
                this.state.height < 1.2 * this.state.width
                  ? "flex-start"
                  : "center",
              marginBottom: 24,
            }}
          >
            <h3
              style={{
                color: "#2C3E50",
                marginLeft:
                  this.state.height < 1.2 * this.state.width ? "10%" : 0,
              }}
              className="display-6 font-weight-bolder"
            >
              Mobile Dev Projects
            </h3>
            {this.state.height < 1.2 * this.state.width ? (
              <img
                alt=""
                src={require("../assets/images/phone.png")}
                style={{
                  marginLeft: 40,
                  height: 70,
                  width: 70,
                  marginTop: -14,
                }}
              />
            ) : null}
          </Row>

          <FlexView>
            <PicCard></PicCard>
          </FlexView>

          {/* <hr
          style={{
            color: "#F2F3F4",
            backgroundColor: "#F2F3F4",
            height: 1,
          }}
        /> */}

          <Row
            style={{
              justifyContent:
                this.state.height < 1.2 * this.state.width
                  ? "flex-start"
                  : "center",
              marginBottom: 24,
              marginTop: 60,
            }}
          >
            <h3
              style={{
                color: "#2C3E50",
                marginLeft:
                  this.state.height < 1.2 * this.state.width ? "10%" : 0,
              }}
              className="display-6 font-weight-bolder"
            >
              More Projects
            </h3>
          </Row>

          <FlexView
            column
            hAlignContent={"center"}
            vAlignContent={"center"}
            style={{
              marginTop: 50,
              justifyContent: "space-between",
            }}
          >
            <Carousel
              fade={true}
              interval={6000}
              keyboard={false}
              touch={true}
              nextIcon={<GrCaretNext></GrCaretNext>}
              prevIcon={<GrCaretPrevious></GrCaretPrevious>}
            >
              <Carousel.Item>
                <img
                  width={"100%"}
                  height={300}
                  className="d-block w-100"
                  src="https://www.beautycolorcode.com/ffffff-2880x1800.png"
                  alt="Mind Your Food"
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      fontFamily: "roboto",
                      color: "black",
                      fontWeight: "light",
                    }}
                  >
                    Mind Your Food
                  </h3>
                  <p
                    style={{
                      fontFamily: "roboto",
                      color: "#282b2f",
                      fontWeight: "light",
                    }}
                  >
                    A mobile application that utilizes OCR and scans ingredient
                    lists to inform the user about non-vegetarian products and
                    allergens in a food item.
                  </p>
                  <Button
                    style={{ marginTop: 10 }}
                    variant="outline-primary"
                    onClick={() => {
                      window.open(
                        "https://github.com/charJe/GreenChoice",
                        "_blank"
                      );
                    }}
                  >
                    View Source Code
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  width={"100%"}
                  height={300}
                  className="d-block w-100"
                  src="https://www.beautycolorcode.com/ffffff-2880x1800.png"
                  alt="Walk Me Amadeus"
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      fontFamily: "roboto",
                      color: "black",
                      fontWeight: "light",
                    }}
                  >
                    Walk Me Amadeus
                  </h3>
                  <p
                    style={{
                      fontFamily: "roboto",
                      color: "#282b2f",
                      fontWeight: "light",
                    }}
                  >
                    HackUTA HereAPI Winner - A crowdsourced navigation app for
                    walks and hikes. These paths can include unconventional ones
                    like through buildings.
                  </p>
                  <Button
                    style={{ marginTop: 10 }}
                    variant="outline-primary"
                    onClick={() => {
                      window.open(
                        "https://github.com/jaymspeights/HackUTA18",
                        "_blank"
                      );
                    }}
                  >
                    View Source Code
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  width={"100%"}
                  height={300}
                  className="d-block w-100"
                  src="https://www.beautycolorcode.com/ffffff-2880x1800.png"
                  alt="NEAT Webserver"
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      fontFamily: "roboto",
                      color: "black",
                      fontWeight: "light",
                    }}
                  >
                    NEAT Webserver
                  </h3>
                  <p
                    style={{
                      fontFamily: "roboto",
                      color: "#282b2f",
                      fontWeight: "light",
                    }}
                  >
                    A server that generates a population of neural networks and
                    sends them to client machine/s upon request, which then
                    trains it. This makes it possible to train a single set of
                    population on multiple machines.
                  </p>
                  <Button
                    style={{ marginTop: 10 }}
                    variant="outline-primary"
                    onClick={() => {
                      window.open(
                        "https://github.com/moiiiiit/NEATWebserver",
                        "_blank"
                      );
                    }}
                  >
                    View Source Code
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </FlexView>

          <Row
            className="justify-content-md-center"
            style={{
              marginTop: this.state.height * 0.1,
              marginBottom: this.state.height * 0.04,
            }}
          >
            <Col xs lg="2">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: this.state.height * 0.01,
                }}
              >
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    window.open("https://github.com/moiiiiit", "_blank");
                  }}
                >
                  Github
                </Button>
              </div>
            </Col>
            <Col xs lg="2">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: this.state.height * 0.01,
                }}
              >
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/mohitbhole/",
                      "_blank"
                    );
                  }}
                >
                  LinkedIn
                </Button>
              </div>
            </Col>
            <Col xs lg="2">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: this.state.height * 0.01,
                }}
              >
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    window.open("https://devpost.com/MohitBhole", "_blank");
                  }}
                >
                  Devpost
                </Button>
              </div>
            </Col>
            <Col xs lg="2">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: this.state.height * 0.01,
                }}
              >
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/moiiiiit/",
                      "_blank"
                    );
                  }}
                >
                  Instagram
                </Button>
              </div>
            </Col>
          </Row>

          {/* <hr
          style={{
            color: "#F2F3F4",
            backgroundColor: "#F2F3F4",
            height: 1,
            marginTop: this.state.height * 0.08,
          }}
        /> */}
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default HomePage;
