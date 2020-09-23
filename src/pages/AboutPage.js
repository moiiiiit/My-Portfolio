import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");

class AboutPage extends React.Component {
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
            minHeight: this.state.height - 118,
          }}
        >
          <Hero title={this.props.title} />

          <Content>
            <h3 className="lead font-weight-light">
              I am currently a Senior studying Computer Science at the
              University of Texas at Dallas actively seeking summer internships.
              I am an international student.
            </h3>
            <p></p>
            <p></p>
            <h3 className="lead font-weight-light">
              My primary interests in the field of Computer Science are Machine
              Learning and Software Development. My passion for this has been
              very much aroused by my various college hackathon experiences
              through my past two years here. I know Javascript, Java, JavaFX,
              C++ and Python and have a functional understanding of C#, HTML,
              Bash and GoLang. My technical and conceptual interests lie in
              web-development, app-development, block-chains, artificial neural
              networks and intelligence. I am steadily getting into these
              concepts.
            </h3>
            <p></p>
            <p></p>
            <h3 className="lead font-weight-normal">
              My college GPA is 3.78/4.0
            </h3>

            <h3 className="lead font-weight-normal">
              My GitHub is:{" "}
              <a
                href="https://www.github.com/moiiiiit"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              and my Resume is:{" "}
              <a
                href="https://drive.google.com/file/d/1VwPJvzqBgs6YEyBzSqoWkunYJSvTAFSY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </h3>
            <p></p>
            <p></p>
            <h3 className="lead font-weight-light">
              In my free time, I enjoy Rock Climbing, Volunteering with campus
              organizations, Hiking and Travelling. Feel free to connect with me
              and send a message. I'll be very happy to talk to you!{" "}
            </h3>
          </Content>
          <div style={{ height: this.state.height * 0.1 }}></div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default AboutPage;
