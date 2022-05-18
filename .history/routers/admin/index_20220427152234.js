const express = require('express');
const router = express.Router();


router.all

router.get('/admin', (req, res)=>{
    res.render('admin/index');
});

module.exports = router;