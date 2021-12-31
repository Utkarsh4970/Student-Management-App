const express=require("express");

const router=express.Router();

const Contest=require("../models/contest.model");

router.post("/",async function(req,res){
    const contests=await Contest.create(req.body);
    return res.send(contests);
})

module.exports=router;
