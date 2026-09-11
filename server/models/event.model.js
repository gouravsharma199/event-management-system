const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        description:{
            type: String,
            default: "",
        },
        venue:{
            type:String,
            required: true,
            trim: true,
        },
        date:{
            type:Date,
            required:true,
        },
        price : {
            type:Number,
            required:true,
            min :1,
        },
        booked:{
            type:Number,
            default:0,
            min:0,
        },
        image:{
            type:String,
            default:"",
        },
        status:{
            type: String,
            enum:["Active","Comleted","Draft"],
            default : "Active",
        },


},{
    timestamps:true,
});

eventSchema.virtual("available").get(function(){
    return this.capacity - this.booked;
});

eventSchema.set("toJSON",{
    virtuals:true,
});

module.exports = mongoose.model("Event",eventSchema);