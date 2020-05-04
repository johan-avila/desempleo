import React from "react"
import "./style-components/card.css"
class Carrusel extends React.Component {
    render() {
        return (
            <React.Fragment className="" >

                <div className="col-3  bg-prymary customGlobalCard" >
                    <div className="card h-100 customCardBody">
                        <img src={`https://images.unsplash.com/photo-1520176501380-9a174bf7c783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                

            </React.Fragment>
        )
    }
}

export default Carrusel