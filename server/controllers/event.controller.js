const Event = require("../models/event.model");

const getEvents = async(req,res)=>{
    try{
        const {search,status} = req.query;
        const filter = {};
        if(search){
            filter.name = {
                $regex: search,
                $options:"i",
            };
        }
        if(status && status !== "All Statuses"){
            filter.status = status;

        }
        const events = await Event.find(filter);
        res.status(200).json({
            success : true,
            count: events.length,
            data: events,
        });
        
    }catch(error){
        res.status(500).json({
            sucess:false,
            message: error.message,
        });
    }
};

const getEventById = async(req,res)=>{
    try{
        const event = await Event.findById(req.params.id);

        if(!event){
            return res.status(404).json({
                sucesss:false,
                message: "event not found",
            });
        }
        res.status(200).json({
            sucess : true,
            data :event,
        });

    }catch(error){
        res.status(500).json({
            success :false,
            message:"failded to fatch evnet ",
        });
    }
};

const createEvent = async (req,res)=>{
    try {
        const event = await Event.create(res.body);
        
        res.status(201).json({
            success:true,
            data:event,
        });
    }catch(error){
        res.status(400).json({
            sucess:false,
            message :error.message,
        });
    }
};


const updateEvent = async(req,res)=>{
    try{
        const event = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new: true,
                runValidators:true,
            }
        );
        if(!event){
            return res.status(404).json({
                sucess : false,
                message:"event not Found",
            })
        }
        res.status(200).json({
            success:true,
            data : event,
        });
    }catch(error){
        res.status(400).json({
            success: false,
            message : error.message,
        })
    }
};

const deleteEvent = async (req,res)=>{
    try{
        const event = await Event.findByIdAndUpdate(req.params.id);
        if(!event){
            return res.status(404).json({
                success : false,
                message:"Event not Found"
            });
        }
        res.status(200).json({
            success:true,
            message: "evnet deleted sucessfully"
        });
    }catch(error){
        console.error("Get Event Error:",error);
        res.status(500).json({
            success:false,
            message:"Failed to delete event"
        });
    }
};

module.exports = {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
};