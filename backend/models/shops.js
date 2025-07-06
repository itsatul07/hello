import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
    shopName:{
        type: String,
        required: true,
    },
    shopLocation:{
        type:String,
        required:true,
    },
    shopTimings:{
        type:String,
    },
    shopStatus:{
        type:Boolean,
    },
    shopImages:{
        type:Array,
    },
    shopDescription:{
        type:String,
    },
    shopOwner:{
        type:Schema.Types.ObjectId,
        ref:"users",
    },
    shopOwnerContact:{
        type:Schema.Types.ObjectId,
        ref:"users",
    },
    shopOwnerEmail:{
        type:Schema.Types.ObjectId,
        ref:"users",
    },
},{timestamps:true})

const Shop = mongoose.model("shops",shopSchema);

export default Shop;