import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CharacterList(props) {
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div>

        </div>
    )
}