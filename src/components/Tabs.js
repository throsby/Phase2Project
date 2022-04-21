import react from "react"
import {useState, useEffect} from "react"
import Tab from "./Tab"
import { Route, Switch, NavLink, useHistory, useParams } from "react-router-dom";

export default function Tabs({tabs}){

return(
  <div className="tabs">
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
      exact={true}
    >{tabs[0].name}</NavLink>
     <NavLink
      to="/2"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
    >{tabs[1].name}</NavLink>
    <NavLink
      to="/3"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
    >{tabs[2].name}</NavLink>
    <Switch>
    <Route exact path="/">
        <Tab />
      </Route>
      <Route path="/2">
        <Tab />
      </Route>
      <Route path="/3">
        <Tab />
      </Route>
    </Switch>
  </div>
)

}