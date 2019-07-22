import express from 'express';
import contactRouter from './routes/contacts';
import smsRouter from './routes/sms';

require('dotenv').config();
const app= express();
const {PORT} = process.env.PORT;
const v1="/api/v1";

app.use(v1,contactRouter);
app.use(v1,smsRouter);

app.listen(PORT||8000,()=>{
    console.log("server started");
});
