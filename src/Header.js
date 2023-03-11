import React from "react";
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnline from "./Utils/useOnline";
import Instamart from "./Instamart";
import UserContext from "./Utils/userContext";
import { useSelector } from "react-redux";


const Title =()=>(
    <a href="./">
    <img className="h-36 px-2 rounded-[12px]" alt="logo" src="https://cdn.dribbble.com/users/1309691/screenshots/16842018/media/bd0f864b4d0ef49952871cb3bef269de.jpg"
    />
    </a>
  );

function  Header() {
    const [isLoggedIn,setisLoggedIn]=useState(false);
    const isOnline = useOnline()
    const {user} =useContext(UserContext) //user from utils usercontext extraxting and des

    const cartItems =useSelector( store=>store.cart.items);  // will give accss to the store
    console.log("cartitem",cartItems)
    return (
    <div className="flex justify-between bg-gray-100 h-36 text-2xl text-black w-full shadow-lg">
      <Title/>
      <div className="nav-items">
        <ul className="flex py-14 px-20">
          <Link to='/'>
            <li className="px-2">Home</li>
          </Link>
         <Link to="/about">
          <li className="px-2">About</li>
          </Link>
         <Link to="/contact"> <li className="px-2">
            Contact</li>
         </Link>
         <Link to="/instamart"> 
         <li className="px-2">Instamart</li>
         </Link>
         <Link to="/cart"><li className="px-2">Cart -{cartItems.length} items</li>
         </Link>
          
          
        </ul>
      </div>
      <h2>{isOnline ? "✅" : "🔴"}</h2>
      <span className="p-10 font-bold text-rose-900">{user.name}</span>
      {
        isLoggedIn?(<button className="bg-red-300" onClick={()=>setisLoggedIn(false)}>Logout</button>):
        (<button onClick={()=>setisLoggedIn(true)}>Login</button>)
      }
    </div>
    );
  }
  export default Header