const jwt = require("jsonwebtoken")


// to generate a token 
const generateToken = (user) => {
 
console.log(process.env.JWT_SECRET,'JWT_SECRET')
    return jwt.sign(
   {id:user.id,
name:user.name}
    ,
    process.env.JWT_SECRET, //need to search more
       {
           expiresIn:'30d'
       }
    )
}

// Authorised a user
 const isAuth = (req, res, next) => {
    // get the coded token from the header
    const token = req.headers.authorization
    // check if there is a token
    if (!token) {
        return res.status(401).json({
            message: "no token ,Authorization denied"
        })
    }

    try {
        // if there is a token
        //decoding it 
        const decoded = jwt.verify(token, process.env.JWT_SECRET,)
        req.user = decoded // this will let me get user data in the router from the middleware "isAuth"
        next() // excute the next step after Authorized
    } catch (err) {
        console.log(err)
        res.status(401).json({
            message: "Invalied Token"
        })
    }
    
}



module.exports ={
generateToken:generateToken,
isAuth:isAuth
}