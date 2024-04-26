import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/logo.png";
const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" className="logoNetflix" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto NavLeft">
              <Nav.Link className="active">Home</Nav.Link>
              <Nav.Link>TV show</Nav.Link>
              <Nav.Link>Movies</Nav.Link>
              <Nav.Link>Recently Added</Nav.Link>
              <Nav.Link>My List</Nav.Link>
            </Nav>
            <Nav className="NavRight">
              <Nav.Link href="#">
                <i className="bi bi-search"></i>
              </Nav.Link>

              <Nav.Link href="#" className="kids">
                KIDS
              </Nav.Link>
              <Nav.Link href="#">
                <i className="bi bi-bell"></i>
              </Nav.Link>
              <Nav.Link href="#">
                <i className="bi bi-person-circle"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
