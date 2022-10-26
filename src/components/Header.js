import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from '../img/logo.png'

function BasicExample() {
  return (
    <Navbar style={{background:'#FFFFFF',paddingBottom:'10px', border:'solid #9F0500'}} expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Cables
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Focos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              {
                /**
                 * <NavDropdown.Divider />
                 */
              }
              <NavDropdown.Item href="#action/3.4">
                Tomacorriente
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;