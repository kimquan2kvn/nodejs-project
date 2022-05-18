const express = require('express');
const router = express.Router();


router.all('/', (req,res,next)=>{
    res.app.locals.layout = 'admin.handlebars'; 
    next();
})

router.get('/', (req, res)=>{
    res.render('view', { title: 'my other page', layout: 'other' });
    res.render('admin/index');
});

router.get('/dashboard', (req, res)=>{
    res.render('admin/dashboard');
});

module.exports = router;