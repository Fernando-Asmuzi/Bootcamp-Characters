import React from "react";  
import Home from "../home/home"
import Navbar from "../navbar/navbar.jsx"
import Characterdetails from "../character-details/characterdetails"
import About from "../about/about"

export default class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
                <Navbar/>
                <Home/>
                <Characterdetails/>
                <About/>
            </>
        )
    }
}