const port = 4000;
const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors());

//Database connection with Mo
mongoose.connect("mongodb+srv://lucynguzo:lazri@2026@sokopoa-cluster.bl81wv2.mongodb.net/")


//API Creation


app.get("/", (req, res) => {
         res.send("Express app is running")
})



app.listen(port, (error) => {
if (!error) {
    console.log("Server is running on port " + port)

}
else{
    console.log("Error :" + error)
}

})