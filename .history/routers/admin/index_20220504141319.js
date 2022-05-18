const express = require('express');
const router = express.Router();
const faker = require('faker');
const Post = require('../../models/post');

// router.all('/*', (req,res,next)=>{
//     res.app.locals.layout = 'admin.handlebars'; 
//     next();
// })

router.get('/', (req, res)=>{
    res.render('admin/index', {layout: 'admin.handlebars' });
});

router.get('/dashboard', (req, res)=>{
    res.render('admin/dashboard', {layout: 'admin.handlebars' });
});

router.post('/generate-fake-posts', (req, res)=>{
    for (let i=0;i<req.body.amount; i++){
        let post=new Post();
        post.title=faker.date.past()
        post.status = faker;
        post.body = faker;
        post.allowComments = true;
    }
});


module.exports = router;