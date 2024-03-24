// Cart.js

import React, { useContext } from 'react';
import { Context } from './Context/ContextStore';
import CartCard from './CartCard';
import Summary from './Summary';

function Cart() {
  const { cartdata, setcartdata } = useContext(Context); // Destructure setcartdata from context
  const totalPrice = cartdata.reduce((total, item) => total + item.price, 0);
  const cartinfo=useContext(Context);
  const removeItemFromCart = (idToRemove) => {
    setcartdata(cartdata.filter(item => item.id !== idToRemove));
  };

  return (
    <div className="container" style={{display:"flex", flexDirection:"row"}}>
      <div className="" style={{ width: "50%", marginTop: "20px", marginRight:"50px" }}>
        <div>
          <h4 className="fst-italic">Cart Items</h4>
          <ul className="list-unstyled">
            {cartdata.map((item) => (
              <CartCard key={item.id} data={item} removeItemFromCart={removeItemFromCart} /> 
            ))}
          </ul>
        </div>
      </div>
      <div style={{width:"50%", marginTop:"50px", marginLeft:"50px"}}>
        <Summary/>
      </div>
    </div>
  );
}

export default Cart;
