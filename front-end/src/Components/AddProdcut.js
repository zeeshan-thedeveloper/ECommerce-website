import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useFormik } from "formik";
import { OPERATION_NOT_SUCCESSFUL, OPERATION_SUCCESSFUL } from "./responses";
const AddProduct = (props) => {
  const formik = useFormik({
    initialValues: {
      itemName: "",
      // itemId: "",
      itemPrice: "",
      itemDescription: "",
      itemImage: "",
      itemSellerName: (props.loggedInUser!=null) ? props.loggedInUser.firstName : 'Default Name',
      itemSellerId: (props.loggedInUser!=null) ? props.loggedInUser._id : 'Default Id'
    },
    onSubmit: (values) => {
      const data = values;
      
      fetch("http://localhost:8000/db-api/addProduct", {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": `Bearer ${props.loggedInUser.jwtToken}`
        },
      })
        .then((response) => {
          console.log("Response status :",response.status)
          return response.json();
        })
        .then((data) => {
          console.log("Data",data)
          if(data.responseCode==OPERATION_SUCCESSFUL){
            
            alert(data.responseMessage);
          }
          else if(data.responseCode==OPERATION_NOT_SUCCESSFUL){
          
            const errors = Object.keys(data.responsePayload.errors).map((item)=>{
              return data.responsePayload.errors[item].message
             })
            alert(errors[0]);
          }
        });
    },
  });

  return (
    
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Item Name</label>
          <input
            style={{ marginLeft: "2.5rem" }}
            id="itemName"
            name="itemName"
            type="itemName"
            onChange={formik.handleChange}
            value={formik.values.itemName}
          />
        </div>
        <div>
          <label>Item Price</label>
          <input
            style={{ marginLeft: "2.5rem" }}
            id="itemPrice"
            name="itemPrice"
            type="itemPrice"
            onChange={formik.handleChange}
            value={formik.values.itemPrice}
          />
        </div>

        <div>
          <label>Item Description</label>
          <input
            style={{ marginLeft: "2.5rem" }}
            id="itemDescription"
            name="itemDescription"
            type="itemDescription"
            onChange={formik.handleChange}
            value={formik.values.itemDescription}
          />
        </div>
        <div>
          <label>Item Image</label>
          <input
            style={{ marginLeft: "2.5rem" }}
            id="itemImage"
            name="itemImage"
            type="itemImage"
            onChange={formik.handleChange}
            value={formik.values.itemImage}
          />
        </div>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>
   
  );
};

export default AddProduct;
