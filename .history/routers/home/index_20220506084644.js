const express = require('express');
const router = express.Router();
const Post = require('../../models/post');

router.get('/', (req, res)=>{
    Post.find({})
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