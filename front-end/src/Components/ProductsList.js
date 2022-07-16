import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarWrapper from "../Support/Navbar/NavbarWrapper";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button"
import Cart from "./Cart";
const ProductsList = () => {
  const [customerName, setCustomerName] = useState("Zeeshan");
  const [numberOfSelectedItems,setNumberOfSelectedItems] = useState(0)
  const [modalShow, setModalShow] =useState(false);
  const [selectedItems,setSelectedItems] = useState([]);
  const [listOfItems,setListofItem]=useState([
    {
        itemName:"IPhone 11 Pro-Max",
        itemId:"tjfmfnjdm",
        itemPrice:"500$",
        itemDescription:"Bla bla vla vo vo vo vo vo vo vo vo",
        itemImage:"https://static-01.daraz.pk/p/8a08d1c0066fc95c31fdf8069ca7b7dd.jpg",
        itemSellerName:"Zeeshan"
    },
    {
        itemName:"IPhone 12 Pro-Max",
        itemId:"tjfmfnmnjdm",
        itemPrice:"500$",
        itemDescription:"Bla bla vla vo vo vo vo vo vo vo vo",
        itemImage:"https://static-01.daraz.pk/p/8a08d1c0066fc95c31fdf8069ca7b7dd.jpg",
        itemSellerName:"Tuba"
    },
    {
        itemName:"IPhone 13 Pro-Max",
        itemId:"tjfmf98unjdm",
        itemPrice:"500$",
        itemDescription:"Bla bla vla vo vo vo vo vo vo vo vo",
        itemImage:"https://static-01.daraz.pk/p/8a08d1c0066fc95c31fdf8069ca7b7dd.jpg",
        itemSellerName:"Nigeeta"
    },
    {
        itemName:"IPhone 14 Pro-Max",
        itemId:"tjfhygmfnjdm",
        itemPrice:"500$",
        itemDescription:"Bla bla vla vo vo vo vo vo vo vo vo",
        itemImage:"https://static-01.daraz.pk/p/8a08d1c0066fc95c31fdf8069ca7b7dd.jpg",
        itemSellerName:"Nadir"
    },
    {
        itemName:"IPhone 15 Pro-Max",
        itemId:"tjf78uhmfnjdm",
        itemPrice:"500$",
        itemDescription:"Bla bla vla vo vo vo vo vo vo vo vo",
        itemImage:"https://static-01.daraz.pk/p/8a08d1c0066fc95c31fdf8069ca7b7dd.jpg",
        itemSellerName:"Muskan"
    },
    

  ]);

  console.log("Selecte item",selectedItems)
  const handleAddToCart=(e)=>{
    listOfItems.forEach((item)=>{
      if(item.itemId==JSON.parse(e.target.value).itemId){
        selectedItems.push(item);
      }
      setNumberOfSelectedItems(selectedItems.length)
    })
  }

  
  return (
    <div>
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col xs={6}>
            <div style={{ fontSize: "2rem" }}>Welcome {customerName}</div>
          </Col>
          <Col style={{ paddingTop: "0.5rem" }}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Prodcut Name"
                aria-label="Prodcut Name"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            <Card style={{ width: "10rem" }}>
              <Card.Header>
                <Card.Text>Catagories</Card.Text>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>IPhone</ListGroup.Item>
                <ListGroup.Item>Samsung</ListGroup.Item>
                <ListGroup.Item>VIVO</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card style={{marginTop:"1rem"}}>
      
                <Card.Header > <Button variant="light"  style={{cursor:"pointer"}} onClick={() => setModalShow(true)} >Cart : ({numberOfSelectedItems})</Button> </Card.Header>
            </Card>
          </Col>
          <Col xs={10}>
          <Card style={{ width: '100%'}}>
            <Row style={{padding:"2rem"}}>
                {listOfItems.map((item)=>{
                    return <Col xs={3} style={{marginTop:"1rem"}}>
                             <Card className="text-center">
                                <Card.Body>
                                    <img src={item.itemImage} width="70%" />
                                    <div style={{fontSize:"1.2rem",fontWeight:"bold"}}>{item.itemName}</div>
                                    <div style={{fontSize:"0.8rem"}}>{item.itemDescription}</div>
                                    <div style={{fontSize:"1rem",fontWeight:"bold"}}>{item.itemPrice}</div>
                                </Card.Body>
                                <Card.Footer>
                                <Button variant="light"  style={{cursor:"pointer"}} value={JSON.stringify(item)} onClick={handleAddToCart}>Add to cart</Button>
                                </Card.Footer>
                             </Card>
                    </Col>
                })}
            </Row>
          </Card>
          </Col>
        </Row>
      </Container>
      <Cart
        show={modalShow}
        onHide={() => {
          setSelectedItems([])
          setNumberOfSelectedItems(selectedItems.length)
          setModalShow(false)}}
        listOfItems={selectedItems}
      />
    </div>
  );
};
export default NavbarWrapper(ProductsList);
