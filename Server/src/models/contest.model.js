const mongoose=require("mongoose");

const contestSchema=new mongoose.Schema({

    title:{type: String,required:true},
    tag:{type: String,required:true,unique:true},
    c_type:{type: String,required:true},
    date:{type: String,required:true},
    time:{type: String,required:true},
   
},{
    versionKey:false,
    timestamps: true
})

const Contest=mongoose.model("contest",contestSchema);

module.exports=Contest;