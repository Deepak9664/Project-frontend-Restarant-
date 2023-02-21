import React from "react";
import {useContext} from "react"
import UserContext from "./Utils/userContext";
import { IMG_CDN_URL } from "./Constant";


const FootItem=({name,
    cloudinaryImageId,
    description,
    lastMileTravelString,
price})=>{
     
    return(
    <div className="w-60 p-4 m-3 h-64 rounded-md overflow-scroll hover:shadow-lg  ">
       <img src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2 className="text-2xl font-semibold py-1">{name}</h2>
      <h3 className="text-2xl font-semibold py-1">{description}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold"> Rupees:{price/100}</h5>
    </div>
    )
   }
   export default FootItem;
