import React, { useContext } from 'react'
import "./bill.css"
import { Context } from '../Context/ContextStore'

function Bill() {
    const shipping= useContext(Context);
    console.log("BILL INFO"+shipping.shippingsummary)
  return (
    <div className="containerr">
  <h2>Your Bill</h2>
  <div className="order-details">
    <div className="detail">
      <h3>Total Amount:</h3>
      <p>${shipping.totalamount}</p>
    </div>
    <div className="detail">
      <h3>Total Items:</h3>
      <p>{shipping.totalitems}</p>
    </div>
    <div className="detail">
      <h3>Customer Name:</h3>
      <p>{shipping.shippingsummary.fullname}</p>
    </div>
    <div className="detail">
      <h3>Address:</h3>
      <p>{shipping.shippingsummary.address},{shipping.shippingsummary.city},{shipping.shippingsummary.zip}</p>
    </div>
    <div className="detail">
      <h3>Email:</h3>
      <p>{shipping.shippingsummary.email}</p>
    </div>
    <div className="detail">
      <h3>Phone Number:</h3>
      <p>{shipping.shippingsummary.phone}</p>
    </div>
    <div className="detail">
      <h3>ZIP Code:</h3>
      <p>{shipping.shippingsummary.zip}</p>
    </div>
  </div>
</div>

  )
}

export default Bill