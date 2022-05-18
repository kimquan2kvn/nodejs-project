const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('IT WORK');
});

router.get('/s/create', (req, res)=>{
    res.render('admin/posts/create');
})

module.exports = router;