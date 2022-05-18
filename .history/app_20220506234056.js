const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const upload = require('express-fileupload');
const session = require('express-session');
const flash = require('connect-flash');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/cms',).then(err =>{});
mongoose.connection
    .once('open', ()=>console.log('CONNECTED'))
    .on('error', (err)=>{
        console.log(`could not connect`, err)
    });

app.use(express.static(path.join(__dirname, 'public')));
const {select} = require('./helpers/handlebars-helpers');
const {generateTime} = require('./helpers/handlebars-helpers');

var expHbs = require('express-handlebars');
var handlebars = expHbs.create({
    defaultLayout: 'home.handlebars',
    helpers: {generateTime: generateTime},
    extname: '.handlebars',
});



// Set View Engine

app.engine('.handlebars', handlebars.engine);
app.set('view engine', '.handlebars');

// Upload Middlware
app.use(upload());

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}))

// Method Override
app.use(methodOverride('_method'));

// Session
app.use(session({
    secret: 'kimquan2000vn',
    resave: true,
    saveUninitialized: true
}))
app.use(flash());

// Load Routers
const home = require('./routers/home/index.js');
const admin = require('./routers/admin/index.js');
const posts = require('./routers/admin/posts.js');
const categories = require('./routers/admin/categories.js');


const { helpers } = require('handlebars');
//Use routers
app.use('/', home);
app.use('/admin', admin);
app.use('/admin/posts', posts);
app.use('/admin/categories', categories);

app.listen(4500, ()=>{
    console.log(`Listening on port 4500`);
});