const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const courseRouter = require("./routes/courseRouter");
const StudentRouter = require("./routes/studentRouter");
const teacherRouter = require("./routes/teacherRouter");
const instituteRouter = require("./routes/instituteRouter");
require("dotenv").config();


const app = express();
app.use(express.json())//Middleware
app.use(cors())


app.use("/api/course", courseRouter);
app.use("/api/student", StudentRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/institute", instituteRouter );


mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Database Connected Successfully");
    });
  }).catch((err) => {
    console.log(err);
  });
