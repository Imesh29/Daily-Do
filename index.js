const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
    .connect("mongodb://localhost:27017/Daily-Do")
    .then(() => console.log("MongoDB connected successfully!!.."))
    .catch((err) => console.log("MongoDB connection failed",err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is runnig on port ${PORT}...`);
})