import React from "react";
import data from "../../data/data.json";
import "./characterdetails.css"

export default class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedElement: data.Characters[0],
    };
  }
  onChangeInput = (e) => {
    this.setState(() => {
      return {
        selectedElement: data.Characters.find(
          (element) => element.name == e.target.value
        ),
      };
    });
  };
  
  render() {
    return (
      <div>
            <div className="selector">
                <select
                onChange={(e) => {
                    this.onChangeInput(e);
                }}
                >
                {data.Characters.map((element) => (
                    <option value={element.name}>
                    {element.name + " " + element.lastname}
                    </option>
                ))}
                </select> 
           </div>    
           <p></p>
            <div className="character">
                    <div>
                        <img src={this.state.selectedElement.photo}></img>
                    </div>
                    <div>
                        <p><h1>{this.state.selectedElement.name}  {this.state.selectedElement.lastname}</h1></p>
                        <p><h2>Edad: {this.state.selectedElement.age}</h2></p>
                        <p><h2>Habilidad: {this.state.selectedElement.ability}</h2></p>
                        <p><h2>Amigos: {this.state.selectedElement.Friends}</h2></p>
                    </div>
            </div>
      </div>
    );
  }
}