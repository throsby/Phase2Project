import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import Header from "./components/Header"
import InternalMap from "./components/InternalMap"
import Tabs from "./components/Tabs"
import Sidebar from "./components/Sidebar"
import Restaurants from "./components/Restaurants"
import DemoPopup from './components/DemoPopup';

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState(["", "", ""]);
  const [restaurantArray, setRestaurantArray] = useState([])
  const [selectedRestaurants, setSelectedRestaurants] = useState([])
  const [showDemoPopup, setShowDemoPopup] = useState(true)

  useEffect(() => {
    async function fetchData(){
      // let config = {
  
      // }
      let req = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json")
      let res = await req.json()
      setRestaurantArray(res)
      // console.log(res, new Date())
      return res
    }
    fetchData()
  },[])

  return (
    <div className="App">
      {!!showDemoPopup && <DemoPopup setShowDemoPopup={setShowDemoPopup} />}
      <Header />
      <div className='large-container'>
        <div className="sidebar">
          <Sidebar restaurantArray={restaurantArray} setSelectedCuisine={setSelectedCuisine} selectedCuisine={selectedCuisine}/>
          <Restaurants setSelectedRestaurants={setSelectedRestaurants} selectedRestaurants={selectedRestaurants}/>
        </div>
        <div className="content-container">
          <Tabs selectedCuisine={selectedCuisine} />
          <InternalMap selectedCuisine={selectedCuisine} restaurantArray={restaurantArray} setSelectedRestaurants={setSelectedRestaurants}/>
        </div>
      </div>
    </div>
  );
}

export default App;
