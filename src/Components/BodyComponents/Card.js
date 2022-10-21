import React from "react";
import "../../styling/BodyStyling/Card.css";
export default function Card(props){
    return (
        <div className="card">
                <img src={props.dogBreed.img} className="card-img"/>
                <div className="name-container">
                    <h1 className="card-name">{props.dogBreed.name}</h1>
                </div>
                
        </div>
    )
}