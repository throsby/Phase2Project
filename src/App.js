import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import Header from "./components/Header"
import InternalMap from "./components/InternalMap"
import Tabs from "./components/Tabs"
import Sidebar from "./components/Sidebar"

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [restaurantArray, setRestaurantArray] = useState([])
  const [tabs, setTabs] = useState([
    {
      name: "Tab 1",
      content: "gjdkgljdsklj"
    },
    {
      name: "Tab 2",
      content: ""
    },
    {
      name: "Tab 3",
      content: ""
    }
]);
  
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
      <div className='large-container'>
        <Sidebar restaurantArray={restaurantArray} setSelectedCuisine={setSelectedCuisine} selectedCuisine={selectedCuisine} setTabs={setTabs} tabs={tabs}/>
        <div className="content-container">
          <Tabs tabs={tabs} />
          <InternalMap selectedCuisine={selectedCuisine}/>
        </div>
      </div>
    </div>
  );
}

export default App;
