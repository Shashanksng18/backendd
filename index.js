const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

const employee = [
    {
        name: "emp1"
    },
    {
        name: "emp2"
    },
    {
        name: "emp3"
    },
    {
        name: "emp3"
    }
]
app.get("/", (req, res) => {
    res.json("i am get api")
})

app.get("/info", (req, res) => {
    res.json("info file")
})

app.get("/emp", (req, res) => {
    res.status(200).json(employee)
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("running on " + port);
})