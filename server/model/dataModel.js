const mongoose=require('mongoose')
const schema=mongoose.Schema
const datSchema=new schema({
  name:{type:String},
  description:{type:String}
},{timestamps:true})

module.exports=mongoose.model('data',datSchema)