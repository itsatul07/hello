import mongoose from "mongoose";

const flatSchema = new mongoose.Schema({
    flatLocation:{
        type:String,
        required:true,
    },
    flatImages:{
        type:Array,
        required:true,
    },
    flatStatus:{
        type:Boolean,
    },
    flatSize:{
        type:String,
        required:true,
    },
    flatPrice:{
        type:Number, //add a rupees symbol
        required:true,
    },
    flatDescription:{
        type:String,
        required:true,
    },
    flatOwner:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    flatOwnerContact:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    flatOwnerEmail:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
},{timestamps:true})

const Flat = mongoose.model("flats",flatSchema);

export default Flat;