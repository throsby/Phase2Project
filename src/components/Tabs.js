import react from "react"
import {useState} from "react"
import Tab from "./Tab"
import { Route, Switch, NavLink } from "react-router-dom";

export default function Tabs(){
const [tabOne, setTabOne] = useState([]);
const [tabTwo, setTabTwo] = useState([]);
const [tabThree, setTabThree] = useState([]);

return(
  <div className="tabs">
    <NavLink
      to="/1"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
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