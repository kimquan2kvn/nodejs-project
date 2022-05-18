const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('IT WORK');
});

router.get('/r')

module.exports = router;