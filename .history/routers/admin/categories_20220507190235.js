var express = require('express');
var router = express.Router();
const faker = require('faker');
const Category = require('../../models/Category');

// Đổ dữ liệu từ db ra 

router.get('/', (req, res)=>{
    Category.find({}).lean()
    // execute query
    .exec(function(error, categories) {
        console.log("Ok");
        res.render('admin/categories/index',{layout: 'admin.handlebars', categories: categories});
    });
});

// Thêm dữ liệu vào db
router.post('/create', (req, res)=>{
    const newCategory = Category({
        name: req.body.name
    });

    newCategory.save();
    res.redirect('/');
});

module.exports = router;