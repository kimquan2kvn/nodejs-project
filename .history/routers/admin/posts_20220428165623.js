const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('admin/index', {layout: 'admin.handlebars' });
});


module.exports = router;