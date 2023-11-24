const mongoose =require('mongoose');
const mongoUri="mongodb://localhost:27017";

const connectTO=()=>{
    mongoose.connect(mongoUri,()=>{
        console.log("connected");
    })
}


module.exports=connectTO;