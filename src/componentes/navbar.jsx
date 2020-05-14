import React from "react"
import {Link} from "react-router-dom";
//css
import "./style-components/navbar.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className=" fixed-top">
                    <div className="navContainerLinkDerecho">
                        <Link to="/" class="customLInkDer" > Web Name</Link>
                    </div>
                    <div>
                        {/* <!-- <a class="customLinkIzq" href="">Nuevos Cursos y Apoyos</a> */}
                    </div>
                </nav>
            </React.Fragment>)
    }

}

export default Navbar