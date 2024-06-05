/* eslint-disable react/prop-types */
import './App.css';
import React from "react";
import data from "./product.json";
import { useState } from 'react';


function App() {
  const [product] = useState(data) 
  const[count, setcount] = useState(0)
  return (
    <> <nav><h1>Shopping Cart</h1>
    <div className="img-div">
    <img src="https://cdn-icons-png.flaticon.com/128/3737/3737372.png"/>
    <h2>Cart:{count}</h2>
    </div>
    </nav>
    <div className="allCards">{product.map(((value) =>(<Cards value = {value} setcount = {setcount} count = {count} key={value.id}/>) ))}

      </div>
    </>
    
  );
}
function Cards({value,setcount,count}) {
  const[show, setshow] = useState(true);
  function addcart(){
    setshow(!show)
    setcount(count+1)
  }
  function removecart(){
    setshow(!show)
    setcount(count-1)
  }
    return (
    <div className="cards">
    <img src={value.imageurl}/>
    <h1>{value.title}</h1>
    <p>{value.description}</p>
    <h1>₹{value.price}</h1>
    {show ?(
      <button className="addbtn" onClick={addcart}>Add to Cart</button>
    ):(
      <button className="removebtn" onClick={removecart}>Remove from Cart</button>
    )}
    
    </div>
  );
}
export default App;



  
    
 


// return (
  // React.createElement("h1", {className: "head", id: "h-1"}, 
  // React.createElement("i",{className:"italic"}, `JSX ${name}`)
  // ));

 
