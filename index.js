const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
    res.json("i am get api")
})

app.get("/info", (req, res) => {
    res.json("info file")
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("running on " + port);
})