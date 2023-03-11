import React, { useContext } from "react";
import  { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Restaurentcard from "./RestaurentCard";
import { Link } from "react-router-dom";
import { filterData } from "./Utils/Helper";
import useOnline from "./Utils/useOnline";
import UserContext from "./Utils/userContext";
 


    const Body=()=>{
     const[allRestaurants,setallRestaurants]=useState([])
     const [filteredrestaurants, setfilteredRestaurants] = useState([]);
     const[searchinpuTxt,setSearchtInput]=useState("")
     const {user,setuser}=useContext(UserContext)
    
     useEffect(()=>{
       getRestarants();
     },[])
     async function getRestarants(){
       const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
       const json = await data.json();
       console.log(json ,"dataaaa")
       //optional chaining
       setallRestaurants(json?.data?.cards[2]?.data?.data?.cards);
       setfilteredRestaurants( json?.data?.cards[2]?.data?.data?.cards);
     }
    const isOnline = useOnline();
    if(!isOnline){
      return <h1> Offline,please check your connection</h1>
    }
     //conditional Rendering
     if(!allRestaurants) return null;
       if(filteredrestaurants?.length===0) return <h1>No restaurant match aur filter</h1>
   
     return  allRestaurants.length === 0 ? (
     <Shimmer/>):(
       <>
       <div className="search-container p-8  m-4 bg-gray-200 shadow-2xl my-5">
         <input  className="w-1/4 border border-gray-200 p-2 rounded-l-full" type="text" value={searchinpuTxt} onChange={(e)=>{
           setSearchtInput(e.target.value)
         }}/>
         <button className="border border-gray-400 p-2 rounded-r-full bg-slate-100" onClick={(e)=>{
           const data = filterData(searchinpuTxt,allRestaurants)
           setfilteredRestaurants(data)
         }}>search</button> 
         {/* <input value ={user.name} onChange={e=>setuser({
          name:e.target.value,
          email:"newemail@gmail.com"
         })}></input>
          <input value ={user.email} onChange={e=>setuser({
          ...user,
          email:"newemail@gmail.com"
         })}></input> */}
        
          
       </div>
     <div className="flex flex-wrap bg-gray-200">
       {filteredrestaurants.map((restaurent)=>{
         return (
         <Link to={`/restuarant/${restaurent.data.id}`} key={restaurent.data.id}>
         <Restaurentcard {...restaurent.data} />
         </Link>)
       })}
      
      
     </div>
     </>
     )
    }
    
    export default Body;