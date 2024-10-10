const mongoose=require('mongoose');

const ownerSchema=mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    isAdmin:Boolean,
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }],
    picture: String,
    gstin:String,
});

module.exports=mongoose.model('owner',ownerSchema);