const express = required("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"first api Event MS running..."
    })
})