import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavbarWrapper from "../Support/Navbar/NavbarWrapper";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useState } from "react";
import ViewAllProducts from "./ViewAllProducts";
import AddProduct from "./AddProdcut";
import UpdateProducts from "./UpdateProduct";
import RemoveProducts from "./RemoveProducts";
import BuyersRequests from "./BuyersRequests";
const SellerDashboard = () => {
  const [currentOpenScreen,setCurrentOpenScreen]=useState(<ViewAllProducts/>);
  const handleScreenChange=(index)=>{
    switch(index){
        case 0:
            setCurrentOpenScreen(<ViewAllProducts/>)
        break;
        case 1:
            setCurrentOpenScreen(<AddProduct/>)
        break;
        case 2:
            setCurrentOpenScreen(<UpdateProducts/>)
        break;
        case 3:
            setCurrentOpenScreen(<RemoveProducts/>)
        break;
        case 4:
            setCurrentOpenScreen(<BuyersRequests/>)
        break;
        
        
    }
  }
  return (
    <div>
      <Container>
        <div
          style={{ fontSize: "2rem", marginTop: "1rem", fontWeight: "bold" }}
        >
          Welcome Zeeshan
        </div>
        <div>
          <Row>
            <Col xs={3}>
              <Card style={{ width: "13rem", marginTop: "1rem" }}>
                <Card.Header>
                  <Card.Text>Operations</Card.Text>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{cursor:"pointer"}} onClick={()=>{
                    handleScreenChange(0);
                  }}>All Prodcuts</ListGroup.Item>
                  <ListGroup.Item style={{cursor:"pointer"}} onClick={()=>{
                    handleScreenChange(1);
                  }}> Add Prodcut</ListGroup.Item>
                  <ListGroup.Item style={{cursor:"pointer"}} onClick={()=>{
                    handleScreenChange(2);
                  }}>Update Product</ListGroup.Item>
                  <ListGroup.Item style={{cursor:"pointer"}} onClick={()=>{
                    handleScreenChange(3);
                  }}> Remove Product</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card style={{ width: "13rem", marginTop: "1rem" }}>
                <Card.Header>
                  {" "}
                  <Button variant="light" style={{cursor:"pointer"}} onClick={()=>{
                    handleScreenChange(4);
                  }}>
                    Purchase Requests
                  </Button>{" "}
                </Card.Header>
              </Card>
            </Col>
            <Col>
                <Card style={{marginTop: "1rem",padding:"1rem"}}>
                    <Container>
                        {currentOpenScreen}
                    </Container>
                </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NavbarWrapper(SellerDashboard);
