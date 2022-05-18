const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('IT WORK', {layout: 'admin.handlebars' });
});

router.get('/create', (req, res)=>{
    res.render('admin/posts/create', {layout: 'admin.handlebars' });
})

router.post('/create', (req, res)=>{
    console.log(req.body);
    res.send('OK');
})

module.exports = router;