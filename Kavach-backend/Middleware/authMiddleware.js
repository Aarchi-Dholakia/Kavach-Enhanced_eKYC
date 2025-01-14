const {createCustomError} = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const userAuth = async(req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
        return next(createCustomError('Invalid Token!',400));
    }
    const token = authHeader.split(' ')[1];
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {userID: payload.userID};
        next();
    }
    catch(error){
        return next(createCustomError('Not Authorized to access this route', 401))
    }
}

module.exports = userAuth;