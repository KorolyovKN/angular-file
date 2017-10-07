var express = require('express');
var router = express.Router();
var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('photo');

//GET home page.
 router.get('/', function (req, res, next) {
   // render the index page, and pass data to it.
   res.render('index', {title: 'Express'});
 });

 //our file upload function.
 router.post('/', function (req, res, next){
   var path = '';
   upload(req, res, function (err) {
     if (err) {
       // An error occurred when uploading
       console.log(err);
       return res.status(422).send("an Error occured");
     }
     // No error occured.
     path = req.file.path;
     return res.send("upload Completed for "+path);
   });
 })

 module.exports = router;