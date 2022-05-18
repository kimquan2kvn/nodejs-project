const express = require('express');
const router = express.Router();
const faker = require('faker');
const Post = require('../../models/post');
const {userAuthenticated} = require('../../helpers/authentication'); 

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

router.get('/, (req,ré)

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