import React from "react"
import "./style-components/footer.css"

class Footer extends React.Component {
    render() {
        return (
            <footer class="mt-5">
                <a href="/">Politica de privacidad</a>
                <a href="/">Aviso Legal</a>
                {/* <a href="">Politica de privacidad</a> */}
            </footer>
        )
    }
}

export default Footer