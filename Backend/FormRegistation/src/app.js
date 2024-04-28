



const express = require("express");
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;
require("./db/conn.js");
const User = require("./models/mens.js");
app.use(cors());
app.use(express.json());


app.post('/form', async(req,res)=>{
    const use = User(req.body);
    const result = await use.save();
    res.send(result);
})
app.listen(port , ()=>{
    console.log(`your port is running at ${port}`)
})