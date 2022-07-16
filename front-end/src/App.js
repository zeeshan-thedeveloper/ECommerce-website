import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import ProductsList from './Components/ProductsList';
import SellerDashboard from './Components/SellerDashboard';
import SignUp from './Components/SignUp';
function App(props) {
    return <div>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/productsLists" element={<ProductsList/>} />
            <Route path="/sellerDashboard" element={<SellerDashboard/>} />
        </Routes>
    </Router>          
    </div>
}

export default App;