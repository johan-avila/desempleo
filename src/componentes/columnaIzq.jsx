import React from "react"
//css
import "./style-components/colIzq.css"
class ColumnIzq extends React.Component {
    render() {
        return (
            <div className="columnaIzq">
                <h1>{this.props.h1}</h1>
                <p>
                    {this.props.seoTexto}
                </p>
                <img className="imgPrincipalColumnaIzq" src={this.props.linkImg} alt={this.props.altImg} />
                <section>
                    {this.props.contenido}
                </section>

            </div>
        )
    }
}

export default ColumnIzq