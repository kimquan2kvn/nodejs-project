const express = require('express');
const router = express.Router();
const Post = require('../../')

// router.all('/*', (req,res,next)=>{
//     res.app.locals.layout = 'admin.handlebars'; 
//     next();
// })

router.get('/', (req, res)=>{
    res.render('admin/index', {layout: 'admin.handlebars' });
});

router.get('/dashboard', (req, res)=>{
    res.render('admin/dashboard', {layout: 'admin.handlebars' });
});



module.exports = router;