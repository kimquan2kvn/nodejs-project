const express = require('express');
const router = express.Router();
const post = require('../../models/post')
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }))
router.get('/', (req, res)=>{
    res.send('IT WORK', {layout: 'admin.handlebars' });
});

router.get('/create', (req, res)=>{
    res.render('admin/posts/create', {layout: 'admin.handlebars' });
})

router.post('/create',bodyParser.json(), (req, res)=>{

    // post({

    // })
  
    console.log(req.body);
})

module.exports = router;
