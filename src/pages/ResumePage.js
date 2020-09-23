import React from "react";
import Hero from "../components/Hero";
import Iframe from "react-iframe";
import FlexView from "react-flexview/lib";
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
            height: "100%",
            minHeight: "100%",
          }}
        >
          <Hero title={"Resume"} />
          <FlexView
            style={{
              marginTop: this.state.height * 0.04 * -1,
              backgroundColor: "white",
            }}
            hAlignContent="center"
            vAlignContent="center"
          >
            <Iframe
              url="https://onedrive.live.com/embed?cid=38128077D4A08E1D&resid=38128077D4A08E1D%21646&authkey=ACr6FeI-CV72tC8&em=2"
              width={this.state.width * 0.5}
              height={this.state.height}
              id="resume"
              position="relative"
              styles={{ height: "100%" }}
            />
          </FlexView>
          <div style={{ height: this.state.height * 0.1 }}></div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default HomePage;
