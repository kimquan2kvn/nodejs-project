const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('IT WORK');
});

router.get('/admin/posts/create', (req, res)=>{
    res.send()
})

module.exports = router;