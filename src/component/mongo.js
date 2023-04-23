const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/PlayerData").then(()=>{
    console.log("Mongodb connected");
}).catch(()=>{
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    name:{
        type:String},
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})
const collection = mongoose.model("collection",newSchema);

module.exports = collection