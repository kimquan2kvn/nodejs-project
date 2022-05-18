var express = require('express');
var router = express.Router();
const Post = require('../../models/post');
const Category = require('../../models/Category')
const { isEmpty, uploadDir } = require('../../helpers/upload-helper');
const fs = require('fs');
const path = require('path');
// var post = new Post(req.body);

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
// router.get('/edit/:id', (req, res) => {
//     res.render('admin/posts/edit',{layout: 'admin.handlebars' });
// });
//Sua du lieu bang cach tim roi lay ve du lieu can sua dua vao id
router.get('/edit/:id', (req, res) => {
    Post.findOne({_id:req.params.id}).lean().then(post=>{
        res.render('admin/posts/edit',{layout: 'admin.handlebars', post:post });
    });
});

// router.post('/edit',(req, res)=> {
//     res.send("OK");
// })

router.post('/edit/:id', (req, res)=>{
    var id2 = req.params.id;
    Post.findOne({_id:id2}).then(post=>{
        console.log(req.params.id);
        if(req.body.allowComments){
            allowComments=true;
        }else{
            allowComments=false;
        }
        
        post.title=req.body.title,
        post.status=req.body.status,
        post.allowComments=allowComments,
        post.body = req.body.body
        console.log(post);
        post.save();
        res.redirect('/admin/posts');
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
    Post.findOne({_id:id2}).then(post=>{
        fs.unlink(uploadDir + post.file, (err)=>{
            post.remove();
            // req.flash('success_message','Post was successfully deleted');
            res.redirect('/admin/posts');
        })
    })
    
    // Post.findByIdAndRemove(id2).exec();
    // res.redirect('/admin/posts');
});
  

// Thêm dữ liệu
router.get('/create', (req, res)=>{
    res.render('admin/posts/create', {layout: 'admin.handlebars' });
})

router.post('/create', (req, res)=>{
    let errors=[];
    if(!req.body.title){
        errors.push({message: 'Please addatitle'});
    }
    if(!req.body.status){
        errors.push({message: 'Please addastatus'});
    }
    if(!req.body.title){
        errors.push({message: 'Please addatitle'});
    }
    if(errors.length>0){
        res.render('admin/posts/create',{
            errors: errors
        })
    }
    else {

    let filename = 'mo-hinh-osi-1.png';

    if(!isEmpty(req.files)){
        let file = req.files.file;
        let filename = Date.now() + file.name;
        file.mv('./public/uploads/'+ filename, (err)=>{
            if(err) throw err;
        });
        console.log("is not empty");
    }else {
        console.log('is empty');
    }
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
