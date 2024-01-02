const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

 
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes")

app.use("/api/auth",userRoutes);

mongoose.connect(process.env.MONGO_URL, {
    
     
}).then(() => {
    console.log("Connection established");
}).catch((err) => {
    console.error("DB connection error:", err);
});

const server = app.listen(process.env.PORT, ()=>{
    console.log(`process started on port ${process.env.PORT}`)
})