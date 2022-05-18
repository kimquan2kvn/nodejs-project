const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Comment = require('../../models/Comment');

router.get('/',(req,res)=>{
    Comment.find({}).lean().populate('user')
    then(comments=>{
        res.render('admin/comments', {layout: 'admin.handlebars', comments:comments});
    })
    
})


// Comments
router.post('/', (req,res)=>{
    console.log(req.body.id);
    Post.findOne({_id: req.body.id}).then(post=>{
        console.log(post);
        const newComment = new Comment({
            user: req.user.id,
            body: req.body.body
        })

        post.comment.push(newComment);
        post.save();
        newComment.save();
        res.redirect(`/post/${post.id}`);  
    })
});

module.exports = router;