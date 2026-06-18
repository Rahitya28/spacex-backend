require("dotenv").config()

const express = require("express")

const app = express()

const connectDb =
require("./config/db")

const authRoute =
require("./router/authRouter")

const missionRoute =
require("./router/missionRoute")

app.use(express.json())

connectDb()

app.use(
    "/auth",
    authRoute
)

app.use(
    "/api/v1",
    missionRoute
)

app.get("/",(req,res)=>{

    res.send(
        "SpaceX Mission Server Running"
    )

})

const PORT =
process.env.PORT || 5000

app.listen(PORT,()=>{

    console.log(
        `Server Running On ${PORT}`
    )

})