const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }],
    isAdmin:Boolean,
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }],
    wishlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }],
    contact:Number,
});

module.exports=mongoose.model('user',userSchema);