import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom";
//pages basename="/calendar"
import Home from "../pages/home"
import General from "../pages/generalLayout"
// import Form from "../componentes/form"
//////////////PRUEBA/////////////


///////////////////////////
function App() {
    return (
        <BrowserRouter basename="/desempleo" >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/generalLayout" component={General}/>
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

                            <h4>Lo mejor de todo es que eL tramite es Gratis y los puedes hacer Desde Casa  </h4>
                            <a href="https://tramites.cdmx.gob.mx/desempleo/" rel="noopener noreferrer nofollow" target="_blank">Registrate aqui
                             </a>
                            {/* <span role="img"  > &#128513; 	</span> */}

                            {/*----------------*/}

                            <h2>Retiro de Ahorro Voluntario 	</h2>

                            <h3>¿Que es?</h3>
                            <p>Trámite mediante el cual el trabajador retira de manera parcial o total los recursos depositados en la subcuenta de Aportaciones Voluntarias de la cuenta de ahorro para el retiro.</p>

                            <h3>Requisitos</h3>
                            <ul>
                                <li>Que el trabajador se encuentre registrado en la AFORE.</li>
                                <li>Que el periodo transcurrido entre la fecha del primer depósito o el último retiro y la fecha de la solicitud sea conforme al plazo seleccionado (dependiendo de la AFORE).</li>
                                <li>Contar con un Expediente de Identificación del Trabajador actualizado que será generado por la AFORE con información del trabajador, su identificación oficial y su comprobante de domicilio (véase “Generación de Expediente de Identificación del Trabajador”).</li>
                            </ul>

                            <h3>Como tramitarlo?</h3>
                            <p>
                                <ol start="1" >
                                    <li> Acudir a cualquier sucursal de la AFORE que administra la cuenta individual y presentar:
                                        <ul>
                                            <li>Solicitud de disposición de recursos debidamente llenada y firmada, que será proporcionada por la AFORE.</li>
                                            <li>Identificación oficial vigente.</li>
                                            <li>Estado de Cuenta de la AFORE o algún comprobante que acredite el registro del trabajador en la AFORE (Contrato de Administración de Fondos para el Retiro, Constancia de Registro o Traspaso, Carta de Bienvenida, consulta, resumen o certificación de saldos, detalle de movimientos o cualquier otro documento que contenga información de los saldos y movimientos de la cuenta individual).</li>
                                            <li>Estado de cuenta bancario con número de Clave Bancaria Estandarizada (CLABE) (opcional).</li>
                                        </ul>
                                    </li>

                                    <li>
                                        En caso de fallecimiento del trabajador, las personas que el titular de la cuenta haya designado tendrán derecho a disponer de los recursos de sus Subcuentas de Aportaciones Voluntarias. A falta de la designación, tendrán derecho a disponer de ellas las personas que hayan sido acreditadas como beneficiarios en la Resolución, Concesión de Pensión o Laudo que declare la calidad de beneficiario.
                                        Para tramitar el retiro, adicionalmente a la documentación señalada en el numeral 1, los beneficiarios deberán presentar:

                                        <ul>
                                            <li>Formato de designación de beneficiarios entregado en la AFORE o bien, la Resolución, Concesión de Pensión o Laudo que declare la calidad de beneficiario.</li>
                                            <li>Copia certificada del acta de defunción del trabajador.</li>
                                            <li>Identificación oficial vigente de la persona que inicie el trámite.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <a href={`https://www.consar.gob.mx/gobmx/aplicativo/catsar/Principal/TramiteExt.aspx?idTramite=11&PAG_ACTUAL=/gobmx/aplicativo/catsar/Principal/InicioExt.aspx`}
                                rel="noopener noreferrer nofollow" target="_blank">Mas informacion aqui
                             </a>
                            {/* <span role="img"  > &#128513; 	</span> */}





                            <h2>Retiro de afore por desempleo</h2>
                            <h3>¿Que es?</h3>
                            <p>Trámite mediante el cual el trabajador puede hacer un retiro parcial de su cuenta individual por situación de desempleo que, según la modalidad que aplique, puede ser equivalente a:
                                <dl>
                                    <dt>Modalidad A</dt>
                                    <dd>30 días de su último Salario Base de Cotización con un límite de 10 Unidades de Medida de Actualización.</dd>
                                    <dt>Modalidad B</dt>
                                    <dd> Lo que resulte menor entre 90 días del Salario Base de Cotización del trabajador en las últimas 250 semanas o las que tuviere y el 11.5 % de los recursos acumulados en la subcuenta de Retiro, Cesantía en edad avanzada y Vejez (RCV).</dd>
                                </dl>

                            </p>
                            <h3>Requisitos</h3>
                            <ul>
                                <li>Tener al menos 46 días en situación de desempleo.</li>
                                <li>Tener una cuenta individual registrada en una AFORE.</li>
                                <li>No haber ejercido este derecho durante los 5 años anteriores al trámite.</li>
                                <li>Contar con con un Expediente de Identificación del Trabajador actualizado y con un Enrolamiento Biométrico que será generado por la AFORE con información del trabajador, su identificación oficial, su comprobante de domicilio y y la captura de sus huellas digitales (véase “Generación de Expediente de Identificación del Trabajador”).</li>
                                <li>Para ejercer la Modalidad A, el trabajador deberá tener una cuenta individual con al menos tres años de haber sido abierta y un mínimo de doce bimestres de cotización acreditados en dicha cuenta.</li>
                                <li>Para ejercer la Modalidad B, el trabajador deberá tener una cuenta individual con 5 años o más de haber sido aperturada.</li>
                            </ul>
                            <h3>Como tramitarlo</h3>
                            <p>
                                <ol start="1">
                                    <li>Realizar la Pre-solicitud de Retiro Parcial por Desempleo en el portal www.e-sar.com.mx para obtener la Clave Única de Servicio o bien, acudir directamente a alguna sucursal de la AFORE que administra la cuenta individual para que el personal de la Administradora auxilie al trabajador en la presentación de la Pre-solicitud.</li>
                                    <li>Acudir a la sucursal seleccionada en la Pre-solicitud y presentar:
                                        <ul>
                                            <li>Pre-Solicitud de disposición de recursos por Retiro Parcial por Desempleo generada en el portal E-SAR</li>
                                            <li>Solicitud de disposición de recursos por Retiro parcial por desempleo debidamente llenada y firmada, misma que será proporcionada por la AFORE.</li>
                                            <li>Identificación oficial</li>
                                            <li>Algún documento que contenga el NSS del trabajador.</li>
                                            <li>Algún documento que contenga el NSS del trabajador.</li>
                                        </ul>
                                    </li>
                                    <li>La AFORE gestionará el trámite ante el IMSS en un plazo no mayor a 10 días hábiles de haber recibido la solicitud para obtener el certificado del derecho al Retiro Parcial por Desempleo.</li>
                                    <li>Una vez certificado el derecho por parte del IMSS, la AFORE pondrá a disposición del trabajador los recursos correspondientes de conformidad con el derecho otorgado por el Instituto:
                                    Para tramitar el retiro, adicionalmente a la documentación señalada en el numeral 1, los beneficiarios deberán presentar
                                        <ul>
                                            <li>Modalidad A: la AFORE entrega en una sola exhibición el equivalente a 30 días de su último Salario Base de Cotización con un límite de 10 Unidades de Medida de Actualización.</li>
                                            <li>Modalidad B: la AFORE entrega hasta en seis mensualidades lo que resulte menor entre el equivalente a 90 días del Salario Base de Cotización del trabajador en las últimas 250 semanas cotizadas (o las que tuviese) o el 11.5 % de los recursos acumulados en la subcuenta de RCV. Asimismo, el trabajador puede elegir la Modalidad A o bien, que el primer pago sea por un monto de 30 días de su último Salario Base de Cotización, y en su caso, el saldo restante en pagos subsecuentes.</li>
                                        </ul>
                                    </li>
                                </ol>

                            </p>
                        </div>

                        }

                    />} />

                <Route exact path="/creditos-rapidos" component={() =>
                    <General
                        h1ColumnaIzq="7 Prestamos Online"
                        seoTexto="Deja De Perder el Tiempo con los banco tradicionales y  !Ya deja de pagar tintereses excesivos, hoy te presentamos la nueva forma 
                        deobtener un credito en linea, es rapido, seguro y es el futuro de los prestamos personales "
                        altImg="Monedas y tarjeta de credito"
                        linkImg={`https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`}
                        contenido={
                            <div>

                                <h2>Tala</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam excepturi natus suscipit tempora provident modi, quas deserunt sed optio temporibus quam quia eos? </p>
                                <h2>Kueski</h2>
                                <h2>Afluenta</h2>
                                <h2>Branch</h2>
                                <h2>OKredito</h2>
                                <h2>Crdifranco</h2>
                                <h2>Vivus</h2>
                            </div>
                        }
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
        </BrowserRouter>
    )
}

export default App
