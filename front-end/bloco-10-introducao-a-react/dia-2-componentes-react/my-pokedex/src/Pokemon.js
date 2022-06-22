import React from "react";
import './App.css';

class Pokemon extends React.Component {
    render() {
        const {name, type, image} = this.props;
        const {value, unit} = this.props;
        return (
            <div className="card" id={name}>
                <div>
                    <h2>{name}</h2>
                    <h2>{type}</h2>
                    <h2>Average Weight: {value} {unit}</h2>
                </div>
                <div>
                    <img className="img" src={image} alt={name}/>
                </div>
            </div>
        )
    };
};  

export default Pokemon