import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard.js';
import axios from "axios";

export default function CharacterList(props) {
    const [char, setChar] = useState([]);
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(result => {
                console.log(result);
                setChar(result.data.results);               
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div>
            {char.map((item, index) => {
                return <CharacterCard 
                    name = {item.name}
                    birth = {item.birth_year}
                    gender = {item.gender}
                    eye_color = {item.eye_color}
                    species = {item.species}
                    key = {index}
            />
            })}
        </div>
    )
}