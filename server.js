const express = require('express');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contacts');
const smsRouter = require ('./routes/sms');
require('dotenv').config();
//swagger
const swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('./swagger.json');
swaggerDocument.host=process.env.HOST+'/api/v1';

const app= express();
const PORT = process.env.PORT;
const v1="/api/v1";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//cross origin
app.use( (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//routes
app.use(v1,contactRouter);
app.use(v1,smsRouter);
app.get('/',(req,res)=>{
    return res.status(200).send({"message":"Welcome"});
});

//set up swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT,()=>{
    console.log("server started: ",PORT);
});
