const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Comment = require('../../models/Comment');

router.post('/', (req,res)=>{
    Post.findOne({id: req.params.id}).then(post=>{
        const newComment = new Comment({
            user: req.user.id,
            body: req.body.body
        })

        post.comments.push(newComment);
        post.save
    })
})

module.exports = router;