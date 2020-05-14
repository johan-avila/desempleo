import React from "react"
//Componenetes
import Navbar from "../componentes/navbar"
import Form from "../componentes/form"
import Footer from "../componentes/footer"
//Css
import "./pagescss/generalLayout.css"

class CreditosRapidos extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar>

                    <h2>hola</h2>
                </Navbar>
                <main >
                    <section className="GlobalGeneral">
                        <section className="ColumnaIzq">
                            <h1>7 Prestamos Online</h1>
                            <p>Deja De Perder el Tiempo con los banco tradicionales y  !Ya deja de pagar tintereses excesivos, hoy te presentamos la nueva forma
                        deobtener un credito en linea, es rapido, seguro y es el futuro de los prestamos personales </p>



                            <img className="imgPrincipalColIzq my-2" src={`https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`} alt="Monedas y tarjeta de credito" />





                            <h2>Tala</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam excepturi natus suscipit tempora provident modi, quas deserunt sed optio temporibus quam quia eos? </p>
                            <h2>Kueski</h2>
                            <h2>Afluenta</h2>
                            <h2>Branch</h2>
                            <h2>OKredito</h2>
                            <h2>Crdifranco</h2>
                            <h2>Vivus</h2>



                        </section>

                        <section className="columnaDer ">
                            <Form />
                        </section>
                    </section>
                </main>
                <Footer
                />
            </React.Fragment>
        )
    }
}

export default CreditosRapidos