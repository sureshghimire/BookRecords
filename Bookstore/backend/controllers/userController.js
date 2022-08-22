
const UserModel = require('../models/UserModel');

const jwt = require('jsonwebtoken')


//taking user id as paylod to get the toke, you could use email as well
const createToken = (id)=>{
   return jwt.sign({id}, process.env.SECRET, {expiresIn:'1d'}); //expriation is Optional
}

//signup
const signup = async(req, res)=>{
   const {email, password} = req.body;
   try {
    const user = await UserModel.signup(email, password);

    //create Bearer token passing id
    const token = createToken(user._id)

    res.status(201).json({email, token})
   } catch (error) {
    res.status(400).json({error: error.toString()})
   }
}


//login
const login = async(req, res)=>{
    const {email, password} = req.body;
    
   try {
    const user = await UserModel.login(email, password);

    //create Bearer token passing id
    const token = createToken(user._id)

    res.status(201).json({email, token})
   } catch (error) {
    res.status(400).json({error: error.toString()})
   }
}

module.exports={signup, login}