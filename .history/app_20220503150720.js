const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// mongoose.Promise = global.Promise;


mongoose.connect('mongodb://127.0.0.1:27017/cms',).then(err =>{});
mongoose.connection
    .once('open', ()=>console.log('CONNECTED'))
    .on('error', (err)=>{
        console.log(`could not connect`, err)
    });

app.use(express.static(path.join(__dirname, 'public')));

var expHbs = require('express-handlebars');
var handlebars = expHbs.create({
    defaultLayout: 'home.handlebars',
    helpers: {select:select},
    extname: '.handlebars',
});
// Set View Engine
const {select} = require('./helpers/handlebars-helpers');

app.engine('.handlebars', handlebars.engine);
app.set('view engine', '.handlebars');


// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Load Routers
const home = require('./routers/home/index.js')
const admin = require('./routers/admin/index.js')
const posts = require('./routers/admin/posts.js');
const { helpers } = require('handlebars');
//Use routers
app.use('/', home);
app.use('/admin', admin);
app.use('/admin/posts', posts);


app.listen(4500, ()=>{
    console.log(`Listening on port 4500`);
});