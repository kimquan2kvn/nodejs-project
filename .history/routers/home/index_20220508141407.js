const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Category = require('../../models/Category');
const User = require('../../models/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Strategy là chiến lược xác thực yêu cầu 1 hàm verify callback

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

// APP login
router.post('/login', (req, res,next)=>{
    passport.authenticate('local', { 
        successRedirect: '/admin',
        failureRedirect: '/login',
        failureFlash: true}),()

    res.render('home/login');
});

router.get('/register', (req, res)=>{
    res.render('home/register');
});

router.post('/register', (req, res)=>{

    let errors = [];

    // const newUser = new User({
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     email: req.body.email,
    //     password: req.body.password,
    // });
    
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
        errors.push({message: 'Please enter a password'});
    }
    if(!req.body.passwordConfirm){
        errors.push({message: 'This field cannot be blank'});
    }
    if(req.body.password !== req.body.passwordConfirm){
        errors.push({message: 'Password fields dont match'});
    }
    if(errors.length>0){
        res.render('home/register',{
            errors: errors
        })
    }else{

        User.findOne({email:req.body.email}).then(user=>{
            if(!user){
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                });
        
                // hash password
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(newUser.password, salt, function(err, hash) {
                        newUser.password = hash;
                        newUser.save();
                        req.flash('success_message', 'Đăng ký thành công, hãy đăng nhập');
        
                        res.redirect('/login');
                    });
                });
            }else{
                req.flash('error_message', 'Email đã tồn tại!');
                res.redirect('/register');
            }
        })



        // 
    }
});


router.get('/post/:id', (req, res)=>{
    Post.findOne({_id:req.params.id}).lean().then(post=>{
        Category.find({}).lean().then(categories=>{
            res.render('home/post', {post:post, categories:categories});
        });
    });
});



module.exports = router;