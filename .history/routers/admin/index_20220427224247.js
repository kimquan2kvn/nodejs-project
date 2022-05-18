const express = require('express');
const router = express.Router();


router.all('/ad', (req,res,next)=>{
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