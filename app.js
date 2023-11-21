const express = require('express');
const adminRoutes = require('./routes/admin')
const cors = require('cors')
const Sequelize = require('sequelize');
const sequelize = require('./util/database')
// const path = require('path');
// const fs = require('fs')

const bodyParser = require('body-parser')
const port  = 1300;

const app = express();
app.use(cors());
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
app.use(adminRoutes);
sequelize
.sync({force:true})
.then(result=>{
    app.listen(port,()=>{
        console.log('port is running at,',port)
    })
})



