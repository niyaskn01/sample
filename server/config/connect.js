const mongoose=require('mongoose')
const connect=()=>{
  try {
    mongoose.connect('mongodb+srv://niyaskn01:seencontraniyas@cluster0.h4irhqj.mongodb.net/cart01?retryWrites=true&w=majority')
    console.log('connected with db')
  } catch (error) {
    console.log('error in connection to db')
  }
}

module.exports=connect