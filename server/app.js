const express = require("express");
const cors = require("cors");

const eventRoutes = require("./routes/event.routes");
const bookingRouters = require("./routes/booking.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"firs Event MS Api running..."
    });
});

app.use("/api/events",eventRoutes);
app.use("/api/bookings",bookingRouters);

module.exports = app;