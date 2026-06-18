const Mission = require("../models/Mission")
const cloudinary = require("cloudinary").v2

cloudinary.config({

    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,

    api_key:process.env.CLOUDINARY_API_KEY,

    api_secret:process.env.CLOUDINARY_API_SECRET

})

exports.addMission = async(req,res)=>{

    try{

        const result =
        await cloudinary.uploader.upload(
            req.file.path,
            {
                folder:"spacex"
            }
        )

        const mission =
        await Mission.create({

            missionName:req.body.missionName,

            rocketName:req.body.rocketName,

            launchDate:req.body.launchDate,

            status:req.body.status,

            description:req.body.description,

            crewCount:req.body.crewCount,

            image:result.secure_url

        })

        res.status(201).json({

            message:"Mission Added",

            mission

        })

    }catch(err){

        res.status(500).json({

            message:err.message

        })
    }
}

exports.getAllMissions = async(req,res)=>{

    try{

        const missions = await Mission.find()

        res.status(200).json({

            message:"All Missions",

            missions

        })

    }catch(err){

        res.status(500).json({

            message:err.message

        })
    }
}

exports.getMissionById = async(req,res)=>{

    try{

        const mission =
        await Mission.findById(
            req.params.id
        )

        res.status(200).json({

            message:"Mission Details",

            mission

        })

    }catch(err){

        res.status(500).json({

            message:err.message

        })
    }
}

exports.updateMission = async(req,res)=>{

    try{

        const mission =
        await Mission.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true,
                runValidators:true
            }

        )

        res.status(200).json({

            message:"Mission Updated",

            mission

        })

    }catch(err){

        res.status(500).json({

            message:err.message

        })
    }
}

exports.deleteMission = async(req,res)=>{

    try{

        await Mission.findByIdAndDelete(
            req.params.id
        )

        res.status(200).json({

            message:"Mission Deleted"

        })

    }catch(err){

        res.status(500).json({

            message:err.message

        })
    }
}