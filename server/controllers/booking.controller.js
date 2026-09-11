const Booking = require("../models/booking.model");
const Event = require("../models/event.model");

const createBooking = async (req,res)=>{
    try{
        const {
            eventId,
            attendee,
            seats,
            subtotal,
            bookingFee,
            discount = 0,
            total,
        } = req.body;

        if(!eventId || !attendee || !seats || seats.length ===0){
            return res.status(400).json({
                success: false,
                message: "Event attendee and seats are required",

            });
        }
        const event = await Event.findById(evnetId);
        if(!event){
            return res.status(404).json({
               sucess:false,
                message: error.message, 
            })
        }
        const bookingReference = 
        "SB-"+
        new Date().getFullyYear() +
        "_"+
        Math.floor(100000+Math.random()*900000);
        const booking = await Booking.create({
            bookingReference,
            event:eventId,
            attendee,
            seats,
            subtotal,
            bookingFee,
            discount,
            total,
            status : "Confirmed",
        });
        event.booked += seats.length;
        await event.save();

        res.status(201).json({
            success:true,
            data:newBooking,
        });




    }catch(error){
        console.log("create booking error",error.message)
        res.status(500).json({
            sucess:false,
            message: error.message,
        });
    }
}

const getBookings = async (req,res)=>{
    try {
        const booking = await Booking.find()
        .populate("event")
        .sort({createdAt:-1});


        res.status(201).json({
            success:true,
            count:booking.length,
            data:booking,
        });

    }catch(error){
        console.log("Get booking error",error.message)
        res.status(500).json({
            sucess:false,
            message: error.message,
        });
    }
}

const getBookingById = async (req,res)=>{
    try{
        const booking = await Booking.findById(req.params.id).populate("event");
        if(!booking){
            return res.status(404).json({
                success: false,
                message: "booking not found",
            });
        }
    }
    catch(error){
       
        res.status(500).json({
            sucess:false,
            message: error.message,
        });
    }
}

module.exports = {
    createBooking,
    getBookings,
    getBookingById
}