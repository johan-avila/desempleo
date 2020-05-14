import React from "react";
import { Link } from "react-router-dom"
import "./style-components/cardMenu.css"
class CardMenu extends React.Component {
    /* props
    this.props.cardMenuTitle // Autoexplicativo
    this.props.LinkUno//autoexplicativo
    this.props.LinkDos
    this.props.LinkTres
    this.props.LinkCuatro
    */



    render() {
        return (
            <React.Fragment>
                <div className="card text-white Tarjeta-menu mb-3 col-2  customCardBodyMenu" >
                    <h3 className="card-header">{this.props.cardMenuTitle}</h3>
                    <div className="card-body">
                        <ul>
                            <li><a className="hover-anclas" href={this.props.LinkUno}>{this.props.textLinkUno}</a></li>
                            <li><a className="hover-anclas" href={this.props.LinkDos}>{this.props.textLinkDos}</a></li>
                            <li><a className="hover-anclas" href={this.props.LinkTres}>{this.props.textLinkTres}</a></li>
                            <li><a className="hover-anclas" href={this.props.LinkCuatro}>{this.props.textLinkCuatro}</a></li>

                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardMenu