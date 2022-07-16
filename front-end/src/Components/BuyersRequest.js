import NavbarWrapper from "../Support/Navbar/NavbarWrapper"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const BuyersRequest=(props)=>{
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton >
            <Modal.Title id="contained-modal-title-vcenter" className="text-center">
              Buyers Requests  ({props.listOfItems.length})
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >

          <ListGroup variant="flush">
            {
                props.listOfItems.map((item)=>{
                    return  <ListGroup.Item>
                    <Row>
                        <Col>Name : {item.buyerName}</Col>
                        <Col>Request Time : {item.buyingRequestTime}</Col>
                      
                    </Row>
                  </ListGroup.Item>
                })
            }
          </ListGroup>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
            <Button onClick={()=>{
                // Make call to api for purchase.
                props.onHide();
                }}>Ok</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default BuyersRequest;