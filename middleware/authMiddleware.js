const jwt = require("jsonwebtoken")

const auth = async(req,res,next)=>{

    try{

        const authHeader = req.header("Authorization")

        if(!authHeader){

            return res.status(401).json({
                message:"Login First"
            })
        }

        const token = authHeader.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : authHeader

        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.user = decode

        next()

    }catch(err){

        console.log(err)

        res.status(401).json({
            message:"Invalid Token"
        })
    }
}

module.exports = auth