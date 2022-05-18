const express = require('express');
const router = express.Router();
const post = require('../../models')

router.get('/', (req, res)=>{
    res.send('IT WORK', {layout: 'admin.handlebars' });
});

router.get('/create', (req, res)=>{
    res.render('admin/posts/create', {layout: 'admin.handlebars' });
})

router.post('/create', (req, res)=>{
    console.log(req.body);
})

module.exports = router;