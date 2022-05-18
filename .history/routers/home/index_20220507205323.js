const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Category = require('../../models/Category');
router.get('/', (req, res)=>{
    Post.find({}).lean().then(posts =>{
        res.render('home/index', {posts: posts});
    })
});

router.get('/about', (req, res)=>{
    res.render('home/about');
});

router.get('/login', (req, res)=>{
    res.render('home/login');
});

router.get('/register', (req, res)=>{
    res.render('home/register');
});


router.get('/post/:id', (req, res)=>{
    Post.findOne({_id:req.params.id}).lean().then(post=>{
        Category.find({}).then(categories=>{
            console.log(object);
            res.render('home/post', {post:post, categories:categories});
        });
    });
});



module.exports = router;