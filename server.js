const express = require("express");
const cors = require("cors");
const app = express();
const questions = require('./question.api');
const scores = require("./scores.api");

app.use(express.static(__dirname + "/dist"));

app.use(cors());
app.use(express.json());
app.use("/", questions);
app.use("/", scores);

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
  });


const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

