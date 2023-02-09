const express = require("express");
const app = express();
const port = 8000;
const Database = require('./database.js');
const db = new Database();

app.get("/", (req, res) => {
    db.getTop10Tracks().then((val) => {
        res.json(val);
    });
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
