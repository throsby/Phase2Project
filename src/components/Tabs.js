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
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
      exact={true}
    >Tab 1</NavLink>
     <NavLink
      to="/2"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
    >Tab 2</NavLink>
    <NavLink
      to="/3"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
    >Tab 3</NavLink>
    <Switch>
    <Route exact path="/">
        <Tab tabContent={tabOne}/>
      </Route>
      <Route path="/2">
        <Tab tabContent={tabTwo}/>
      </Route>
      <Route path="/3">
        <Tab tabContent={tabThree}/>
      </Route>
    </Switch>
  </div>
)

}