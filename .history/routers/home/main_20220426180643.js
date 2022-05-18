const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('home/index');
});

router.get('/about', (req, res)=>{
    res.render('home/about');
});

app.get('/login', (req, res)=>{
    res.render('home/login');
});

app.get('/register', (req, res)=>{
    res.render('home/register');
});
 
module.exports = router;