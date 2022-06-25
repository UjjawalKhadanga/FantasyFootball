const jwt = require('jsonwebtoken');


module.exports = function (req, res, next){
    const token = req.cookies.jwt
    console.log(`cookie parsed : ${token}`)
    if(!token){
        return res.status(401).json({error: "Unauthorized User Access Denied"})
    }

    // verify token
    try {
        const verified=jwt.verify(token,process.env.JWT_SECRET);
        req.userID=verified;
        next();
    } catch (error) {
        return res.status(400).json({msg: "Invalid Token"})
    }
}
