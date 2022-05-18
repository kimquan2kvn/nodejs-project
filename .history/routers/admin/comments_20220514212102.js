const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Comment = require('../../models/Comment');

router.get('/',(req,res)=>{
    Comment.find({user: '62776217eb97b1b3c1a94255'}).lean().populate('user').
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

router.delete('/:id', (req, res)=>{
    Comment.remove({_id: req.params.id}).then(deleteItem=>{
        Post.findOneAndUpdate({comment: req.params.id}, {$pull: {comment: req.params.id}},(err,data)=>{
            if(err) console.log(err);
            res.redirect('/admin/comments');
        });
    });
});


// /approve-comment
router.post('/approve-comment', (req,res)=>{
    Comment.findByIdAndUpdate(req.body.id, {set: {approveComment: req.body.approveComment}}, (err, result)=>{
        console.log(req.body.id);
        console.log(req.body.approveComment);
        if(err) return err;
        res.send(result);
        Comment.save();
    })
})


module.exports = router;