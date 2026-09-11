const express = require("express");
const cors = require("cors");

const eventRoutes = require("./routes/event.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"first api Event MS running..."
    });
});

app.use("/api/events",eventRoutes);

module.exports = app;