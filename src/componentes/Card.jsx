import React from "react"
import {
    // BrowserRouter,
    Link,
    // useRouteMatch
} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style-components/card.css"
class Card extends React.Component {

/* props

this.props.linkTo //a donde va el card
this.props.img    //img del card
this.props.altImg // alt del img
this.props.Title  //titulo del card
*/


    render() {
        return (
            <React.Fragment  >
                <Link className="customStateReset" to={this.props.linkTo}>
                    <div className=" customGlobalCard">
                        <div className="card h-100 customCardBody ">
                            <img src={this.props.img} className="card-img-top " alt={this.props.altImg} />
                            <div className="card-body text-center customBodyCard ">
                                <h2 className="">{this.props.Title}</h2>

                            </div>
                        </div>
                    </div>
                </Link>


            </React.Fragment>
        )
    }
}

export default Card