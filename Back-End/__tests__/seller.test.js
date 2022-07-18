const app = require('../index')
const request = require('supertest')

describe('Seller-tests',()=>{

    // ------------------------------
    

    // test('It should return product list',async ()=>{
    //     const response = await request(app).get('/getProducts')
    //     expect(response.body.length).toBeGreaterThan(2)
    //     expect(response.body[0]).toHaveProperty('abc')
    //     expect(response.statusCode).toBe(200)
    //  })


    // ------------------------------


    // test('It should return added product',async ()=>{
    // const res = await request(app)
    // .post(`/db-api/addProduct`)
    // .set('Content-type', 'application/json')
    // .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTgxNjYwMTYsImV4cCI6MTY1ODE2NjEzNn0.a4TomG24FPSqQXtLFkqUkr808hqSRPwPKMHGEHIEAt0')
    // .send({ 
    //     itemName:"iphone",
    //     itemPrice:"34532",
    //     itemDescription:"no need",
    //     itemImage:"http://image",
    //     itemSellerName:"Zeeshan",
    //     itemSellerId:"62d46eed9c29025d794f9367"
    //  })
    // .expect(200);
    // })
})
