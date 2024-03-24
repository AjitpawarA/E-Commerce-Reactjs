import React from 'react';
import { createContext, useContext } from 'react'
import { useState } from 'react';

export const Context = createContext();

function ContextStore(props) {

    const [cartdata, setcartdata]= useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const[totalamount, settatalamount]=useState(0);
    const[totalitems, settotlaitems]= useState(0);

    const [shippingsummary, setshippingsummary]=useState({});
  return (
    <Context.Provider value={{cartdata, setcartdata,selectedCategory,setSelectedCategory,totalamount,settatalamount,totalitems, settotlaitems,shippingsummary, setshippingsummary}}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextStore;