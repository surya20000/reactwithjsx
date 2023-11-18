import React from 'react';
import { Component } from "react";
import "./App.css"
import elephant from "../src/images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

 

 // code here
 render(){
  const imgData = this.imageData();
  return(
    <>
      <div>
      {imgData.map((item) => {
        return <img src={item.img} alt={item.id} key={item.id} />
      })}
      </div>

    </>
  )
}
}


// export default AppClass