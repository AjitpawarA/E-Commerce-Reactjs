import React, { useContext } from "react";
import { Context } from "./Context/ContextStore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(props) {
  const { cartdata, setcartdata } = useContext(Context);

  function addtocarthandle() {
    setcartdata((prevCartData) => [...prevCartData, props.data]);
    toast.success("Item added to cart successfully!"); // Adjusted toast message
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          src={props.data.images[0]}
          alt="No Image Available"
          width="100%"
          height={225}
        />
        <div className="card-body">
          <h4>{props.data.title.slice(0, 25) + "..."}</h4>
          <h5 style={{ color: "green" }}>price: ${props.data.price}</h5>
          <p className="card-text">
            {props.data.description.slice(0, 50) + "..."}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary m-1"
                onClick={addtocarthandle}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
