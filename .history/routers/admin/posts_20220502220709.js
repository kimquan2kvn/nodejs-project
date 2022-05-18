var express = require('express');
var router = express.Router();
const Post = require('../../models/post')

// router.get('/', (req, res)=>{
//     Post.find({}).then(posts =>{
//         res.render('admin/posts/index',{layout: 'admin.handlebars', posts: posts});
//     });
// });

// Tim du lieu
router.get('/', (req, res)=>{
    Post.find({}).lean()
    // execute query
    .exec(function(error, posts) {
        res.render('admin/posts/index',{layout: 'admin.handlebars', posts: posts});
    });
});

// Sua du lieu lay ve id can sua
router.get('/edit/:id', (req, res) => {
    res.render('admin/posts/edit',{layout: 'admin.handlebars' });
});
// Sua du lieu bang cach tim roi lay ve du lieu can sua dua vao id
router.get('/edit/:id', (req, res) => {
    Post.findOne({_id:})
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
        allowComments: allowComments,
        body: req.body.body,
    });

    newPost.save().then(savedPost => {
        res.redirect('/admin/posts');
        console.log("Saved");
    }).catch(error => {
        console.log('could not save post' + error);
    });
})

module.exports = router;
