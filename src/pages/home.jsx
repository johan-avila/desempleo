import React from "react"
//Componentes
import Navbar from "../componentes/navbar"
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
                <section className="sectionHome my-5">


                </section>
                <Footer />

            </React.Fragment>
        )
    }
}
export default Home