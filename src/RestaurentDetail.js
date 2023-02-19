import React, { useEffect ,useState} from 'react'
import { FETCH_RUL } from "./Constant";


import { useParams } from 'react-router-dom' 
import { IMG_CDN_URL } from './Constant'
import './App.css'
 import useRestaurant from './Utils/useRestaurant'






const RestaurentDetail = () => {
  // const [restaurantmenu,setrestarantmenu]=useState();
  const {resId}=useParams();
  const restaurantmenu = useRestaurant(resId)
  console.log( "chgchhj",restaurantmenu)

  return   (
    <div className="menu">
      <div>
      <h1>restaurant id:{ resId}</h1>
      <h2>{restaurantmenu?.name}</h2>
         <img src={IMG_CDN_URL + restaurantmenu?.cloudinaryImageId} /> 
        <h3>{restaurantmenu?.area}</h3>
        <h3>{restaurantmenu?.city}</h3>
        <h3>{restaurantmenu?.avgRating} stars</h3>
        <h3>{restaurantmenu?.costForTwoMsg}</h3>
        <h3>{restaurantmenu?.type}</h3>
        
        
         
  
       
  </div>
           <div className="border p-6 space-y-2"> 
     <h1 className="text-3xl font-semibold">Menu</h1> 
     <ul> 
         {Object.values(restaurantmenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          )
          )}
         </ul>      //gjugjkgkguukgkguk
   </div>                          
    </div> 
  )
}

export default RestaurentDetail;
