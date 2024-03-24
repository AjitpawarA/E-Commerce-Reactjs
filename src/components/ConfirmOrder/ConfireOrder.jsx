import React, { useState, useContext } from 'react';
import "./confirm.css";
import { Context } from '../Context/ContextStore';
import { Link } from "react-router-dom";
import Bill from '../Bill/Bill';

function ConfireOrder() {
    const [shippingInfo, setShippingInfo] = useState({
        fullname: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        phone: ''
    });

    const shipping = useContext(Context);
    console.log(shipping.shippingsummary);
    shipping.setshippingsummary(shippingInfo);

    const { totalamount, totalitems } = useContext(Context);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({
            ...shippingInfo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, you can send the shippingInfo to the backend or process it as needed
        console.log('Shipping Information:', shippingInfo);
    };

    return (
        <div className="containerr">
            <h2>Confirm Your Order</h2>
            <div className="order-summary">
            </div>
            <div className="total">
                <h3>Total Amount: ${totalamount}</h3>
                <h3>Total Item: {totalitems}</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Shipping Information</h2>
                <input className='inputt' type="text" name="fullname" placeholder="Full Name" value={shippingInfo.fullname} onChange={handleInputChange} required />
                <input className='inputt' type="email" name="email" placeholder="Email Address" value={shippingInfo.email} onChange={handleInputChange} required />
                <input className='inputt' type="text" name="address" placeholder="Shipping Address" value={shippingInfo.address} onChange={handleInputChange} required />
                <input className='inputt' type="text" name="city" placeholder="City" value={shippingInfo.city} onChange={handleInputChange} required />
                <input className='inputt' type="text" name="zip" placeholder="ZIP Code" value={shippingInfo.zip} onChange={handleInputChange} required />
                <input className='inputt' type="tel" name="phone" placeholder="Phone Number" value={shippingInfo.phone} onChange={handleInputChange} required />
                <button className='buttonn' type="submit"> <Link to="/bill" element={<Bill/>} style={{color:"white", textDecoration:"none"}}>Confirm Order</Link></button>
            </form>
        </div>
    );
}

export default ConfireOrder;
