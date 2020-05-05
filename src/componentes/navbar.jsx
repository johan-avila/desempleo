import React from "react"
import "./style-components/navbar.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg sticky-top d-flex justify-content-around navMovileCss">
                    <a className="navbar-brand navabarNameAndCursos text-center" href="/">Web Name</a>
                    {/* collapse navbar-collapse /*esconden el buscador */}
                    <form className=" CustomNavbarForm d-flex CustomMovileCSS">
                        <input className="form-control mr-sm-2 CustomNavbarForm CustomMovileCSS inputColorCss" type="text" />
                        <button className="btn btn-outline-success my-2 my-sm-0 CustomMovileCSS">x</button>
                    </form>
                    <a className="navbar-brand btn-cursosyAyudas navabarNameAndCursos" href="/">Nuevos Cursos y Ayudas </a>
                </nav>
            </React.Fragment>)
    }

}

export default Navbar