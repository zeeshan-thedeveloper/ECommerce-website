import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useFormik } from "formik";
const AddProduct = (props) => {
  const formik = useFormik({
    initialValues: {
      itemName: "",
      // itemId: "",
      itemPrice: "",
      itemDescription: "",
      itemImage: "",
      itemSellerName: (props.loggedInUser!=null) ? props.loggedInUser.firstName : 'Default Name',
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
          return response.json();
        })
        .then((data) => {
          console.log("Response of adding data: ", data);
          // if(data.responseCode==SELLER_ACCOUNT_CREATED){
          //   // Store data in local storage
          //   localStorage.setItem("loggedInUser",JSON.stringify(data.responsePayload))
          //   localStorage.setItem("isLoggedIn","true");
          //   navigate("/sellerDashboard");
          // }
          // else if(data.responseCode==CUSTOMER_ACCOUNT_CREATED){
          //   // store data in local storage
          //   localStorage.setItem("loggedInUser",JSON.stringify(data.responsePayload))
          //   localStorage.setItem("isLoggedIn","true");
          //   navigate("/productsLists")
          // }
          // else{
          // }
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
