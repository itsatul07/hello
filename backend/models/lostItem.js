import mongoose from "mongoose";

const lostItemSchema = new mongoose.Schema({
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
},{timestamps:true})

const LostItem = mongoose.model("lostitems",lostItemSchema);

export default LostItem;