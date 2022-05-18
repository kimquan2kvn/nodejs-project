const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('IT WORK');
});

router.get('/admin/post')

module.exports = router;