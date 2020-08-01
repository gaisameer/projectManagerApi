const express = require("express");
const studRouter = require("./routers/studentRouter");
const guideRouter = require("./routers/guideRouter");
const projRouter = require("./routers/projectRouter");
const logRouter = require("./routers/logRouter");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(studRouter);
app.use(guideRouter);
app.use(projRouter);
app.use(logRouter);

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(port, () => {
  console.log("server running on " + port);
});
