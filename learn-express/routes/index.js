const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');
const fs = require('fs');

const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads/');
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            done(null,path.basename(file.originalname,ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize: 5*1024*1024},
});

try{
    fs.readdirSync('uploads');
}catch(err){
    console.log('make upload folder!!');
    fs.mkdirSync('uploads');
}
router.post('/upload', upload.single('image'), (req,res)=>{
    console.log(req.file, req.body);
    res.send('ok');
})
router.get('/', (req, res)=>{
    res.json({message:'Hello'});
});
router.get('/upload',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'..','multipart.html'));
})


module.exports = router;