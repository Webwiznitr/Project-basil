const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/frontend", (req, res) => {
  res.render("frontend");
});

app.get("/backend", (req, res) => {
  res.render("backend");
});

app.get("/angular", (req, res) => {
  res.render("materials/angular");
});

app.get("/android", (req, res) => {
  res.render("materials/android");
});

app.get("/bootstrap", (req, res) => {
  res.render("materials/bootstrap");
});

app.get("/c", (req, res) => {
  res.render("materials/c");
});

app.get("/cpp", (req, res) => {
  res.render("materials/cpp");
});

app.get("/csharp", (req, res) => {
  res.render("materials/c#");
});

app.get("/datastructure", (req, res) => {
  res.render("materials/datastructure");
});

app.get("/deepLearning", (req, res) => {
  res.render("materials/deepLearning");
});

app.get("/django", (req, res) => {
  res.render("materials/django");
});

app.get("/git", (req, res) => {
  res.render("materials/git");
});

app.get("/go", (req, res) => {
  res.render("materials/go");
});

app.get("/haskell", (req, res) => {
  res.render("materials/haskell");
});

app.get("/htmlcss", (req, res) => {
  res.render("materials/htmlcss");
});

app.get("/javascript", (req, res) => {
  res.render("materials/javascript");
});

app.get("/machinelearning", (req, res) => {
  res.render("materials/machinelearning");
});

app.get("/matlab", (req, res) => {
  res.render("materials/matlab");
});

app.get("/mongodb", (req, res) => {
  res.render("materials/mongodb");
});

app.get("/nodejs", (req, res) => {
  res.render("materials/nodejs");
});

app.get("/php", (req, res) => {
  res.render("materials/php");
});

app.get("/prolog", (req, res) => {
  res.render("materials/prolog");
});

app.get("/python", (req, res) => {
  res.render("materials/python");
});

app.get("/react", (req, res) => {
  res.render("materials/react");
});

app.get("/redux", (req, res) => {
  res.render("materials/redux");
});

app.get("/rlanguage", (req, res) => {
  res.render("materials/rlanguage");
});

app.get("/ruby", (req, res) => {
  res.render("materials/ruby");
});

app.get("/scala", (req, res) => {
  res.render("scala");
});

app.get("/vue", (req, res) => {
  res.render("materials/vue");
});

app.get("/webaccessibility", (req, res) => {
  res.render("materials/webaccessibility");
});

app.listen(3000, function () {
  console.log("running at port 3000");
});
