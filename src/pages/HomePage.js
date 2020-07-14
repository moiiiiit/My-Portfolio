import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Hero from "../components/HeroNew";

function HomePage(props) {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "5%",
        }}
      >
        <Carousel style={{ width: "45%" }}>
          <Carousel.Item>
            <img
              width={"80%"}
              height={"80%"}
              className="d-block w-100"
              src="https://i.imgur.com/VYz68OY.jpg"
              alt="Mind Your Food"
            />
            <Carousel.Caption>
              <h3 style={{color: 'black'}}>Mind Your Food</h3>
              <p style={{color: 'black'}}>
                A mobile application that utilizes OCR to inform the user about the veg-friendliness and allergens of a food item.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              width={"80%"}
              height={"80%"}
              className="d-block w-100"
              src="https://i.imgur.com/4sCBipp.png"
              alt="Walk Me Amadeus"
            />
            <Carousel.Caption>
              <h3 style={{color: 'black'}}>Walk Me Amadeus</h3>
              <p style={{color: 'black'}}>This is a crowdsourced navigation app for walks and hikes. These paths can include unconventional ones like through buildings.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              width={"80%"}
              height={"80%"}
              className="d-block w-100"
              src="https://i.imgur.com/QNdPon5.jpg"
              alt="NEAT Webserver"
            />
            <Carousel.Caption>
              <h3 style={{color: 'black'}}>NEAT Webserver</h3>
              <p style={{color: 'black'}}>
                Server that generates a population of neural networks and sends them to client machine/s upon request, which then trains it.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 style={{marginLeft: '2%'}} className="display-1 font-weight-bolder">Welcome</h1>
        <div>
        <h3 style={{marginTop: '20%'}} className="lead font-weight-light">to my</h3>
          <h3 className="display-4 font-weight-light">portfolio</h3>
        </div>
      </div>
      <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginBottom: "4%"
        }}
      >
        <Carousel style={{ width: "84%" }}>
          <Carousel.Item>
            <img
              width={"80%"}
              height={"80%"}
              className="d-block w-100"
              src="https://i.imgur.com/E4jaBPE.png"
              alt="Medila"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              width={"80%"}
              height={"80%"}
              className="d-block w-100"
              src="https://i.imgur.com/WPMY6qf.png"
              alt="Sensory Cuffs"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              width={"80%"}
              height={"80%"}
              className="d-block w-100"
              src="https://i.imgur.com/MJwShQi.png"
              alt="Supply Share"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
