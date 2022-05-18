const express = require('express');
const router = express.Router();


router.all('/*', (req,res,next)=>{
    res.app.lc
})

router.get('/admin', (req, res)=>{
    res.render('admin/index');
});

module.exports = router;