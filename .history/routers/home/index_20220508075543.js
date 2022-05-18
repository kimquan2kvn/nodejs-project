const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Category = require('../../models/Category');
const User = require('../../models/User');

router.get('/', (req, res)=>{
    Post.find({}).lean().then(posts =>{
        Category.find({}).lean().then(categories=>{
            res.render('home/index', {posts:posts, categories:categories});
        });
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

router.post('/register', (req, res)=>{

    let errors = [];

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    });
    
    if(!req.body.firstName){
        errors.push({message: 'Please add a firstName'});
    }
    if(!req.body.lastName){
        errors.push({message: 'Please add a lastName'});
    }
    if(!req.body.email){
        errors.push({message: 'Please add an email'});
    }
    if(!req.body.password){
        errors.push({message: 'Please addatitle'});
    }
    if(errors.length>0){
        res.render('admin/posts/create',{
            errors: errors
        })
    }

    res.render('home/register');
});


router.get('/post/:id', (req, res)=>{
    Post.findOne({_id:req.params.id}).lean().then(post=>{
        Category.find({}).lean().then(categories=>{
            res.render('home/post', {post:post, categories:categories});
        });
    });
});



module.exports = router;