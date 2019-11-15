const jwt = require('jsonwebtoken');

module.exports = function (req , res , next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send("Access denied!");

    try{
        const tokenVerify = jwt.verify( token , 'askhjdkljahsdjklhas');
        req.user = tokenVerify;
        next();

    }catch(err){
        res.status(400).send('Invalid Token!');
    }
}
