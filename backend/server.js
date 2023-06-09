require('dotenv').config();

const express=require('express');
const mongoose=require('mongoose');

const port=process.env.PORT;
const MONGO_URI=process.env.MONGO_URI;
const workoutRoutes=require('./routes/workouts');

//express app
const app=express();
//middleware
app.use(express.json())

app.use('/',(req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
    //workouts
app.use("/api/workouts",workoutRoutes)

//connect to db
mongoose.connect(MONGO_URI)
            .then(()=>{
                //listen for requests 
                app.listen(port,()=>{
                    console.log("Connect to the db & listening on port",port);
                })
            })
            .catch((error)=>{
                console.log(error)
            })
