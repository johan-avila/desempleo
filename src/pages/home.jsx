import React from "react"
//Componentes
import Navbar from "../componentes/navbar"
import Footer from "../componentes/footer"
import Card from "../componentes/Card"
//meta componente
import MetaEtiquetas from "../componentes/MataTags"

//css
import "./pagescss/home.css"

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MetaEtiquetas />
                < Navbar />
                <section className="sectionHome mt-5">
                    <Card
                        linkTo="/apoyos" //a donde va el card
                        img={`https://cdn.pixabay.com/photo/2016/04/15/15/42/leiharbeit-1331296_960_720.jpg`}    //img del card
                        altImg="for sale " // alt del img
                        Title="Apoyos para desempleados"  //titulo del card
                    />
                    <Card
                        linkTo="/apoyos" //a donde va el card
                        img={`https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}    //img del card
                        altImg="for sale " // alt del img
                        Title="Apoyos para desempleados"  //titulo del card
                    />  
                    <Card
                        linkTo="/apoyos" //a donde va el card
                        img={`https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}    //img del card
                        altImg="for sale " // alt del img
                        Title="Apoyos para desempleados"  //titulo del card
                    />  
                    <Card
                        linkTo="/apoyos" //a donde va el card
                        img={`https://images.unsplash.com/photo-1581668181500-08c6a6e006f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}    //img del card
                        altImg="for sale " // alt del img
                        Title="Apoyos para desempleados"  //titulo del card
                    />  
                    
                </section>
                <section className="SecondSectionHome ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, itaque architecto, harum vero sequi doloremque qui laborum accusantium nisi earum id minus nemo neque cum enim repellendus et, laboriosam quos?</p>
                </section>
                <section className="sectionHome pt-1">
                    <Card
                        linkTo="/apoyos" //a donde va el card
                        img={`https://images.unsplash.com/photo-1516483156299-a0ecd4226c08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`}    //img del card
                        altImg="for sale " // alt del img
                        Title="new Article"  //titulo del card
                    />
                    <Card
                        linkTo="/apoyos" //a donde va el card
                        img={`https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`}    //img del card
                        altImg="for sale " // alt del img
                        Title="new Article"  //titulo del card
                    />  
                    <Card
                        linkTo="/apoyos" //a donde va el card
                        img={`https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`}    //img del card
                        altImg="for sale " // alt del img
                        Title="new Article"  //titulo del card
                    />  
                    <Card
                        linkTo="/apoyos" //a donde va el card
                        img={`https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`}    //img del card
                        altImg="for sale " // alt del img
                        Title="new Article"  //titulo del card
                    />  
                    
                </section>
                <Footer />

            </React.Fragment>
        )
    }
}
export default Home