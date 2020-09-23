import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import SupplyShare from "../assets/suppleshare-resize.mp4";
import Medila from "../assets/medila-resize.mp4";
import SensoryCuff from "../assets/sensorycuff-resize.mp4";
import FitnessApplication from "../assets/fitnessapp-resize.mp4";
import Button from "react-bootstrap/Button";

function Content(props) {
  return (
    <Container fluid={true}>
      <Row
        className="text-center"
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8%",
        }}
      >
        <Col md={4} xs={4} lg={4}>
          <h3 className="display-6 font-weight-bold">Medila</h3>
          <h3 className="lead font-weight-light">
            is a virtual patient consultation application to help doctors look
            after patients from home during the coronavirus pandemic.
          </h3>
          <Button
            style={{ marginTop: 10 }}
            variant="outline-primary"
            onClick={() => {
              window.open(
                "https://github.com/anoopsonar30/Medila/tree/app-frontend",
                "_blank"
              );
            }}
          >
            View Source Code
          </Button>
        </Col>
        <Col md={2} lg={2} xs={2}></Col>
        <Col md={4} xs={4} lg={3}>
          <ReactPlayer
            url={Medila}
            height={"100%"}
            width="100%"
            controls={false}
            playing={true}
            mute={true}
            loop={true}
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  muted: true,
                  loop: true,
                },
              },
            }}
          />
        </Col>
      </Row>

      <Row
        className="text-center"
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8%",
        }}
      >
        <Col md={4} xs={4} lg={3}>
          <ReactPlayer
            url={SupplyShare}
            height={"100%"}
            width="100%"
            controls={false}
            playing={true}
            mute={true}
            loop={true}
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  muted: true,
                  loop: true,
                },
              },
            }}
          />
        </Col>
        <Col md={1} lg={2} xs={2}></Col>
        <Col md={4} xs={4} lg={4}>
          <h3 className="display-6 font-weight-bold">Supply Sharing</h3>
          <h3 className="lead font-weight-light">
            is an ecommerce mobile application that allows users to buy items
            from bulk stores and split them later by getting a driver to deliver
            the items to them.
          </h3>
          <Button
            style={{ marginTop: 10 }}
            variant="outline-primary"
            onClick={() => {
              window.open(
                "https://github.com/moiiiiit/supply-sharing-app",
                "_blank"
              );
            }}
          >
            View Source Code
          </Button>
        </Col>
      </Row>

      <Row
        className="text-center"
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8%",
        }}
      >
        <Col md={4} xs={4} lg={4}>
          <h3 className="display-6 font-weight-bold">Sensory Cuff</h3>
          <h3 className="lead font-weight-light">
            is a mobile application built to control a remotely inflatable
            pressure cuff I made with Arduino to calm autistic students
            experiencing a sensory overload.
          </h3>
          <h3 style={{ fontSize: 8 }} className="font-weight-light">
            (The demo was recorded when the cuff wasnt connected)
          </h3>
          <Button
            style={{ marginTop: 10 }}
            variant="outline-primary"
            onClick={() => {
              window.open(
                "https://github.com/moiiiiit/EPICS-2200-Sensory-Devices",
                "_blank"
              );
            }}
          >
            View Source Code
          </Button>
        </Col>
        <Col md={2} lg={2} xs={2}></Col>
        <Col md={4} xs={4} lg={3}>
          <ReactPlayer
            url={SensoryCuff}
            width="100%"
            height={"100%"}
            controls={false}
            playing={true}
            mute={true}
            loop={true}
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  muted: true,
                  loop: true,
                },
              },
            }}
          />
        </Col>
      </Row>

      <Row
        className="text-center"
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8%",
          marginBottom: "8%",
        }}
      >
        <Col md={4} xs={4} lg={3}>
          <ReactPlayer
            url={FitnessApplication}
            width="100%"
            height={"100%"}
            controls={false}
            playing={true}
            mute={true}
            loop={true}
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  muted: true,
                  loop: true,
                },
              },
            }}
          />
        </Col>
        <Col md={2} lg={2} xs={2}></Col>
        <Col md={4} xs={4} lg={4}>
          <h3 className="display-6 font-weight-bold">FitnessX</h3>
          <h3 className="lead font-weight-light">
            is a quick flutter-built fitness tracker app I built to demonstrate
            my skills to a potential employer in Pune, India.
          </h3>
          <Button
            style={{ marginTop: 10 }}
            variant="outline-primary"
            onClick={() => {
              window.open(
                "https://github.com/moiiiiit/fitnessApp",
                "_blank"
              );
            }}
          >
            View Source Code
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
