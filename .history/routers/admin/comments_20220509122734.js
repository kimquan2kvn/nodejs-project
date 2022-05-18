const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
router.post('/', (req,res)=>{
    res.send('it works');
})

module.exports = router;