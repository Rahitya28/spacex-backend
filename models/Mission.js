const mongoose = require("mongoose")

const MissionSchema = new mongoose.Schema({

    missionName:{
        type:String
    },

    rocketName:{
        type:String
    },

    launchDate:{
        type:String
    },

    status:{
        type:String
    },

    description:{
        type:String
    },

    crewCount:{
        type:Number
    },

    image:{
        type:String
    }

})

module.exports = mongoose.model(
    "Mission",
    MissionSchema
)