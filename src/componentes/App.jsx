import React from "react"
import { Switch, Route, HashRouter } from "react-router-dom";
//pages 
import Home from "../pages/home"
import General from "../pages/generalLayout"
import Apoyos from "../pages/Apoyos"
import CreditosRapidos from "../pages/creditos-rapidos"
/////////////////////////////
/////basename="/calendar"////
/////////////////////////////

function App() {
    return (
        <HashRouter  >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/generalLayout" component={General} />
                <Route exact path="/apoyos" component={Apoyos} />
                <Route exact path="/creditos-rapidos" component={CreditosRapidos} />
                <Route exact path="/creditos-rapidos" component={CreditosRapidos} />

            </Switch>
        </HashRouter>
    )
}

export default App
