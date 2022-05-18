const express = require('express');
const router = express.Router();


router.all('/', (req,res,next)=>{
    res.app.locals.layout = 'admin.handlebars'; 
    next();
})

router.get('/', (req, res)=>{
    res.render('admin/index', { title: 'my other page', layout: 'other' });
    res.render('');
});

router.get('/dashboard', (req, res)=>{
    res.render('admin/dashboard');
});

module.exports = router;