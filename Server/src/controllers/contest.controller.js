const express=require("express");

const router=express.Router();

const Contest=require("../models/contest.model");

router.post("/",async function(req,res){
    const contests=await Contest.create(req.body);
    return res.send(contests);
})

router.get("/",async function(req,res){
    const contests=await Contest.find().lean().exec();
    return res.status(200).send({contests});
})


router.delete("/:id", async function (req, res) {

    try {
        const contests = await Contest.findByIdAndDelete(req.params.id);
        // console.log(req.params.id)
        return res.status(201).send({ contests });
    }
    catch (err) {
        console.log(err.message)
    }
})

module.exports=router;
