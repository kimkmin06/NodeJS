const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/',async (req,res,next) =>{
    try {
    const users = await User.findAll();
    /*const user = await User.create({
        name: 'kim',
        age: '53',
        married: 0,
      });
      */
    res.json(user);
    } catch(err){
        console.log(err);
        next(err);
    }
});
module.exports=router;
