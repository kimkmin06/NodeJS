const express = require("express");
const indexRouter = require("./routes/index");
const studentRouter = require("./routes/student");
const nunjucks = require("nunjucks");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 3001);
app.use(morgan('dev'));

app.use("/", indexRouter);
app.use("/student", studentRouter);

//view에 engine에 html로 할끼다 ~
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.listen(app.get("port"), () => {
  console.log("Server Starting port : ", app.get("port"));
});
