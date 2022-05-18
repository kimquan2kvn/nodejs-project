const express = require('express');
const router = express.Router();
const faker = require('faker');
const Post = require('../../models/post');
const {userAuthenticated} = require('../../helpers/authentication'); 
const Category = require('../../models/Category');
const Comment = require('../../models/Comment');

router.all('/*', userAuthenticated, (req, res, next)=>{
    // req.app.locals.layout='admin';
    next();
});

// router.all('/*', (req,res,next)=>{
//     res.app.locals.layout = 'admin.handlebars'; 
//     next();
// })

router.get('/', (req, res)=>{
    res.render('admin/index', {layout: 'admin.handlebars' });
});

router.get('/dashboard', (req, res)=>{
    res.render('admin/index', {layout: 'admin.handlebars' });
});

router.get('/', (req,res)=>{

    // const promises = [
    //     Post.count().exec(),
    //     Category.count().exec(),
    //     Comment.count().exec()
    // ];

    // Promise.all(promises).then(([postCount, categoryCount, commentCount])=>{
    //     console.log(postCount);
    //     console.log(categoryCount);
    //     console.log(commentCount);
    //     res.render('admin/index', {layout: 'admin.handlebars', postCount:postCount, categoryCount, commentCount});
    // })

    Post.countDocuments({}).exec().populate('category').then(postCount=>{
        alert(postCount);        
        // res.render('admin/index', {layout: 'admin.handlebars', postCount:postCount});
    })
});

router.post('/generate-fake-posts', (req, res)=>{
    for (let i=0;i<req.body.amount; i++){
        let post=new Post();
        post.title = faker.name.title();
        post.status = 'public';
        post.allowComments =  faker.random.boolean();
        post.body = faker.lorem.sentence();
        post.slug = faker.name.title();
        post.save();
    //     (function(err){
    //         if(err) throw err;
    //     });
        res.redirect('/admin/posts');
    }
});


module.exports = router;