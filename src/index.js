import React from "react"
import ReactDOM from "react-dom"
//APP Componenete 
import App from "./componentes/App"
//CSS wacho
import "./global.css"

//DOM div

const DOMcontainer= document.getElementById("app")

ReactDOM.render(<App/>, DOMcontainer)