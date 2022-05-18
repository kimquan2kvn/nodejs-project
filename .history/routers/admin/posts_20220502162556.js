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

    const obj =req.body.allowComments;
  
    console.log(obj);
    res.send({ status: SUCCESS });
})

module.exports = router;
