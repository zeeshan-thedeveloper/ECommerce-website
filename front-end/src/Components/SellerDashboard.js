import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavbarWrapper from "../Support/Navbar/NavbarWrapper";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useEffect, useState } from "react";
import ViewAllProducts from "./ViewAllProducts";
import AddProduct from "./AddProdcut";
import UpdateProducts from "./UpdateProduct";
import RemoveProducts from "./RemoveProducts";
import BuyersRequests from "./BuyersRequests";
import BuyersRequest from "./BuyersRequest";
const SellerDashboard = () => {
  const [modalShow, setModalShow] =useState(false);
  const [currentOpenScreen,setCurrentOpenScreen]=useState(<ViewAllProducts/>);
  const [loggedInUser,setLoggedInUser]=useState(null);
  const [listOfBuyersRequest,setListOfBuyersRequest]=useState([
    {
      buyerName:"Zeeshan",
      buyerId:"nvckv",
      buyingRequestTime:"12-12-12"
    },
    {
      buyerName:"Zeeshan",
      buyerId:"nvckv",
      buyingRequestTime:"12-12-12"
    },
    {
      buyerName:"Zeeshan",
      buyerId:"nvckv",
      buyingRequestTime:"12-12-12"
    },
    {
      buyerName:"Zeeshan",
      buyerId:"nvckv",
      buyingRequestTime:"12-12-12"
    },
    {
      buyerName:"Zeeshan",
      buyerId:"nvckv",
      buyingRequestTime:"12-12-12"
    },
    {
      buyerName:"Zeeshan",
      buyerId:"nvckv",
      buyingRequestTime:"12-12-12"
    },
    
  ])

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser");
    if(loggedInUser){
      const user = JSON.parse(loggedInUser);
      console.log("User",user);
      setLoggedInUser(user);
    }
  },[])

  const handleScreenChange=(index)=>{
    switch(index){
        case 0:
            setCurrentOpenScreen(<ViewAllProducts loggedInUser={loggedInUser}/>)
        break;
        case 1:
            setCurrentOpenScreen(<AddProduct loggedInUser={loggedInUser}/>)
        break;
        case 2:
            setCurrentOpenScreen(<UpdateProducts loggedInUser={loggedInUser}/>)
        break;
        case 3:
            setCurrentOpenScreen(<RemoveProducts loggedInUser={loggedInUser}/>)
        break;
        case 4:
            setCurrentOpenScreen(<BuyersRequests loggedInUser={loggedInUser}/>)
        break;
        
        
    }
  }
  
  return (
    <div>
      <Container>
        <div
          style={{ fontSize: "2rem", marginTop: "1rem", fontWeight: "bold" }}
        >
          Welcome {(loggedInUser!=null) ? loggedInUser.firstName : ''}
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
                    setModalShow(true);
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
        <BuyersRequest
        show={modalShow}
        onHide={() => {
          setModalShow(false)}}
        listOfItems={listOfBuyersRequest}
      />
      </Container>
    </div>
  );
};

export default NavbarWrapper(SellerDashboard);
