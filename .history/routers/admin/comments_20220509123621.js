const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Comment = require('../../models/Comment');

router.post('/', (req,res)=>{
    Post.findOne({id: req.params.id}).then(post)
})

module.exports = router;