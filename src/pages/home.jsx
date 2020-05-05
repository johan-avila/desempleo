import React from "react"
//Componentes
import Navbar from "../componentes/navbar"
import Card from "../componentes/Card"
import CardMenu from "../componentes/cardMenu"
import Form from "../componentes/form"
import Footer from "../componentes/footer"
//css
import "./pagescss/home.css"

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                            < Navbar />
            <main>
                <section className="mt-5 customDivRow">
                    < Card altImg="Img Random" img={`https://images.unsplash.com/photo-1588478498345-13a88868ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`} Title="hola mundo" />
                    < Card altImg="Img Random" img={`https://images.unsplash.com/photo-1588478498345-13a88868ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`} Title="hola mundo" />
                    < Card altImg="Img Random" img={`https://images.unsplash.com/photo-1588478498345-13a88868ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`} Title="hola mundo" />
                    < Card altImg="Img Random" img={`https://images.unsplash.com/photo-1588478498345-13a88868ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`} Title="hola mundo" />
                </section>
                <section className="mt-5  customDivRow">
                    <CardMenu />
                    <CardMenu />
                    <CardMenu />
                    <CardMenu />
                    <CardMenu />
                </section>
                <section className="mt-1  customDivRow">
                    <CardMenu />
                    <CardMenu />
                    <CardMenu />
                    <CardMenu />
                    <CardMenu />
                </section>
                <section className=" mt-4 customDivRow" >

                    <Form />
                </section>
            </main>
            <Footer />
 
            </React.Fragment>
        )
    }
}
export default Home