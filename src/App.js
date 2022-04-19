import logo from './logo.svg';
import './App.css';
import { useEffect } from "react"

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
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
