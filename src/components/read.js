import React from "react";
import { Pokemon } from "./pokemon";
import axios from "axios";

export class Read extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/pokemon')
            .then((response) => {
                this.setState({ pokemon: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        pokemon: []
    }

    render() {
        return (
            <div>
                <h3>PokeDex</h3>
                <Pokemon pokemon={this.state.pokemon} Reload={this.componentDidMount}></Pokemon>
            </div>
        );
    }
}