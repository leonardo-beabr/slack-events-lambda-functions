const serverless = require('serverless-http')
const express = require('express');

const cors = require('cors');
const helmet = require('helmet')
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())
app.use((req, res, next)=>{
    next()
})
app.use(require('./routes'))

module.exports.handler = serverless(app)