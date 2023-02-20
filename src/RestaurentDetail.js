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
      console.log( "resss2" ,restarant.data)
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
    <div className="flex">
      
        <div>
          <h1>restaurant id:{resId}</h1>
           <h2>{restaurantMenu?.name}</h2>
           <img src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId} />
           <h3>{restaurantMenu?.area}</h3>
           <h3>{restaurantMenu?.city}</h3>
           <h3>{restaurantMenu?.avgRating} stars</h3>
           <h3>{restaurantMenu?.costForTwoMsg}</h3>
           <h3>{restaurantMenu?.type}</h3>
        </div>
    
      <div className="border p-6 space-y-2">
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
