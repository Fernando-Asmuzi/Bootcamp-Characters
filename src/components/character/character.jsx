import React from "react";
import "./character.css"

export default class Character extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <ul>
                    <li className="char">
                        <img src={this.props.url} class="photo"/>
                    
                        <h3 class="name">{this.props.name} {this.props.lastname}</h3>
                    </li>
                </ul>
            </>
        )
    }
}