const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Category = require('../../models/Category');
const User = require('../../models/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Strategy là chiến lược xác thực yêu cầu 1 hàm verify callback

router.get('/?page=1', (req, res)=>{

    const perPage = 10;
    const page = req.query.page || 1;

    Post.find({}).lean()
    .skip((perPage*page) - perPage)
    .then(posts =>{

        Post.
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

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});


// APP login xac thuc yeu cau

passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done)=>{
    User.findOne({email: email}).then(user=>{
        if(!user) return done(null, false, {message: 'No user found'});
        bcrypt.compare(password, user.password, (err, matched)=>{
            if(err) return err;
            if(matched){
                console.log(user.lastName);
                return done(null,user)
            } else {
                return done(null, false,{message: 'Incorrect password.'});
            }
        });
    });
}));

//Passport serialize fix Error: Failed to serialize user into session

passport.serializeUser( function(user, done){
    done(null, user.id);
});
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

router.post('/login', (req, res,next)=>{
    passport.authenticate('local', { 
        successRedirect: '/admin',
        failureRedirect: '/login',
        failureFlash: true})(req,res,next);
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
    Post.findOne({_id:req.params.id}).lean().populate({path: 'comment', populate: {path: 'user', model: 'users'}}).populate('user').then(post=>{
        console.log(post);
        console.log(post.user);
        Category.find({}).lean().then(categories=>{
            res.render('home/post', {post:post, categories:categories});
        });
    });
});



module.exports = router;