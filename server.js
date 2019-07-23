const express = require('express');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contacts');
const smsRouter = require ('./routes/sms');

require('dotenv').config();
const app= express();
const PORT = process.env.PORT || 5000;
const v1="/api/v1";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//routes
app.use(v1,contactRouter);
app.use(v1,smsRouter);
app.get('/',(req,res)=>{
    return res.status(200).send({"message":"Welcome"});
});

app.listen(PORT,()=>{
    console.log("server started: ",PORT);
});
