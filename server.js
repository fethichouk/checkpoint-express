const express = require('express');
const Route= require('./routes/routes')


const app= express();


require('dotenv').config();

app.use(express.json());
app.use('/',Route)

const PORT= process.env.PORT || 4000




app.listen(PORT,(err)=>{
if(err) throw console.error(err)
console.log('Listen to Port'+PORT)
})

