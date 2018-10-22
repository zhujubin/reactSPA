import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './pages/login'
import Container from './pages/container/index'
import Home from './pages/container/Home/index'
import creatHistory from 'history/createBrowserHistory'





const routers = (
   <Router>
      <div>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/" component={Container}></Route>
      </div>
   </Router>
)

export default routers;