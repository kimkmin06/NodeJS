const express = require("express");
const router = express.Router();

const students = ['kang', 'kim', 'park', 'moon'];

router.get("/", (req, res) => {
  //https://localhost:3001/student?search=0&name=kang
  console.log('search : ' + req.query.search + ", name : " + req.query.name);
  console.log("search : " + typeof(parseInt(req.query.search)) + ", name : " + req.query.name);
  res.send("Student OK...");
});

router.get('/:idx', (req, res) => {
  let index = req.params.idx;
  // res.send('Student[' + index + '] = ' + students[index]);

  // let name = students[index];
  res.render('student', { students });
});

module.exports = router;
