const mongoose=require("mongoose");
module.exports=()=>{
    return mongoose.connect("mongodb+srv://utkarsh:Utkarsh8617@cluster0.4txvh.mongodb.net/test")
}