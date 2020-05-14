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
               
                <Footer />

            </React.Fragment>
        )
    }
}
export default Home