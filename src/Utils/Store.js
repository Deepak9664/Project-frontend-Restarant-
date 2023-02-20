import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore({
reducer:{         // here we use reducer
    cart:cartSlice,   //cart will be name the name of slice 
}
})


export default store;

//creat store and imported from configure store
//provided my store to app

//slice  =>createSlice


//in store slice is used 