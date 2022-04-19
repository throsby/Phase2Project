import Restaurants from "./Restaurants"
import Add from "./Add"
import Search from "./Search"

export default function Sidebar(){
return(
  <div className="sidebar">
    <select name="cuisine">
      
    </select>
    <Restaurants/>
    <Add/>
  </div>
)
}