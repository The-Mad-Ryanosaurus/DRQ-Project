import React from "react";
import { PokemonItem } from './pokemonItem';

export class Pokemon extends React.Component {
    render() {
        return this.props.pokemon.map(
            (pokemon) => {
                return <PokemonItem pokemon={pokemon} key={pokemon._id} Reload={this.props.Reload}></PokemonItem>
            }
        );
    }
}