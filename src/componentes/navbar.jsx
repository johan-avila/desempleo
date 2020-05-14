import React from "react"

import "./style-components/navbar.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className=" fixed-top">
                    <div className="navContainerLinkDerecho"><a class="customLInkDer" href="/">Web Name</a></div>
                    <div>
                        {/* <!-- <a class="customLinkIzq" href="">Nuevos Cursos y Apoyos</a> */}
                    </div>
                </nav>
            </React.Fragment>)
    }

}

export default Navbar