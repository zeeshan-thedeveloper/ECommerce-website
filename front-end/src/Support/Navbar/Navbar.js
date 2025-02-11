import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ()=>
{
  return <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Z-GET</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" style={{cursor:"pointer"}} >Home</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
}

export default NavBar;