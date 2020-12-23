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

app.listen(3000,function(){
    console.log("running at port 3000");
});