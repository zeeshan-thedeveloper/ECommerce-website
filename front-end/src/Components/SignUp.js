import NavbarWrapper from "../Support/Navbar/NavbarWrapper";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { CUSTOMER_ACCOUNT_CREATED, SELLER_ACCOUNT_CREATED } from "./responses";
const SignUp = () => {
  let navigate = useNavigate();
  const [serverResponse,setServerResponse]=useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const [accountType, setAccountType] = useState(
    searchParams.get("signupType")
  );

  useEffect(() => {
    setAccountType(searchParams.get("signupType"));
    console.log("Account type ", accountType);
  }, []);


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      mobileNumber: "",
    },
    onSubmit: (values) => {

      const data =  {...values,accountType:accountType}
      fetch("http://localhost:8000/db-api/signUp", {
        method: "POST",
        body:JSON.stringify(data),     
        mode: 'cors', 
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        return response.json()
      }).then((data)=>{
        if(data.responseCode==SELLER_ACCOUNT_CREATED){
          // Store data in local storage
          localStorage.setItem("loggedInUser",JSON.stringify(data.responsePayload))
          localStorage.setItem("isLoggedIn","true");
          navigate("/sellerDashboard");
        }
        else if(data.responseCode==CUSTOMER_ACCOUNT_CREATED){
          // store data in local storage
          localStorage.setItem("loggedInUser",JSON.stringify(data.responsePayload))
          localStorage.setItem("isLoggedIn","true");
          navigate("/productsLists")
        }
        else{
          console.log(data.responsePayload)
          const errors = Object.keys(data.responsePayload.errors).map((item)=>{
           return data.responsePayload.errors[item].message
          })

          setServerResponse(<div>
            {
              errors.map((item)=>{
                return <div>
                  {item}
                </div>
              })
            }
          </div>)
        }
       
      })
    },
  });

  const handleLogin = (e) => {
    navigate(`/login?loginType=${e.target.value}`);
  };
  return (
    <div
      style={{
        width: "30rem",
        marginLeft: "35%",
        marginRight: "35%",
        marginTop: "5%",
      }}
    > 
      <Card className="text-center">
        {serverResponse}
        <Card.Header>Create Account for {accountType}</Card.Header>
        <Card.Body>
          <Container className="text-left">
            <form onSubmit={formik.handleSubmit}>
              <div>
              <label >Email Address</label>
              <input
                style={{marginLeft:"3rem"}}
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              </div>
              <div>
              <label >Password</label>
              <input
                style={{marginLeft:"5rem"}}
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              </div>
              <div>
              <label >Mobile Number</label>
              <input
                style={{marginLeft:"2.5rem"}}
                id="mobileNumber"
                name="mobileNumber"
                type="mobileNumber"
                onChange={formik.handleChange}
                value={formik.values.mobileNumber}
              />
              </div>
              

              <Button type="submit">Create</Button>
            </form>
          </Container>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button
            variant="light"
            value={accountType}
            style={{ cursor: "pointer" }}
            onClick={handleLogin}
          >
            Already have account? login
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NavbarWrapper(SignUp);
