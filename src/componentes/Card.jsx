import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style-components/card.css"
class Card extends React.Component {


    render() {
        return (
            <React.Fragment  >
                <a className="customStateReset" href="/">
                    <div className="col-3mb-4 customGlobalCard">
                        <div className="card h-100 customCardBody ">
                            <img src={this.props.img} className="card-img-top " alt={this.props.altImg} />
                            <div className="card-body text-center customBodyCard ">
                                <h2 className="">{this.props.Title}</h2>

                            </div>
                        </div>
                    </div>
                </a>


            </React.Fragment>
        )
    }
}

export default Card