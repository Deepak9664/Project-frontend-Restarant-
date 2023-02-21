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
    <div className="w-56 p-2 m-2 shadow-lg bg-lime-300">
       <img src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="text-ml">{description}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold"> Rupees:{price/100}</h5>
    </div>
    )
   }
   export default FootItem;
