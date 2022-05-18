const express = require('express');
const router = express.Router();


router.get('/admin', (req,res,next)=>{
    res.app.locals.layout = 'admin.handlebars'; 
    next();
})

router.get('/', (req, res)=>{
    res.render('admin/index');
});

router.get('/dashboard', (req, res)=>{
    res.render('admin/dashboard');
});

module.exports = router;