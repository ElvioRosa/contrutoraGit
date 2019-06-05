// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
//let dev_db_url = 'mongodb://ska:6SdU2JkWuAmZrtP@ds151076.mlab.com:51076/ska';
let dev_db_url = 'mongodb://localhost:27017/tgb';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const projeto = require('./routes/projeto.route');
const obra = require('./routes/obra.route');
const relatorio = require('./routes/ralatorio.route');

app.use('/projetos', projeto);
app.use('/obras', obra);
app.use('/relatorios', relatorio);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});