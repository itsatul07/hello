import mongoose from "mongoose";

const buyItemSchema = new mongoose.Schema({
    itemName:{
        type: String,
        required: true,
    },
    
    itemFoundStatus:{
        type:Boolean,
    },
    itemImages:{
        type:Array,
        required:true,
    },
    itemDescription:{
        type:String,
    },
    itemOwner:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    itemOwnerContact:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    itemOwnerEmail:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    itemPrice:{
        type:Number,
        required:true,
    },
},{timestamps:true})

const BuyItem = mongoose.model("buyitems",buyItemSchema);

export default BuyItem;