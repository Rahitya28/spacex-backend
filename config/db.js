const mongoose = require("mongoose")
require("dotenv").config()

const connectDb = async()=>{

    try{

        await mongoose.connect(process.env.URI)

        console.log("Database Connected")

    }catch(err){

        console.log(err)
    }
}

module.exports = connectDb