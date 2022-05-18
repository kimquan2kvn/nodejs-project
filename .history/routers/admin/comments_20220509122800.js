const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Comment = require('../../models/Comment');

router.post('/', (req,res)=>{
    res.send('it works');
})

module.exports = router;