import 'dotenv/config'
import {app} from './app.js'
import connectDB from './db/index.js';

console.log(process.env.PORT)
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!! ",err)
})
