const express=require('express')
const app=express()
const cors=require('cors')
const db=require('./config/connect')
const dataRouter=require('./routes/dataRoutes')

app.use(express.json())
app.use(cors())
db()

app.get('/',(req,res)=>{
  res.send('api is running')
})

app.use('/data',dataRouter)


app.listen(4500,()=>console.log('server is running at port 4500'))