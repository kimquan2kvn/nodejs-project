const express = require('express');
const rou


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
 