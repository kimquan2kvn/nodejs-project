const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Comment = require('../../models/Comment');


// Comments
router.post('/', (req,res)=>{
    console.log(req.b);
    Post.findOne({_id: req.body.id}).then(post=>{
        console.log(post);
        const newComment = new Comment({
            user: req.user.id,
            body: req.body.body
        })

        post.comments.push(newComment);
        post.save();
        res.redirect(`/post/${post.id}`);  
    })
});

module.exports = router;