const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var expHbs = require('express-handlebars');
var handlebars = expHbs.create({
    defaultLayout: 'home',
    extname: '.handlebars',
});

app.engine('.handlebars', handlebars.engine);
app.set('view engine', '.handlebars');

const main = require('./routers/home/index.js')

const main = require('./routers/admin/main.js')

app.use('/', main);


app.listen(4500, ()=>{
    console.log(`Listening on port 4500`);
});