import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "../pages/home"
import General from "../pages/generalLayout"
// General= <General h1="hola"/>
//////////////PRUEBA/////////////
import HolaBeba from "./MataTags"
///////////////////////////
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/general" component={General} />
                {/* <div>HOLA MUNDO</div> */}
                <Route exact path="/meta" component={HolaBeba} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
