import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'
import Profilefunctional from './Profile'
const About2 = () => {
  
  return (
    <div>
      <h1 className="p-3 space-y-3">This All About page</h1>
      <Profilefunctional name={"Deepak"}/>
      <Profile name={"Deepak singh class"}/>
      {/* <Outlet/> */} 
      </div>
  )
}

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor")
  }
  componentDidMount(){
   console.log("componentdidMount")
  }
  render(){
    console.log("render")
    return (
      <div>
        <h1>This All About page</h1>
        {/* <Profilefunctional name={"Deepak"}/> */}
        <Profile name={"Deepak Singh"}/>
        {/* <Outlet/> */} 
        </div>
    )

  }
}

export default About
