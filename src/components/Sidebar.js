import Restaurants from "./Restaurants"
import Add from "./Add"
import Search from "./Search"
import { useState } from "react";

export default function Sidebar({restaurantArray}){
  const uniqueCuisines = [...new Set(restaurantArray.map(item => item.cuisine_description))];
  const [selectedCuisine, setSelectedCuisine] = useState("");
  
return(
  <div className="sidebar">
    <select name="cuisine" onChange={e => setSelectedCuisine(e.target.value)}>
      <option value="">Select cuisine</option>
      {uniqueCuisines.map((element) => {
        if (element){
          return(
            <option value={element}>{element}</option> 
          )
        }
      })}
    </select>
    <Restaurants/>
    <Add/>
  </div>
)
}