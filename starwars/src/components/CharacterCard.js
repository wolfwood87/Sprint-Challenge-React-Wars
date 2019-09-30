import React, { useState, useEffect } from "react";
import CharacterList from './CharacterList.js';

export default function CharacterCard(props) {

    return(
        <div>
            <h2>Character: {props.name}</h2>
            <p>Birth: {props.birth}</p>
            <p>Gender: {props.gender}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Species: {props.species}</p>
        </div>
    )
}