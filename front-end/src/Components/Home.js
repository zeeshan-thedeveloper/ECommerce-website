import NavbarWrapper from "../Support/Navbar/NavbarWrapper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const handleLogin=(e)=>{
    navigate(`/login?loginType=${e.target.value}`);
  }
  const handleCreateAccount=(e)=>{
    navigate(`/signup?signupType=${e.target.value}`)
  }
  return (
  
    <Container>
      <Row  style={{marginTop: '10rem'}}>
        <Col>
          {/* Col 1 */}
          <Card className="text-center">
            <Card.Header>
            <img src="https://img.icons8.com/bubbles/100/000000/man-with-glasses-shopping-cart.png" style={{width:"25%"}}/>
            <Card.Text style={{fontSize:"1.5rem",fontWeight:"bold"}}>Customer</Card.Text>
            </Card.Header>
            <Card.Body>
              <Button variant="primary" style={{cursor:"pointer"}} value="Customer"onClick={handleLogin}>Login</Button>
            </Card.Body>
            <Card.Footer className="text-muted"   >
            <Button variant="light" value="Customer"  style={{cursor:"pointer"}} onClick={handleCreateAccount}>Create Account</Button>
            </Card.Footer>
            </Card>
        </Col>
        <Col>
        {/* Col 2 */}
     
        <Card className="text-center">
        <Card.Header>
            <img src="https://img.icons8.com/bubbles/100/000000/admin-settings-male.png" style={{width:"25%"}}/>
            <Card.Text style={{fontSize:"1.5rem",fontWeight:"bold"}}>Seller</Card.Text>
            </Card.Header>
            <Card.Body>
              <Button variant="primary" style={{cursor:"pointer"}} value="Seller"onClick={handleLogin}>Login</Button>
            </Card.Body>
            <Card.Footer className="text-muted"   >
            <Button variant="light" value="Seller"  style={{cursor:"pointer"}} onClick={handleCreateAccount}>Create Account</Button>
            </Card.Footer>
        </Card>
          
        </Col>
        
      </Row>
    </Container>
  
  );
};

export default NavbarWrapper(Home);
