import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/esm/Card"
import Button from "react-bootstrap/esm/Button";
const ViewAllProducts = ()=>{


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