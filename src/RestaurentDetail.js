import React, { useEffect ,useState} from 'react'
import { FETCH_RUL } from "./Constant";


import { useParams } from 'react-router-dom' 
import { IMG_CDN_URL } from './Constant'
import './App.css'
 import useRestaurant from './Utils/useRestaurant'
import { addItem } from './Utils/cartSlice';
import { useDispatch } from 'react-redux';







 const RestaurentDetail = () => {
  const [restaurantmenu, setrestarantmenu] = useState();
  const { resId } = useParams();
   const restaurantMenu = useRestaurant(resId)
   

  useEffect(() => {
    const getRestaurant = async (resId) => {
      const data = await fetch(`${FETCH_RUL}${resId}`);
      const restarant = await data.json();
      // console.log( "resss2" ,restarant.data)
      const itemsData = restarant.data.menu.items;
      if (typeof Object.values(itemsData) !== undefined) {
        setrestarantmenu(Object.values(itemsData));
      }
    };
    getRestaurant(resId);
  }, []);
  const dispatch = useDispatch()

  const AddfooItem =(item)=>{
    dispatch(addItem(item))
  }
  return (
    <div className= " flex  p-2 space-x-2 justify-center mt-10">
      
        <div>
          <h1>restaurant id:{resId}</h1>
           <h2 className='font-bold'>{restaurantMenu?.name}</h2>
           <img className="w-96 rounded-md" src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId} />
           <div className="justify-center">
           <h3>{restaurantMenu?.area}</h3>
           <h3 className="text-2xl">{restaurantMenu?.city}</h3>
           <h3 className="text-2xl">{restaurantMenu?.avgRating} stars</h3>
           <h3>{restaurantMenu?.costForTwoMsg}</h3>
           <h3>{restaurantMenu?.type}</h3>
           </div>
        </div>
    
        <div className=" flex flex-col border p-6 space-y-2 justify-center">
        <h1 className="text-3xl font-semibold">Menu</h1>
        <ul data-testid="menu" className="items-center">
          {restaurantmenu?.map((item) => (
            <li key={item.id}>{item.name}- <button className='p-1 m-1 bg-green-50' onClick={()=>{AddfooItem(item)}}>Add</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentDetail;
