const express = require('express');
const router = express.Router();
const post = require('../../models/post')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
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
