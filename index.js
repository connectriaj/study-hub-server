const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const coursesData = require("./data/courses.json");

app.get("/category", (req, res) => {
  res.send(coursesData);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = coursesData.find((course) => course.id == id);
  res.send(selectedCourse);
});

app.get("/", (req, res) => {
  res.send("Node server is working");
});

app.listen(port, () => {
  console.log("Server is Running port: ", port);
});
