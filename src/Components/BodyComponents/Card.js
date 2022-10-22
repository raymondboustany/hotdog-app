import React from "react";
import "../../styling/BodyStyling/Card.css";
export default function Card(props){
    return (
        <div className="card">
                <img src={props.img} className="card-img"/>
                <div className="name-container">
                    <h1 className="card-name">{props.name}</h1>
                </div>
                
        </div>
    )
}