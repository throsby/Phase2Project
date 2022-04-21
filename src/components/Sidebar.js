import Restaurants from "./Restaurants"
import Add from "./Add"

import { useState } from "react";
import { useLocation } from 'react-router-dom';

export default function Sidebar({restaurantArray, setSelectedCuisine, selectedCuisine, setTabs, tabs}){
  const uniqueCuisines = [...new Set(restaurantArray.map(item => item.cuisine_description))];
  const uniqueGrades = [...new Set(restaurantArray.map(item => item.grade))];
  console.log(uniqueGrades)
  let location = useLocation();
  
  function handleSelectChange(event){
    const [head, ...tail] = tabs;
    console.log(tail)
    console.log(head)
    console.log("location", +location.pathname.slice(1, 2))
    // switch (location.pathname) {
    //   case "/3":
    //     console.log("this worked lol")
    //     const [first,second,third] = tabs
    //     setTabs([first,second, {name: event.target.value, content: third.content}])
    //     break;
    
    //   default:
    //     break;
    // }
    // setTabs((prevState) => {
    //   console.log(prevState)
    //   return [{name: event.target.value, content: head.content}, ...tail]})
    // console.log("new tabs", tabs)
  }
return(
  <div className="sidebar">
    <select className="sidebar-select" name="cuisine" onChange={handleSelectChange}>
      <option value="">Select cuisine</option>
      {uniqueCuisines.map((element) => {
        if (!element){
          return(
            undefined
          )
        }
        return <option value={element}>{element}</option> 
      })}
    </select>
    <Restaurants/>
    <Add/>
  </div>
)
}