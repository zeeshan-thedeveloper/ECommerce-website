import NavbarWrapper from "../Support/Navbar/NavbarWrapper"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const Cart=(props)=>{
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton >
            <Modal.Title id="contained-modal-title-vcenter" className="text-center">
              Cart  ({props.listOfItems.length})
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >

          <ListGroup variant="flush">
            {
                props.listOfItems.map((item)=>{
                    return  <ListGroup.Item>
                    <Row>
                        <Col>Item :{item.itemName}</Col>
                        <Col>Price : {item.itemPrice}</Col>
                        <Col>Seller : {item.itemSellerName}</Col>
                    </Row>
                  </ListGroup.Item>
                })
            }
          </ListGroup>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Discard</Button>
            <Button onClick={()=>{
                // Make call to api for purchase.
                props.onHide();
                }}>Checkout</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default Cart;