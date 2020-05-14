import React from "react"
import ReactDOM from "react-dom"
//CSS wacho
import "./global.css"
//APP Componenete 
import App from "./componentes/App"


//DOM div

const DOMcontainer= document.getElementById("app")

ReactDOM.render(<App/>, DOMcontainer)   