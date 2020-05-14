import React from "react"
import "./style-components/footer.css"
import {Link} from "react-router-dom";
  
  

class Footer extends React.Component {
    render() {
        return (
            <footer class="mt-5">
                <Link to="/">Politica de privacidad</Link>
                <Link to="/">Aviso Legal</Link>
            </footer>
        )
    }
}

export default Footer