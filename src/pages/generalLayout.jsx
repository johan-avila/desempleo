import React from "react"
//Componenetes
import Navbar from "../componentes/navbar"
import Form from "../componentes/form"
import Footer from "../componentes/footer"
//Css
import "./pagescss/generalLayout.css"

class General extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar>

                    <h2>hola</h2>
                </Navbar>
                <main >
                    <section className="GlobalGeneral">
                        <section className="ColumnaIzq">


                            <img className="imgPrincipalColIzq my-2" src={`https://images.unsplash.com/photo-1589199367318-8be58bb0fabb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`} alt="imgprincipal" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio nostrum commodi placeat laboriosam mollitia reiciendis quisquam voluptas incidunt magni voluptatum velit, ducimus error unde sit. Laudantium enim ex explicabo.</p>

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

export default General