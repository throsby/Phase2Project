import Restaurants from "./Restaurants"
import Add from "./Add"

import { useState } from "react";

export default function Sidebar({restaurantArray, setSelectedCuisine, selectedCuisine}){
  const uniqueCuisines = [...new Set(restaurantArray.map(item => item.cuisine_description))];
  
  
return(
  <div className="sidebar">
    <select name="cuisine" onChange={e => setSelectedCuisine(e.target.value)}>
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