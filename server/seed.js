require("dotenv").config();

const mongoose = require("mongoose");
const Event = require("./models/event.model");

const events = [    
    {
        name: "Tech conference 2024",
        description:"Pass includes catering and lounge.",
        venue : "Silicon Vallay Arena",
        date : "2024-10-15T09:00:00",
        price : 149,
        capacity: 160,
        booked:118,
        image:"https://images.unsplash.com/photo- 1540-1478"
    },
    {
        name: "Symphony Orchestral Gala",
        description:"Pass includes catering and lounge.",
        venue : "Silicon Vallay",
        date : "2024-11-15T09:00:00",
        price : 145,
        capacity: 170,
        booked:110,
        image:"https://images.unsplash.com/photo- 1540-1478"
    }
];

const seedDatabase = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        await Event.deleteMany();

        await Event.insertMany(events);

        console.log(`${Event.length} event inserted sucessfully`);

        await mongoose.disconnect();

        process.exit(0);
    }catch(error){
        console.error("seed failed:", error.message);
        process.exit(1);
    }
}

seedDatabase();