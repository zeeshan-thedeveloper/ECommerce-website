import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/esm/Card"
import Button from "react-bootstrap/esm/Button";
const ViewAllProducts = (props)=>{


    const [listOfItems,setListofItem]=useState([
        {
            itemName:"IPhone 11 Pro-Max",
            itemId:"tjfmfnjdm",
            itemPrice:"500$",
            itemDescription:"Bla bla vla vo vo vo vo vo vo vo vo",
            itemImage:"https://static-01.daraz.pk/p/8a08d1c0066fc95c31fdf8069ca7b7dd.jpg",
            itemSellerName:"Zeeshan"
        },
      ]);
      
    useEffect(() => {
        if(props.loggedInUser!=undefined){

        
        const data={
            itemSellerId:(props.loggedInUser!=undefined) ? props.loggedInUser._id : 'Default id'
        }
        console.log(data)
        fetch("http://localhost:8000/db-api/getAllProducts", {
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
            })
        }else{
            // Peform.
        }
    },[props.loggedInUser])

    return <div>
        <Row>
        {listOfItems.map((item)=>{
                    return <Col xs={3} style={{marginTop:"1rem"}}>
                             <Card className="text-center">
                                <Card.Body>
                                    <img src={item.itemImage} width="70%" />
                                    <div style={{fontSize:"1.2rem",fontWeight:"bold"}}>{item.itemName}</div>
                                    <div style={{fontSize:"0.8rem"}}>{item.itemDescription}</div>
                                    <div style={{fontSize:"1rem",fontWeight:"bold"}}>{item.itemPrice}</div>
                                </Card.Body>
                             </Card>
                    </Col>
                })}
        </Row>
    </div>
}

export default ViewAllProducts;