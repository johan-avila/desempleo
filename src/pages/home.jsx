import React from "react"
//Componentes
import Navbar from "../componentes/navbar"
import Card from "../componentes/Card"
import CardMenu from "../componentes/cardMenu"
import Form from "../componentes/form"
import Footer from "../componentes/footer"
//meta componente
import MetaEtiquetas from "../componentes/MataTags"

//css
import "./pagescss/home.css"

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MetaEtiquetas />
                < Navbar />
                <main>
                    <section className="mt-5 customDivRow">
                        < Card
                            linkTo="/general"
                            altImg="Img Random"
                            img={`https://images.unsplash.com/photo-1588478498345-13a88868ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`}
                            Title="hola mundo"
                        />
                    </section>
                    <section className="mt-5  customDivRow">
                        <CardMenu
                            cardMenuTitle="hola"
                        // -----------------------
                            LinkUno="/general"
                            textLinkUno="LinkUNO"
                            LinkDos="/general"
                            textLinkDos=""
                            LinkTres="/general"
                            textLinkTres=""
                            LinkCuatro="/general"
                            textLinkCuatro=""
                        />
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