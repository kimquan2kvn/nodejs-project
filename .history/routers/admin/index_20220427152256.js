const express = require('express');
const router = express.Router();


router.all('/*', (req,res,next)=>{
    
})

router.get('/admin', (req, res)=>{
    res.render('admin/index');
});

module.exports = router;