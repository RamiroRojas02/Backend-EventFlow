const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type:String, required:true},
    address: {type:String, required:true},
    photo:{type:String, required:true},
    date:{type:mongoose.Types.ObjectId, ref:'events'},
    occupancy:{type:Number,required:true}
})
const Event = mongoose.model('places',schema)

module.exports= Event;
