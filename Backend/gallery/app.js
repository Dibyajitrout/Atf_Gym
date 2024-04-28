const express = require("express");
const app = express();
const port = process.env.PORT || 6001;
require("./conn");
const User = require("./gls");
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.post("/insert", async(req,res)=>{
    let data = new User(req.body);
    const result = await data.save()
    res.send(result)
});
app.get("/view", async(req,res)=>{
    let data = await User.find();
    res.send(data);
})

app.listen(port,()=>{
    console.log(`server running at ${port}`);
})