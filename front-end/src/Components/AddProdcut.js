import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
const AddProduct = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formProductName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formProductPrice">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formProductPrice">
        <Form.Label>Product Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Product description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formProductImage">
        <Form.Label>Product Image Url</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Image Url" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddProduct;
