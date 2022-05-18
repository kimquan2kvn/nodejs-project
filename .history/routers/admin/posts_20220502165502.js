var express = require('express');
var router = express.Router();
const Post = require('../../models/post')

router.get('/', (req, res)=>{
    res.send('IT WORK', {layout: 'admin.handlebars' });
});

router.get('/create', (req, res)=>{
    res.render('admin/posts/create', {layout: 'admin.handlebars' });
})

router.post('/create', (req, res)=>{

    let allowComments = true;
    if (req.body.allowComments) {
        allowComments = true;
    } else {
        allowComments = false;
    }

    const newPost = Post({
        title: req.body.title,
        status: req.body.status,
        allowComments: req.body.allowComments,
        body: req.body.body
    });

    newPost.save() {
        res.redirect('/admin/posts');
    }).catch(error => {
            console.log('could not save post');
    });
})

module.exports = router;
