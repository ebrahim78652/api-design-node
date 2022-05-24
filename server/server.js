// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var _ = require("lodash");

// express.static will serve everything
// within client as a static resource
// also, it will serve the index.html on the
// root of that directory on a GET to '/'
app.use(express.static("client"));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions

app.get("/lions", (req, res) => {
  res.status(200).json(lions);
});

app.get("/lions/:id", (req, res) => {
  let lionWithId = lions.find((lion) => lion.id === +req.params.id);

  if (lionWithId) {
    console.log(lionWithId);
    res.status(200).json(lionWithId);
  } else {
    res.send();
  }
});

app.post("/lions", (req, res) => {
  const body = req.body;
  console.log(req);
  const newLionId = id++;
  const newLion = {
    name: body.name,
    id: newLionId,
    pride: body.pride,
    age: body.age,
    gender: body.gender,
  };
  lions.push(newLion);
  console.log(lions);
  res.status(200).json(newLion);
});

app.put("/lions/:id", (req, res) => {
  let lionIndex = lions.findIndex((lion) => lion.id === +req.params.id);
  console.log(`The index of the lion is : ${lionIndex}`);
  console.log(req.body);
});

app.delete("/lions/:id", (req, res) => {});
app.listen(3000);
console.log("on port 3000");
