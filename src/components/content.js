import React from "react";
import { Pokemon } from "./pokemon";
import axios from "axios";

// export class Content extends React.Component {
export function Content() {

    const [pType, setpType] = React.useState('');
    const [pokemon, setPokemon] = React.useState([]);


    const search = (e) => {
        e.preventDefault();


        axios.get('http://localhost:4000/api/pokemon/types/' + pType)
            .then((response) => {
                console.log(response.data);
                setPokemon(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Pokemon Search Types</h1>
            <form onSubmit={(e) => search(e)}>
                <br>
                </br>
                {/* <input type="text" className="form-control" value={pType} onChange={(e) => { setpType(e.target.value) }} ></input> */}
                <select value={pType} onChange={(e) => { setpType(e.target.value) }}>
                    <option value="Normal">Normal</option>
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                    <option value="Electric">Electric</option>
                    <option value="Grass">Grass</option>
                    <option value="Ice">Ice</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Poison">Poison</option>
                    <option value="Ground">Ground</option>
                    <option value="Flying">Flying</option>
                    <option value="Psychic">Psychic</option>
                    <option value="Bug">Bug</option>
                    <option value="Rock">Rock</option>
                    <option value="Ghost">Ghost</option>
                    <option value="Dragon">Dragon</option>
                    <option value="Dark">Dark</option>
                    <option value="Steel">Steel</option>
                </select>
                <br>
                </br>
                <br>
                </br>
                <input type="submit" value="Search" ></input>
                <br>
                </br>
                <br>
                </br>
            </form>
            <Pokemon pokemon={pokemon} ></Pokemon>
        </div>
    );
}

