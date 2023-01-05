import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePokemonName = this.onChangePokemonName.bind(this);
        this.onChangePokemonImg = this.onChangePokemonImg.bind(this);
        this.onChangePokemonType = this.onChangePokemonType.bind(this);

        this.state = {
            pName: '',
            pImg: '',
            pType: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.pName},
        ${this.state.cover},
        ${this.state.author}`);

        const pokemon = {
            pName: this.state.pName,
            pImg: this.state.pImg,
            pType: this.state.pType
        }

        axios.post('http://localhost:4000/api/pokemon', pokemon)
            .then()
            .catch();

        this.setState({
            pName: '',
            pImg: '',
            pType: ''
        })
    }

    onChangePokemonName(e) {
        this.setState({
            pName: e.target.value
        })
    }
    onChangePokemonImg(e) {
        this.setState({
            pImg: e.target.value
        })
    }
    onChangePokemonType(e) {
        this.setState({
            pType: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Add Pokemon to PokeDex!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Pokemon Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.pName}
                            onChange={this.onChangePokemonName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Pokemon Img: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.pImg}
                            onChange={this.onChangePokemonImg}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Pokemon Type: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.pType}
                            onChange={this.onChangePokemonType}
                        />
                    </div>
                    <br>
                    </br>
                    <input type="submit" value="Add Pokemon" />
                </form>
            </div>
        );
    }
}