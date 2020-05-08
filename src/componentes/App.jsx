import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "../pages/home"
import General from "../pages/generalLayout"

//////////////PRUEBA/////////////


///////////////////////////
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/general" component={()=> <General />} />
              
            </Switch>
        </Router>
    )
}

export default App
