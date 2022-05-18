const express = require('express');
const router = express.Router();


// router.all('/', (req,res,next)=>{
//     res.app.locals.layout = 'admin.handlebars'; 
//     next();
// })

router.get('/', (req, res)=>{
    res.render('admin/index', { title: 'my other page', layout: 'admin.handlebars' });
    res.render('');
});

router.get('/dashboard', (req, res)=>{
    res.render('admin/dashboard');
});

module.exports = router;