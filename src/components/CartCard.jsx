// CartCard.js

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartCard(props) {
  const handleDelete = () => {
    props.removeItemFromCart(props.data.id);
    toast.error("Item deleted from cart successfully!");
  };

  return (
    <li>
      <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
        <img src={props.data.images[0]} alt="Image not available" width="100%" height={96}/>
        <div className="col-lg-8">
          <h6 className="mb-0">{props.data.title}</h6>
          <small className="text-body-secondary">price: ${props.data.price}</small> </div>
        
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
}

export default CartCard;
