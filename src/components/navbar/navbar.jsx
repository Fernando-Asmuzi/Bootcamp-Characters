import React from "react";
import "./navbar.css"


export default class Navbar extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div class="head">
                <div class="titulo">
                    <h2>Historias de fantasmas</h2>
                </div>
                <div>
                    <a href="#">Character Detail</a>
                </div>
                <div>
                    <a href="#">About</a>
                </div>
            </div>
        )
    }
}