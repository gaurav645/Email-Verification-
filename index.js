const express = require('express');
const jwt = require('jsonwebtoken');
const app =express();

app.get('/',(req,res)=>{
    res.send(`<h1>HOMEPAGE</h1>`);
})


app.get('/mailer/:token',(req,res)=>{
    const {token} = req.params; 


    jwt.verify(token, "solutions", (err, data) => {
        if(!err){
            console.log("Email verification Successfull");
        }
        else{
            console.log("Email verification is failed ")
        }
    })

})




port = 4300;



app.listen(port,()=>{
    console.log('Server is running on 4300');
})