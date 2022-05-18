const express = require('express');
const router = express.r


app.get('/', (req, res)=>{
    res.render('home/index');
});

app.get('/about', (req, res)=>{
    res.render('home/about');
});

app.get('/login', (req, res)=>{
    res.render('home/login');
});

app.get('/register', (req, res)=>{
    res.render('home/register');
});
 