var express = require('express');
var router = express.Router();
const faker = require('faker');
const Category = require('../../models/Category');

router.get('/', (req, res)=>{
    res.render('admin/categories/index',  {layout: 'admin.handlebars' } );
});

// Đổ dữ liệu từ db ra 

router.get('/', (req, res)=>{
    Category.find({}).lean()
    // execute query
    .exec(function(error, cav) {
        res.render('admin/posts/index',{layout: 'admin.handlebars', posts: posts});
    });
});

// Thêm dữ liệu vào db
router.post('/create', (req, res)=>{
    const newCategory = Category({
        name: req.body.name
    });

    newCategory.save();
    res.render('admin/categories/index',  {layout: 'admin.handlebars' } );
});

module.exports = router;