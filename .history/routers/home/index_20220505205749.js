const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('home/index');
});

router.get('/', (req, res)=>{
    req.session.kim= 'Kim Quan';
    if(req.session.edwin) {
        console.log('we found ${')
    }
});

router.get('/about', (req, res)=>{
    res.render('home/about');
});

router.get('/login', (req, res)=>{
    res.render('home/login');
});

router.get('/register', (req, res)=>{
    res.render('home/register');
});
 
module.exports = router;