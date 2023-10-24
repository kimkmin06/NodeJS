const express = require('express');

const router = express.Router();

const members = [
    { memberId:1, name:'ABC' },
    { memberId:2, name:'ABD' }
];

router.get('/', (req, res)=>{
    res.json(members);
});
router.get('/:id',(req,res)=>{
    console.log(req.params, ' ::: ', req.query);
    res.render('uploadok.html',{
        id:'잠이온다',
        query:'빨리 끝내고 싶다'
    });
})
module.exports = router;