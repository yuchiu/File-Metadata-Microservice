const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config/config')
const routes = require('./routes/')
const fileUpload = require('express-fileupload');

const app = express()
app
    .set("views", __dirname + "/views")
    .set("view engine", "hjs")
    .use(bodyParser.json())
    .use(cors())
    .use(fileUpload());
    
routes(app)

app.listen(config.port)