var express = require('express');
var router = express.Router();
const faker = require('faker');
const Category = require('../../models/Category');

router.get('/', (req, res)=>{
    res.render('admin/categories/index',  {layout: 'admin.handlebars' } );
});

module.exports = router;