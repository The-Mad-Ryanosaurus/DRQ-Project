import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class PokemonItem extends React.Component {
    constructor() {
        super();
        this.DeletePokemon = this.DeletePokemon.bind(this);
    }
    DeletePokemon(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/pokemon/' + this.props.pokemon._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.pokemon.pName}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.pokemon.pImg}></img>
                            <footer >
                                {this.props.pokemon.pType}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.pokemon._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeletePokemon}>Delete</Button>
                </Card>
            </div>
        );
    }
}