var express = require('express');
var router = express.Router();
const Post = require('../../models/post');
const Category = require('../../models/Category')
const { isEmpty, uploadDir } = require('../../helpers/upload-helper');
const fs = require('fs');
const path = require('path');
const {userAuthenticated} = require('../../helpers/authentication'); 

router.all('/*', userAuthenticated, (req, res, next)=>{
    // req.app.locals.layout='admin';
    next();
});

// var post = new Post(req.body);

// router.get('/', (req, res)=>{
//     Post.find({}).then(posts =>{
//         res.render('admin/posts/index',{layout: 'admin.handlebars', posts: posts});
//     });
// });

// Tim du lieu
router.get('/', (req, res)=>{
    Post.find({}).lean().populate('category')
    // execute query
    .exec(function(error, posts) {
        res.render('admin/posts/index',{layout: 'admin.handlebars', posts: posts});
    });
});

// Sua du lieu lay ve id can sua
// router.get('/edit/:id', (req, res) => {
//     res.render('admin/posts/edit',{layout: 'admin.handlebars' });
// });
//Sua du lieu bang cach tim roi lay ve du lieu can sua dua vao id
router.get('/edit/:id', (req, res) => {
    Post.findOne({_id:req.params.id}).lean().then(post=>{

        Category.find({}).lean().then(categories=>{
            res.render('admin/posts/edit', {layout: 'admin.handlebars', post:post, categories:categories});
        });
    });
});

// router.post('/edit',(req, res)=> {
//     res.send("OK");
// })

router.post('/edit/:id', (req, res)=>{
    var id2 = req.params.id;
    Post.findOne({_id:id2}).then(post=>{
        if(req.body.allowComments){
            allowComments=true;
        }else{
            allowComments=false;
        }

        post.user = req.user.id,
        post.title=req.body.title,
        post.status=req.body.status,
        post.allowComments=allowComments,
        post.body = req.body.body,
        post.category = req.body.category
        // post.file = filename
        


        console.log(post);
        post.save();
        req.flash('success_message','Sửa thành công');
        res.redirect('/admin/posts/my-posts');
    });
});


// router.get('/edit/:idcanxoa', function(req, res, next) {
//     var id2 = req.params.idcanxoa;
//     console.log(id2);
//     Post.findOne({_id:id2},function(err,dulieu) {
//         res.render('admin/posts',{layout: 'admin.handlebars', post:dulieu });
//     })
// });

// Xóa dữ liệu
router.delete('/:id', function(req, res, next) {
    var id2 = req.params.id;
    Post.findOne({_id:id2}).populate('comment').then(post=>{
        fs.unlink(uploadDir + post.file, (err)=>{
            // Xoá bài viết có comment
            if(!post.comment.length < 1){
                post.comment.forEach(comments=>{
                    comments.remove();
                })
                post.remove();
            }

            post.remove();
            req.flash('success_message','Xóa thành công');
            res.redirect('/admin/posts/my-posts');
        })
    })
    
    // Post.findByIdAndRemove(id2).exec();
    // res.redirect('/admin/posts');
});

//My post cua nguoi dung da dang nhap
router.get('/my-posts', (req,res)=>{
    var id1 = Post.user
    Post.find({id1: req.user.id}).lean().populate('category')
    // execute query
    .exec((error, posts)=>{
        if(error) console.log(error)
        res.render('admin/posts/my-posts',{layout: 'admin.handlebars', posts: posts});
    });
})



// Thêm dữ liệu
router.get('/create', (req, res)=>{
    Category.find({}).lean().then(categories=>{
        res.render('admin/posts/create', {layout: 'admin.handlebars', categories:categories});
    });
})

router.post('/create', (req, res)=>{
    if(!isEmpty(req.files)){
        let file = req.files.file;
        filename = Date.now() + file.name;
        file.mv('./public/uploads/'+ filename, (err)=>{
            if(err) throw err;
        });
        console.log("is not empty");
    }else {
        console.log('is empty');
    }


    let errors=[];
    if(!req.body.title){
        errors.push({message: 'Please addatitle'});
    }
    if(!req.body.title){
        errors.push({message: 'Please addatitle'});
    }
    if(errors.length>0){
        res.render('admin/posts/create',{
            errors: errors
        })
    }

    // let filename = 'mo-hinh-osi-1.png';

    // console.log(req.files);

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
        category: req.body.category,
        file: filename
    });



    newPost.save().then(savedPost => {
        res.redirect('/admin/posts');
        console.log("Saved");
    }).catch(error => {
        console.log('could not save post' + error);
        });
    });


module.exports = router;
