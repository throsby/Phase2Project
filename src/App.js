import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Map from "./components/Map"
import Tabs from "./components/Tabs"
import Sidebar from "./components/Sidebar"

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [restaurantArray, setRestaurantArray] = useState([])
  useEffect(() => {
    async function fetchData(){
      // let config = {
  
      // }
      let req = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json")
      let res = await req.json()
      setRestaurantArray(res)
      console.log(res, new Date())
      return res
    }
    fetchData()
  },[])

  return (
    <div className="App">
      <Header/>
      <Sidebar restaurantArray={restaurantArray} setSelectedCuisine={setSelectedCuisine} selectedCuisine={selectedCuisine}/>
      <Tabs/>
      <Map selectedCuisine={selectedCuisine}/>
    </div>
  );
}

export default App;
