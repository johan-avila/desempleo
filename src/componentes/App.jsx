import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "../pages/home"
import General from "../pages/generalLayout"
// import Form from "../componentes/form"
//////////////PRUEBA/////////////


///////////////////////////
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* ----------------------------------------------------------------------SETION UNO---------------------------------------------- */}
                <Route exact path="/apoyo-por-desempleo" component={() =>
                    <General
                        h1ColumnaIzq="Apoyos por desempleo"
                        seoTexto="¿Te quedaste sin trabajo? Sabemos que es dificil porque nosotros tambien hemos estado en tus zapatos, pero aqui encontraras algunas ayudas que esta dando el gobierno. Si quieres enterarte de lo ultimo en ayudas y cursoas gratis para desempleados dejanos tu correo aqui 👉"
                        altImg="genete en publico"
                        linkImg={`https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`}

                        contenido={<div>
                            <h2 className="mt-2">Seguro de Desempleo en CDMX </h2>
                            <h3 className="mt-3">¿Qué es el seguro de desempleo?</h3>
                            <p className="mt-4">Es un incentivo económico equivalente al valor mensual de la UMA, hasta por 2 meses. Además de fomentar la reinserción laboral de las personas a través de capacitación y bolsa de trabajo.
                            Es decir, 2 mil 641 pesos, el cual se dará a través de una tarjeta bancaria, cheque bancario u otro mecanismo que se estime     pertinente, conforme a las disposiciones jurídicas vigentes y aplicables a la materia.  </p>

                            <h3>¿Quienes pueden obtenerlo?</h3>
                            <p>Población residente de la Ciudad de México mayor de 18 años en desempleo de un trabajo formal y población tradicionalmente excluida: mujeres despedidas por motivo de embarazo, migrantes connacionales repatriados o retornados, huéspedes de la CDMX, personas pre y liberadas de algún centro de reclusión en la CDMX y personas de comunidades indígenas en desempleo.</p>

                            <h3>Requisitos</h3>
                            <ul>
                                <li>1. Tener entre 18 y 67 años con 11 meses</li>
                                <li>2. Haber perdido involuntariamente tu empleo después del 1º de enero de 2018</li>
                                <li>3. Vivir y haber laborado durante 6 meses para una empresa con domicilio físico y fiscal en la Ciudad de México</li>
                                <li>4. Ser buscador activo de empleo</li>
                                <li>5. Registrarse en la bolsa de trabajo del Servicio Nacional de Empleo</li>
                            </ul>

                            {/* &#128513;	 */}
                            <h4>Lo mejor de todo es que eL tramite es Gratis y los puedes hacer Desde Casa  </h4>
                            <a href="https://tramites.cdmx.gob.mx/desempleo/" rel="noopener noreferrer nofollow" target="_blank">Registrate aqui
                             </a><span role="img"  > &#128513; 	</span>

                            <h2>Retiro de Ahorro Voluntario 	</h2>

                            <h3></h3>
                            <p>Trámite mediante el cual el trabajador retira de manera parcial o total los recursos depositados en la subcuenta de Aportaciones Voluntarias de la cuenta de ahorro para el retiro.</p>


                            <h2>Retiro de afore por desempleo</h2>

                        </div>
                        }

                    />} />

                <Route exact path="/creditos-rapidos" component={() =>
                    <General
                        h1ColumnaIzq="7 creditos Rapidos"
                        seoTexto=""
                        altImg=""
                        linkImg=""
                    />} />
                <Route exact path="/cursos-para-desempleados" component={() =>
                    <General
                        h1ColumnaIzq="Cursos para desempleados"
                        seoTexto=""
                        altImg=""
                        linkImg=""
                        parrafo1=""
                        parrafo2=""
                        parrafo3=""
                        parrafo4=""
                    />} />
                <Route exact path="/trabajos-desde-casa" component={() =>
                    <General
                        h1ColumnaIzq="5 trabajos desde casa"
                        seoTexto=""
                        altImg=""
                        linkImg=""
                        parrafo1=""
                        parrafo2=""
                        parrafo3=""
                        parrafo4=""
                    />} />
            </Switch>
        </Router>
    )
}

export default App
