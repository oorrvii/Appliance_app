import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db.js';
import router from './routes/auth.routes.js';

const app=express();
app.use('/api/auth',router)

app.get('/',(req,res)=>{
    res.send('Hello World');
});
// this here means first connnect to database then only start listening to server.
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})