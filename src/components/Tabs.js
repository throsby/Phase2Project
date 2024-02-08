import react from "react"
import {useState, useEffect} from "react"
import Tab from "./Tab"
import { Route, Switch, NavLink, useHistory, useParams } from "react-router-dom";

export default function Tabs({selectedCuisine}){

return(
  <div className="tabs">
    <NavLink
      to="/1"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
      exact={true}
    >{selectedCuisine[0] ? selectedCuisine[0]: "Tab 1"}</NavLink>
     <NavLink
      to="2"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
    >{selectedCuisine[1] ? selectedCuisine[1] : "Tab 2"}</NavLink>
    <NavLink
      to="3"
      className={({ isActive }) => (isActive ? 'active' : 'navlink')}
    >{selectedCuisine[2] ? selectedCuisine[2] : "Tab 3"}</NavLink>
    <Switch>
    <Route exact path="/1">
        <div/>
      </Route>
      <Route path="/2">
        <div />
      </Route>
      <Route path="/3">
        <div />
      </Route>
    </Switch>
  </div>
)

}