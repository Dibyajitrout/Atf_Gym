const express=require('express');
require('./msconn.js');
const blog=require('./sSchema.js');
const app = express();
const port = process.env.PORT || 5001;
const cors=require('cors');
app.use(cors());

app.use(express.json());

app.post("/insert",async (req,resp)=>{
    let data=new blog(req.body);
    const result=await data.save();
    resp.send(result);
});

app.get("/view",async (req,resp)=>{
    let data=await blog.find();
    resp.send(data);
});

app.get("/detail/:_id",async (req,resp)=>{
    let data=await blog.find({postid:req.params});
    resp.send(data);
});

app.put("/update/:_id",async (req,resp)=>{
    let data=await blog.updateOne(
        req.params, { $set: req.body});
    resp.send(data);
});


app.delete("/delete/:_id",async (req,resp)=>{
    let data=await blog.deleteOne(req.params);
    resp.send(data);
});

app.listen(port,()=>{
    console.log(`Port is running at ${port}`)
})