import React from "react";
import "./style-components/cardMenu.css"
class CardMenu extends React.Component {
    render() {
        return (
            <div className="card text-white Tarjeta-menu mb-3 col-2 customCardBodyMenu" >
                <h3 className="card-header">Header</h3>
                <div className="card-body">
                    <ul>
                        <li><a className="hover-anclas" href="">hola</a></li>
                        <li><a className="hover-anclas" href="">bba</a></li>
                        <li><a className="hover-anclas" href="">como</a></li>
                        <li><a className="hover-anclas" href="">tu</a></li>
                        <li><a className="hover-anclas" href="">te</a></li>
                        <li><a className="hover-anclas" href="">llama</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CardMenu