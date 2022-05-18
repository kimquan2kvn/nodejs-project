const express = require('express');
const router = express.Router();
const post = require('../../models/post')

router.get('/', (req, res)=>{
    res.send('IT WORK', {layout: 'admin.handlebars' });
});

router.get('/create', (req, res)=>{
    res.render('admin/posts/create', {layout: 'admin.handlebars' });
})

router.post('/create', urlencodedParser, (req, res)=>{

    // post({

    // })
  
    console.log(req.body.allowComments);
})

module.exports = router;
