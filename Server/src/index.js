const express=require("express");

const studentcontroller=require("./controllers/student.controller")

const app=express();

app.use(express.json());


app.use("/students",studentcontroller)
module.exports=app;