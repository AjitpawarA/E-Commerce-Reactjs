import React, { useContext } from 'react';
import { Context } from './Context/ContextStore';
import CartCard from './CartCard';
import Summary from './Summary';

function Cart() {
  const { cartdata, setcartdata } = useContext(Context); // Destructure setcartdata from context
  const totalPrice = cartdata.reduce((total, item) => total + item.price, 0);
  const cartinfo = useContext(Context);
  const removeItemFromCart = (idToRemove) => {
    setcartdata(cartdata.filter(item => item.id !== idToRemove));
  };

  return (
    <div className="container" style={{display: "flex", flexDirection: "row"}}>
      <div className="" style={{width: "50%", marginTop: "20px", marginRight: "50px"}}>
      <h4 className="fst-italic">Cart Items</h4>
        {totalPrice > 0 ? (
          <div>
            
            <ul className="list-unstyled">
              {cartdata.map((item) => (
                <CartCard key={item.id} data={item} removeItemFromCart={removeItemFromCart} />
              ))}
            </ul>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#f2f2f2", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <h4 className="fst-italic" style={{ color: "#555", marginBottom: "10px" }}>Cart is Empty</h4>
            <p style={{ fontSize: "18px", color: "#777" }}>Your cart is empty. Start shopping now to fill it up!</p>
            {/* <img src="empty_cart_image.png" alt="Empty Cart" style={{ width: "200px", marginTop: "20px" }} /> */}
          </div>
        )}
      </div>
      <div style={{width: "50%", marginTop: "50px", marginLeft: "50px"}}>
        <Summary/>
      </div>
    </div>
  );
}

export default Cart;
