
import Add from "./Add"

import { useState } from "react";
import { useLocation } from 'react-router-dom';

export default function Sidebar({restaurantArray, setSelectedCuisine, selectedCuisine}){
  const uniqueCuisines = [...new Set(restaurantArray.map(item => item.cuisine_description))];
  const uniqueGrades = [...new Set(restaurantArray.map(item => item.grade))];
  let location = useLocation();
  
  function handleSelectChange(event){
    console.log("location", +location.pathname.slice(1, 2))
    
    switch (location.pathname) {
      case "/3":
        setSelectedCuisine(prevState => {
          const [first, second, _] = prevState;
          return [first, second, event.target.value]
        })
        break;
      case "/2":
        setSelectedCuisine(prevState => {
          const [first, _, third] = prevState;
          return [first, event.target.value, third]
        })
        break;
      case "/1":
        setSelectedCuisine(prevState => {
          const [_, second, third] = prevState;
          return [event.target.value, second, third]
        })
        break;
        case "/":
        setSelectedCuisine(prevState => {
          const [_, second, third] = prevState;
          return [event.target.value, second, third]
        })
        break;
      default:
        break;
    }
  }

  function renderTabName(location){
    if (location === "/1" || "/"){
      return "Select Tab 1 cuisine"
    }
    else {
      return `Select Tab ${location.slice(1, 2)} cuisine`
    }
  }

return(
  <div>
    <select className="sidebar-select" name="cuisine" onChange={handleSelectChange} value={selectedCuisine}>
      <option value="">{`${renderTabName(location.pathname)}`}</option>
      {uniqueCuisines.map((element) => {
        if (!element){
          return(
            undefined
          )
        }
        return <option value={element}>{element}</option> 
      })}
    </select>
    
    <Add/>
  </div>
)
}