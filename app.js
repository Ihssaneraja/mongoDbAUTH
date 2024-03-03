require('dotenv').config();

 const mongoose = require('mongoose');



 mongoose.connect('mongodb+srv://contactihssan:N5tjUBiNmqwrSFTV@db.bt5qjxr.mongodb.net/?retryWrites=true&w=majority&appName=Time');

 const app = require('express')();

 const http = require('http').Server(app);

  const userRoute = require('./routes/userRoute');

  app.use('/',userRoute);





 http.listen(8000,function(){

    console.log('server is runnig ')
 })