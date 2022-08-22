const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps:true})

//static signup method: for hashing password when user create a password
userSchema.statics.signup= async function(email, password){

   

    //check if email and password are empty
    if(!email || !password){
        throw Error('Email & Password must be filled')
    }

    //validate email and password using validator
    if(! validator.isEmail(email)){
        throw Error('Not a valid email')
    }

    if(!validator.isStrongPassword(password)){
        throw Error(`Not strong password`)
    }

     //check if the email already exists
     const exists = await this.findOne({email});

     if(exists){
         throw Error('Email already in use')
     }
 

    //generate salt to hash the password
    const salt = await bcrypt.genSalt(10);

    //hash passwprd using salt
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user using email and hashed password
    const user = this.create({email, password:hashedPassword})

    return user
}


//static method to login
userSchema.statics.login= async function (email, password){
    //check if email and password are empty
    if(!email || !password){
        throw Error('Email & Password must be filled')
    }

     //check if the email already exists
     const user = await this.findOne({email});

     if(!user){
         throw Error(`User with email: ${email} does not exists`)
     }

     const match = await bcrypt.compare(password, user.password)
     if(!match){
        throw Error('Incorrect password')
     }

     return user;
}

module.exports= mongoose.model('User', userSchema )