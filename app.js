const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/scala',(req,res)=>{
    res.render('scala');
});

app.get('/angular',(req,res) =>{
  res.render('materials/angular');
});

app.get('/android',(req,res) =>{
  res.render('materials/android');
});

app.get('/bootstrap',(req,res) =>{
  res.render('materials/bootstrap');
});

app.get('/c',(req,res) =>{
  res.render('materials/c');
});

app.get('/csharp',(req,res) =>{
  res.render('materials/c#');
});

app.get('/datastructure',(req,res) =>{
  res.render('materials/datastructure');
});

app.get('/datastructure',(req,res) =>{
  res.render('materials/datastructure');
});

app.get('/deeplearning',(req,res) =>{
  res.render('materials/deeplearning');
});

app.get('/django',(req,res) =>{
  res.render('materials/django');
});

app.get('/git',(req,res) =>{
  res.render('materials/git');
});

app.get('/go',(req,res) =>{
  res.render('materials/go');
});

app.get('/htmlcss',(req,res) =>{
  res.render('materials/htmlcss');
});

app.get('/machinelearning',(req,res) =>{
  res.render('materials/machinelearing');
});

app.get('/matlab',(req,res) =>{
  res.render('materials/matlab');
});

app.get('/mongodb',(req,res) =>{
  res.render('materials/mongodb');
});

app.get('/nodejs',(req,res) =>{
  res.render('materials/nodejs');
});

app.get('/python',(req,res) =>{
  res.render('materials/python');
});

app.get('/react',(req,res) =>{
  res.render('materials/react');
});

app.get('/rlanguage',(req,res) =>{
  res.render('materials/rlanguage');
});

app.get('/ruby',(req,res) =>{
  res.render('materials/ruby');
});

app.get('/webaccessiblity',(req,res) =>{
  res.render('materials/webaccessiblity');
});

app.listen(3000,function(){
    console.log("running at port 3000");
});