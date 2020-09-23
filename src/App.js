import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  componentDidMount() {
    document.title = "Mohit Bhole";
  }
  constructor(props) {
    super(props);
    this.state = {
      title: "Mohit Bhole",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Resume", path: "/resume" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Hello!",
        subTitle: "I'm a software developer",
        text: "Here's some of my projects and skills. Check them out!\n",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Connect!",
      },
      resume: {
        title: "Resume",
      },
    };
  }

  render() {
    return (
      <Router>
          <Container
            className="p-0"
            fluid={true}
            style={{
              backgroundImage: `url(${require("./assets/images/pattern.png")})`,
            }}
          >
            <Navbar className="border-top" bg="light" expand="lg">
              <Navbar.Brand>
                <img
                  src={require("./assets/images/favicon.ico")}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>

              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="m-auto">
                  <Link
                    className="nav-link"
                    to="/"
                    style={{ fontSize: 20, marginleft: 20, marginRight: 20 }}
                  >
                    Home
                  </Link>
                  <Link
                    className="nav-link"
                    to="/resume"
                    style={{ fontSize: 20, marginleft: 20, marginRight: 20 }}
                  >
                    Resume
                  </Link>
                  <Link
                    className="nav-link"
                    to="/about"
                    style={{ fontSize: 20, marginleft: 20, marginRight: 20 }}
                  >
                    About Me
                  </Link>
                  <Link
                    className="nav-link"
                    to="/contact"
                    style={{ fontSize: 20, marginleft: 20, marginRight: 20 }}
                  >
                    Contact Me
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/resume"
              render={() => <ResumePage title={this.state.resume.title} />}
            />
            <Route
              path="/about"
              render={() => <AboutPage title={this.state.about.title} />}
            />
            <Route
              path="/contact"
              render={() => <ContactPage title={this.state.contact.title} />}
            />

            <Navbar className="border-bottom" bg="transparent">
              <Navbar.Brand
                className="m-auto"
                style={{ color: "grey", fontWeight: "lighter", fontSize: 16 }}
              >
                Made by Mohit Bhole with React.js
              </Navbar.Brand>
            </Navbar>
          </Container>
      </Router>
    );
  }
}

export default App;
