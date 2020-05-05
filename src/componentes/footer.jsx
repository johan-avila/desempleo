import React from "react"
import "./style-components/footer.css"

class Footer extends React.Component {
    render() {
        return (
            <footer>

                <div className="divLegales">
                    <a href="/">Política de Cookies</a>
                    <a href="/">Política de Privacidad</a>
                    <a href="/">Aviso legal</a>
                </div>


            </footer>
        )
    }
}

export default Footer