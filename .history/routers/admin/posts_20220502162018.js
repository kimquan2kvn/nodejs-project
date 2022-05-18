const express = require('express');
const router = express.Router();
const post = require('../../models/post')

router.get('/', (req, res)=>{
    res.send('IT WORK', {layout: 'admin.handlebars' });
});

router.get('/create', (req, res)=>{
    res.render('admin/posts/create', {layout: 'admin.handlebars' });
})

router.post('/create', (req, res)=>{

    const obj = JSON.parse(JSON.stringify(req.body))
  
    console.log(obj);
})

module.exports = router;
