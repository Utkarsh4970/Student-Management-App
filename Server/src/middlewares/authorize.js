function authorize(Roles){
    return(req,res,next)=>{
        let allow=false;
        req.user.roles.map(role=>{
            if(Roles.includes(role)){
                allow=true;
            }
        })

if(!allow){
    return res.status(400).send({message: "you are not allow"})

}
return next();

    }
}
module.exports=authorize;