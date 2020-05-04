import React from "react"
//Componentes
import Navbar from "./navbar"
import Card from "./Card"
import CardMenu from "./cardMenu"
//css
import "./style-components/app.css"

//
function App() {
    return (
        <React.Fragment>
            < Navbar />
            <section className="mt-5 customDivRow">
                < Card altImg="Img Random" img={`https://images.unsplash.com/photo-1588478498345-13a88868ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`} Title="hola mundo" />
                < Card altImg="Img Random" img={`https://images.unsplash.com/photo-1588478498345-13a88868ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`} Title="hola mundo" />
                < Card altImg="Img Random" img={`https://images.unsplash.com/photo-1588478498345-13a88868ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`} Title="hola mundo" />
                < Card altImg="Img Random" img={`https://images.unsplash.com/photo-1588478498345-13a88868ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`} Title="hola mundo" />
            </section>
            <section className="mt-5 row customDivRow">
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                
            </section>

        </React.Fragment>
    )
}

export default App