import React from "react";
import "./Card.styles.css"

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt={props.monster.name}/>
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    );
}