import React from "react";
import data from "../../data/data.json";
import Character from "../character/character";

export default class Home extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <>
                {
                    data.Characters.map((character) => (
                        <Character
                        name={character.name}
                        lastname={character.lastname}
                        url={character.photo}
                        />
                    ))
                }
            
            </>
        )
    }    
}
