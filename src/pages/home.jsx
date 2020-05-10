import React from "react"
//Componentes
import Navbar from "../componentes/navbar"
import Card from "../componentes/Card"
// import CardMenu from "../componentes/cardMenu"
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
                    {/*---------------------First secctiom------------------------------ */}
                    <section className="mt-5 customDivRow">
                        <h1>Cursos y Apoyos para Desempleados</h1>
                    </section>






                    <section className="mt-5 customDivRow">

                        < Card
                            linkTo="/apoyo-por-desempleo"
                            altImg=""
                            img={`https://cdn.pixabay.com/photo/2016/04/15/15/42/leiharbeit-1331296_960_720.jpg`}
                            Title="Apoyos para Desempleados"
                        />
                        < Card
                            linkTo="/creditos-rapidos"
                            altImg=""
                            img={`https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}
                            Title="7 Creditos Capidos "
                        />
                        < Card
                            linkTo="/cursos-para-desempleados"
                            altImg=""
                            img={`https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}
                            Title="Cursos Gratis para Desempleados"
                        />
                        < Card
                            linkTo="/trabajos-desde-casa"
                            altImg=""
                            img={`https://images.unsplash.com/photo-1581668181500-08c6a6e006f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}
                            Title="7 Trabajos Desde Casa"
                        />

                    </section>
                    <section className="mt-4      customDivRow">

                        <p>
                            Es el primer sitio web del especializado en informarte sobre los nuevos programas sociales, ayudas y cursos para
                            desempleados, con carácter gratuito y único en su tipo cuyo objetivo es ofrecer información y herramientas que ayuden al ciudadano a obtener un nuevo empleo o que se entere de lo ultimo en ayudas sociales, creditos y cursos.
                        </p>
                    </section>
                    {/*--------------------------------------------------- */}

                    <section className="mt-3  customDivRow">
                        {/* <CardMenu
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
                        /> */}
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