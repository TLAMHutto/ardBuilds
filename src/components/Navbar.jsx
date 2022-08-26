import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/navbar.css';
import '../App.css';

function NavBar() {
  return (
    <>
      <Navbar className='navbar' variant="dark">
        <Container className='navbar-main'>
          <Navbar.Brand className='title' href="/">My Arduino Builds</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='link' href="/">Home</Nav.Link>
            <Nav.Link className='link' href="/fungi">Indoor Fungi Cultivation</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      
      
    
  );
}

export default NavBar;