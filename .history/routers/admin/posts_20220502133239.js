const express = require('express');
const router = express.Router();
const post = require('../../models/post')


const a = express();
const bodyParser = require('body-parser');
a.use(bodyParser.json());
a.use(bodyParser.urlencoded({ extended: true }))
router.get('/', (req, res)=>{
    res.send('IT WORK', {layout: 'admin.handlebars' });
});

router.get('/create', (req, res)=>{
    res.render('admin/posts/create', {layout: 'admin.handlebars' });
})

router.post('/create', jsonParser, (req, res)=>{

    const obj = JSON.parse(JSON.stringify(req.body))
  
    console.log(obj);
})

module.exports = router;
