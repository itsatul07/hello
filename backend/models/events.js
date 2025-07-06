import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventName:{
        type: String,
        required: true,
    },
    eventLocation:{
        type:String,
        required:true,
    },
    eventTimings:{
        type:String,
    },
    eventImages:{
        type:Array,
    },
    eventDescription:{
        type:String,
    },
    volunteer:{
        type:Array,
    }
},{timestamps:true})

const Shop = mongoose.model("shops",shopSchema);

export default Shop;