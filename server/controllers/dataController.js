const dataModel=require('../model/dataModel')

//create
const createDataController=async(req,res)=>{
  const {name,description}=req.body
  try {
    await dataModel.create({name,description})

    res.status(200).send({
      success:true,
      message:'data added'
    })
  } catch (error) {
    console.log(error)
  }
}


//get
const getDataController=async(req,res)=>{
  try {
    const  allData= await dataModel.find().sort({createdAt:-1})

    res.status(200).send({
      success:true,
      data:allData
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports={
  createDataController,
  getDataController
}