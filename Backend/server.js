const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.ppyoejt.mongodb.net/?retryWrites=true&w=majority');
}

const pokemonSchema = new mongoose.Schema({
    pName: String,
    pImg: String,
    pType: String
});

const pokemonModel = mongoose.model('pokemoncollections', pokemonSchema);

app.post('/api/pokemon', (req, res) => {
    console.log(req.body);

    pokemonModel.create({
        pName: req.body.pName,
        pImg: req.body.pImg,
        pType: req.body.pType,
    })

    res.send('Data Recieved');
})

app.get('/api/pokemon', (req, res) => {
    pokemonModel.find((error, data) => {
        res.json(data);
    })
})

app.get('/api/pokemon/:id', (req, res) => {
    console.log(req.params.id);
    pokemonModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.put('/api/pokemon/:id', (req, res) => {
    console.log("Update: " + req.params.id);

    pokemonModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, data) => {
            res.send(data);
        })
})

app.delete('/api/pokemon/:id', (req, res) => {
    console.log('Deleting: ' + req.params.id);
    pokemonModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
        res.send(data);
    })
})

//Search Function
app.get('/api/pokemon/types/:type', (req, res) => {
    console.log(req.params.type);
    pokemonModel.find({ "pType": req.params.type }, (error, data) => {
        res.json(data);
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});