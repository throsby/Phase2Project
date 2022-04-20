import react from "react"
import {useState, useEffect} from "react"
import Tab from "./Tab"
import { Route, Switch, NavLink, useHistory, useParams } from "react-router-dom";

export default function Tabs(){
const [tabOne, setTabOne] = useState([]);
const [tabTwo, setTabTwo] = useState([]);
const [tabThree, setTabThree] = useState([]);


const tabs = [
  {name: "one",
    content: tabOne
  },
  {
    name: "two",
    content: tabTwo
  },
  {
    name: "three",
    content: tabThree
  }
]



return(
  <div className="tabs">
    {
      tabs.map((tab) => (
    <button>
        {tab.name}
    </button>
      ))
    }
    <Switch>
    <Route exact path="/">
        <Tab tabContent={tabOne}/>
      </Route>
      <Route exact path="/1">
        <Tab tabContent={tabOne}/>
      </Route>
      <Route exact path="/2">
        <Tab tabContent={tabTwo}/>
      </Route>
      <Route exact path="/3">
        <Tab tabContent={tabThree}/>
      </Route>
    </Switch>
  </div>
)

}