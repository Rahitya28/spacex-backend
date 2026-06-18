const express = require("express")
const router = express.Router()

const multer = require("multer")

const auth =
require("../middleware/authMiddleware")

const {

    addMission,
    getAllMissions,
    getMissionById,
    updateMission,
    deleteMission

}
=
require("../controller/missionController")

const storage =
multer.diskStorage({

    destination:(req,file,cb)=>{

        cb(null,"uploads/")
    },

    filename:(req,file,cb)=>{

        cb(
            null,
            Date.now()+"-"+file.originalname
        )
    }

})

const upload =
multer({storage})

router.post(
    "/add/mission",
    auth,
    upload.single("image"),
    addMission
)

router.get(
    "/get/missions",
    getAllMissions
)

router.get(
    "/get/missions/:id",
    getMissionById
)

router.put(
    "/update/missions/:id",
    auth,
    updateMission
)

router.delete(
    "/delete/missions/:id",
    auth,
    deleteMission
)

module.exports = router