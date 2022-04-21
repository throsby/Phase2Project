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
    console.log("location", +location.pathname.slice(1, 2))
    switch (location.pathname) {
      case "/3":
        setTabs(prevState => {
          const [first, second, third] = prevState;
          return [first,second, {name: event.target.value, content: third.content}]
        })
        break;
      case "/2":
        setTabs(prevState => {
          const [first, second, third] = prevState;
          return [first, {name: event.target.value, content: second.content}, third]
        })
        break;
      case "/":
        setTabs(prevState => {
          const [first, second, third] = prevState;
          return [{name: event.target.value, content: first.content}, second, third]
        })
        break;
      default:
        break;
    }
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