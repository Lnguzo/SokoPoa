const port = 5000;
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
mongoose.connect("mongodb+srv://lucynguzo:12345lazri@sokopoa-cluster.bl81wv2.mongodb.net/")


//API Creation


app.get("/", (req, res) => {
         res.send("Express app is running")
})

//Image storage engine 

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})


const upload = multer({
    storage: storage
})

//Creating upload
 app.use ('/images',express.static('upload/images'))  
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({ success: 1, image_url:'http://${port}/images/${req.file.filename}'})

})

//schema   creation
const Product = mongoose.model("Product", {
    id:{
    type: Number,
    required: true},

    name:{
    type: String,
    required: true},

    image:{
    type: String,
    required: true},    

    category:{
        type: String,
        required: true},
    
    new_price:{
    type: Number,
    required: true},

    old_price:{
    type: Number,
    required: true},
                
   date:{
    type: Date,
    default: Date.now},
available:{
    type: Boolean,
    required: true},

})

app.post("/addproducts", async (req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
});
console.log(product)
await product.save()
console.log("Saved")
res.json({success:true,
    name: req.body.name,
})
})





app.listen(port, (error) => {
if (!error) {
    console.log("Server is running on port " + port)

}
else{
    console.log("Error :" + error)
}

})