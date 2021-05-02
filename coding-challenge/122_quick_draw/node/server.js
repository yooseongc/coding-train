
const fs = require('fs');
const ndjson = require('ndjson');
const express = require('express');


const rainbowDrawings = [];
const catDrawings = [];
fs.createReadStream('rainbow.ndjson')
    .pipe(ndjson.parse())
    .on('data', obj => {
        rainbowDrawings.push(obj);
    });
fs.createReadStream('cat.ndjson')
    .pipe(ndjson.parse())
    .on('data', obj => {
        catDrawings.push(obj);
    });

const app = express();
const port = 5000;
app.use(express.static('public'));
app.get('/rainbow', (req, res) => {
    const idx = Math.floor(Math.random() * rainbowDrawings.length);
    res.send(rainbowDrawings[idx]);
});
app.get('/cat', (req, res) => {
    const idx = Math.floor(Math.random() * catDrawings.length);
    res.send(catDrawings[idx]);
});
app.listen(port, () => console.log(`Example app listening on port ${port}`));
