const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        bookingReference:{
            type:String,
            required:true,
            unique: true,
        },
        event:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Event",
            required : true,

        },
        attendee:{
            fullName:{
                type:String,
                required :true,
            },
            email:{
                type:String,
                required: true,
            
            },
            phone:{
                type:String,
                required: true,

            },
            company:{
                type:String,
                default:"",
            }
        },
        seats:[
            {
                row:String,
                number: Number,
                category:String,
                price: Number,
            },
        ],
        subtotal:{
            type:Number,
            required:true,
        },
        bookingFee:{
            type:Number,
            required:true,
        },
        discount:{
            type:Number,
            default : 0,
        },
        total :{
            type:Number,
            required:true,
        },
        status:{
            type:String,
            enum:["Confirmed","Pending","Cancelled"],
            default:"Confirmed",

        },
    },{
        timestamps:true,
    }
);

module.exports = mongoose.model("Boooking",bookingSchema);