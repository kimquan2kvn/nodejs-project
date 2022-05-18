const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('IT WORK', {layout: 'admin.handlebars' });
});


module.exports = router;