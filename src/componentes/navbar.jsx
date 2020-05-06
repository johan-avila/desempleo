import React from "react"
import {Link} from "react-router-dom"
import "./style-components/navbar.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg sticky-top d-flex justify-content-around navMovileCss">
                    <Link className="navbar-brand navabarNameAndCursos text-center" to={"/"}>Web Name</Link>
                    {/* collapse navbar-collapse /*esconde el buscador */}
                    <form className=" CustomNavbarForm d-flex CustomMovileCSS">
                        <input className="form-control mr-sm-2 CustomNavbarForm CustomMovileCSS inputColorCss" type="text" />
                        <button className="btn btn-outline-success my-2 my-sm-0 CustomMovileCSS">x</button>
                    </form>
                    <Link className="navbar-brand btn-cursosyAyudas navabarNameAndCursos" to={"/"}>Nuevos Cursos y Ayudas </Link>
                </nav>
            </React.Fragment>)
    }

}

export default Navbar