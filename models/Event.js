const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    place: {type:Types.ObjectId, ref:'places',required:true},
    date: {type:Date, required:true},
    photo:{type:String, required:true},
    description:{type:String, required:true},
    attendes:{type:mongoose.Types.ObjectId, ref:'users'},
    minimum:{type:Number,required:true},
    organizer:{type:mongoose.Types.ObjectId, ref:'users'}

})

const Event = mongoose.model('events', schema)

module.exports = Event;