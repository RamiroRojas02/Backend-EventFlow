
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type: String, required:true},
    lastname: {type: String, required:true},
    photo: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    age: {type:Number, required:true},
    genre: {type:String, required:true},
    events: {type:mongoose.Types.ObjetcId, ref:'events',required:true},
    role: {type: String, required:true}
})

const User = mongoose.model('users', schema)

module.exports = User;