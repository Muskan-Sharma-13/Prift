const express=require('express');
const router=express.Router();
const ownerModel=require('../models/owner-model');

router.post("/create",async (req,res)=>{
    let count=await ownerModel.find();
    if(count.length>0){
        return res.status(500).send("You are not authorised to have more than one owner.");
    }
    let { name,email,password }=req.body;
    let owner=await ownerModel.create({
        name,
        email,
        password
    })
    res.send(owner);
})


router.get("/",function(req,res){
    res.send("hey owner");
});

module.exports=router;