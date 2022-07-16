import NavbarWrapper from "../Support/Navbar/NavbarWrapper";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [accountType, setAccountType] = useState(searchParams.get("signupType"));
  useEffect(() => {
    setAccountType(searchParams.get("signupType"));
    console.log("Account type ", accountType);
  }, []);
  
  const handleLogin=(e)=> {
    navigate(`/login?loginType=${e.target.value}`);
  }
  return (
    <div style={{width:"30rem",marginLeft:"35%",marginRight:"35%",marginTop:"5%"}}>
      <Card className="text-center">
        <Card.Header>Create Account for  {accountType}</Card.Header>
        <Card.Body>
        <Container className="text-left">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobileNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Phone Number" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
          </Container>
        </Card.Body>
        <Card.Footer className="text-muted"   >
            <Button variant="light" value={accountType}  style={{cursor:"pointer"}} onClick={handleLogin}>Already have account? login</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NavbarWrapper(SignUp);
