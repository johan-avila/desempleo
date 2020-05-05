import React from "react"
//Componenetes
import Navbar from "../componentes/navbar"
import Form from "../componentes/form"
import Footer from "../componentes/footer"
import ColumnIzq from "../componentes/columnaIzq"
//Css
import "./pagescss/generalLayout.css"

class General extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                    <head>
                        <title>hola bba como tu te llama</title>
                    </head>
                
                <Navbar />
                <main className="GlobalGeneral">
                    <ColumnIzq h1="hola mundo" />
                    <div className="columnaDer">
                        <Form />
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default General