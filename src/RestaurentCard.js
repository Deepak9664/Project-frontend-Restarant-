import React from "react";
import {useContext} from "react"
import UserContext from "./Utils/userContext";

const Restaurentcard=({name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString})=>{
      const {user}=useContext(UserContext)
    return(
    <div className="w-56 p-2 m-2 shadow-lg bg-lime-300">
       <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="text-xs">{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold">{user.name}-{user.email}</h5>
    </div>
    )
   }
   export default Restaurentcard;