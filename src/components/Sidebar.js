import Restaurants from "./Restaurants"
import Add from "./Add"

import { useState } from "react";
import { useLocation } from 'react-router-dom';

export default function Sidebar({restaurantArray, setSelectedCuisine, selectedCuisine}){
  const uniqueCuisines = [...new Set(restaurantArray.map(item => item.cuisine_description))];
  const uniqueGrades = [...new Set(restaurantArray.map(item => item.grade))];
  console.log(uniqueGrades)
  let location = useLocation();
  
  function handleSelectChange(event){
    console.log("location", +location.pathname.slice(1, 2))
    switch (location.pathname) {
      case "/3":
        setSelectedCuisine(prevState => {
          const [first, second, third] = prevState;
          return [first, second, event.target.value]
        })
        break;
      case "/2":
        setSelectedCuisine(prevState => {
          const [first, second, third] = prevState;
          return [first, event.target.value, third]
        })
        break;
      case "/":
        setSelectedCuisine(prevState => {
          const [first, second, third] = prevState;
          return [event.target.value, second, third]
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