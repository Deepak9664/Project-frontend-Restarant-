import React, { Suspense ,useContext,useState} from 'react';
import ReactDOM  from 'react-dom/client';

 import App from './App';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./About";
import Error from './Error';
import Contact from './Contact';
import Body from './Body';
import RestaurentDetail from './RestaurentDetail';
import Profile from './Profile';
import Instamart from './Instamart';
import Cart from './Cart';




const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
    path:"/",
    element:<Body/>
  },
  {
    path:"/about",
    element:<About/>,
    children:[
      {
      path:"profile",
      element:<Profile/>,
    }
  ]
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/restuarant/:resId",
    element:<RestaurentDetail/>
  },
  {
    path:"/instamart",
    element:<Suspense><Instamart/></Suspense>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
]
  }
  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter}/>
);


