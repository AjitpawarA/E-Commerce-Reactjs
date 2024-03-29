import React, { useContext, useEffect } from 'react';
import { Context } from './Context/ContextStore';
import { Link } from 'react-router-dom';

function Summary() {
    const { cartdata, totalamount, settatalamount,settotlaitems,totalitems } = useContext(Context);
    
    settotlaitems(cartdata.length)
    useEffect(() => {
        const totalPrice = cartdata.reduce((total, item) => total + item.price, 0);
        settatalamount(totalPrice);
    }, [cartdata, settatalamount,cartdata.length]);

    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <h3 style={{ margin: '10px' }}>Order Summary</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Total items in cart : {cartdata.length}</li>
                    <li className="list-group-item">Total Amount : ${totalamount}</li>
                </ul>
                <div className="card-footer">
                    {
                        totalamount > 0 ? (
                            <button type="button" className="btn btn-primary" style={{ marginRight: '10px' }}>
                        <Link to="/confirmorder" style={{ textDecoration: 'none', color: 'white' }}> Place Order</Link>
                    </button>
                        ):(
                            <button type="button" className="btn btn-primary">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> Shop More</Link>
                    </button>
                        )
                    }
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Summary;
