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
                <Navbar />
                <main className="GlobalGeneral">

                    <ColumnIzq
                        h1={this.props.h1ColumnaIzq}
                        seoTexto={this.props.seoTexto}
                        altImg={this.props.altImg}
                        linkImg={this.props.linkImg}
                        contenido={this.props.contenido}
                        />
                        



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