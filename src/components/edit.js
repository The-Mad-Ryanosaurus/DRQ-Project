import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit() {
    let { id } = useParams();
    const [pName, setpName] = useState('');
    const [pImg, setpImg] = useState('');
    const [pType, setpType] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/api/pokemon/' + id)
            .then((response) => {
                setpName(response.data.pName);
                setpImg(response.data.pImg);
                setpType(response.data.pType);
            })
            .catch()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const editPokemon = {
            pName: pName,
            pImg: pImg,
            pType: pType
        }

        axios.put('http://localhost:4000/api/pokemon/' + id, editPokemon)
            .then()
            .catch();
    }

    return (
        <div>
            <h3>Edit Pokemon Entry</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Pokemon Name: </label>
                    <input type="text"
                        className="form-control"
                        value={pName}
                        onChange={(e) => { setpName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Pokemon Img: </label>
                    <input type="text"
                        className="form-control"
                        value={pImg}
                        onChange={(e) => { setpImg(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Pokemon Type: </label>
                    <br>
                    </br>
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
                </div>
                <br>
                </br>
                <br>
                </br>
                <input type="submit" value="Edit Pokemon"></input>
            </form>
        </div>
    );
}