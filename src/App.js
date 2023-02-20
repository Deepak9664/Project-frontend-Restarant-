import React, { useState } from "react";
// import ReactDOM from 'react-dom/client';
import './App.css'
import Header from "./Header";
// import Body from "./Body";
import Footer from "./Footer";
import {Outlet} from "react-router-dom"
import UserContext from "./Utils/userContext";
import store from "./Utils/Store";
import {Provider} from"react-redux";
// import About from "./About";
// import Contact from "./Contact";
// // import Instamart from "./Instamart";
 

//chunking
//code splitting
//dynamic import
// const Instamart = lazy(()=>import("./Instamart"))

const App =()=>{
  const [user,setuser]=useState({
    name:"Deepak singh",
    email:"singhdepak30@gmail.com"
  })
  return (
    <Provider store ={store}>
    < UserContext.Provider value={{user:
    user,
    setuser:setuser}}>
    <Header/>
    <Outlet/>                         // all children will go to the outlet
    <Footer/>
    </UserContext.Provider>
    </Provider>
  )
}





export default App;
