const express=require("express");

const studentcontroller=require("./controllers/student.controller")
const contestcontroller=require("./controllers/contest.controller")


const app=express();

app.use(express.json());

app.use("/contests",contestcontroller)


app.use("/students",studentcontroller)
module.exports=app;