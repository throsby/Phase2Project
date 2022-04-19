import logo from './logo.svg';
import './App.css';
import { useEffect } from "react"
import Header from "./components/Header"
import Map from "./components/Map"
import Tabs from "./components/Tabs"
import Sidebar from "./components/Sidebar"

function App() {

  async function fetchData(){
    let config = {

    }
    let req = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json")
    let res = await req.json()
    console.log(res)
    return res
  }
  
  useEffect(fetchData,[])

  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Tabs/>
      <Map/>
    </div>
  );
}

export default App;
