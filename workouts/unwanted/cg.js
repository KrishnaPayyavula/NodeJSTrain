const bodyParser = require('body-parser');
const express=require('express');
const app = express();

app.post("/post",(req,res)=>{
    console.log('Request Details',req);
    res.send({
        message:"OK ! Data Saved",
        response:{
            body:""
        }
    })
})



app.listen(3001,(err,res)=>{
    console.log(`Server is listening on ${3000}`);
})