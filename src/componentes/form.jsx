import React from "react"
import "./style-components/form.css"
class Form extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form className="customFormBody col-lg-12 col-sm-12">
                    <label className="customTitleForm">Recibe las ultimas Ayudas y Cursos</label>
                    <div className="form-group">
                        <input type="email" className="form-control customInputForm" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control customInputForm" placeholder="Nombre" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" for="exampleCheck1">Acepto el Aviso legal y la Politica de privacidad.</label>
                    </div>
                    <div className="FormAlinearBoton">
                        <button type="submit" className="btn btn-primary botonFormBg ">Enviar</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}
export default Form