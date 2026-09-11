const express = require("express");

const {
    createBooking,
    getBookings,
    getBookingById
} = require ("../controllers/booking.controller");

const router = express.Router();

router.post("/",createBooking);
router.get("/",getBookings);
router.get("/:id",getBookingById);

module.exports = router;