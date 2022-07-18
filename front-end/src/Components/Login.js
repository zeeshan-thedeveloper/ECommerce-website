import NavbarWrapper from "../Support/Navbar/NavbarWrapper";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  CUSTOMER_ACCOUNT_LOGED_IN,
  SELLER_ACCOUNT_LOGED_IN,
} from "./responses";
const Login = () => {
  const [serverResponse, setServerResponse] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const [accountType, setAccountType] = useState(searchParams.get("loginType"));
  let navigate = useNavigate();
  useEffect(() => {
    setAccountType(searchParams.get("loginType"));
    console.log("Account type ", accountType);
  }, []);
  const handleCreateAccount = (e) => {
    navigate(`/signup?signupType=${e.target.value}`);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const data = { ...values, accountType: accountType };
      fetch("http://localhost:8000/db-api/signIn", {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.responseCode == SELLER_ACCOUNT_LOGED_IN) {
            // Store data in local storage
            localStorage.setItem(
              "loggedInUser",
              JSON.stringify(data.responsePayload)
            );
            localStorage.setItem("isLoggedIn", "true");
            navigate("/sellerDashboard");
          } else if (data.responseCode == CUSTOMER_ACCOUNT_LOGED_IN) {
            // store data in local storage
            localStorage.setItem(
              "loggedInUser",
              JSON.stringify(data.responsePayload)
            );
            localStorage.setItem("isLoggedIn", "true");
            navigate("/productsLists");
          } else {
            console.log(data.responseMessage);
            setServerResponse(data.responseMessage);
            alert(data.responseMessage);
            
          }
        });
    },
  });
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
        <Card.Header>Login as {accountType}</Card.Header>
        <Card.Body>
          <Container className="text-left">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label>Email Address</label>
                <input
                  style={{ marginLeft: "1rem" }}
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  style={{ marginLeft: "3rem" }}
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>

              <Button type="submit">Login</Button>
            </form>
          </Container>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button
            variant="light"
            value={accountType}
            style={{ cursor: "pointer" }}
            onClick={handleCreateAccount}
          >
            Don't have account? Create one
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NavbarWrapper(Login);
