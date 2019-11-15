const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const { registerValidation , loginValidation } = require('../validation');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {

    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const emailExist = await User.findOne({ email : req.body.email });
    if(emailExist) return res.status(400).send("Email already exist!");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password , salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword

    });

    try {
        const savedUser = await user.save();
        res.send({ user : savedUser._id });
    } catch (err) {
        res.status(400).send(err);
    }
});


router.post('/login' , async (req  , res) => {
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({ email : req.body.email });
    if(!emailExist) res.status(400).send("Email not found");

    const passwordMatched = await bcrypt.compare(req.body.password , emailExist.password)
    if(!passwordMatched) return res.status(400).send('Invalid password');
    //res.send("Looged in!");

    const token = jwt.sign({_id : emailExist._id} , 'askhjdkljahsdjklhas');
    res.header('auth-token' ,token).send(token);



});

module.exports = router;
