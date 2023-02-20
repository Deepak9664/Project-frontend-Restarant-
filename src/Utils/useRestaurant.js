import { useState,useEffect } from "react";
import { FETCH_RUL } from "../Constant";

const useRestaurant=(resId)=>{
    const [restaurantMenu,setRestaurantMenu]=useState(null);
   
    
useEffect(()=>{
       getRestaurentInfo();
      
    },[])

    async function getRestaurentInfo(){
      // const data =  await fetch(FETCH_RUL+resId);
      const data = await fetch(`${FETCH_RUL}${resId}`);
      const json = await data.json();
       console.log( "resss1" ,json.data)
      setRestaurantMenu(json.data);
      
    }

   
    return restaurantMenu
}




   
export default useRestaurant;

// export const  getrestarant=async(resId)=>  {
//   const data = await fetch(`${FETCH_RUL}${resId}`);
//   const  restarant = await data.json();
//   return restarant
// }

  
