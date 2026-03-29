import express from 'express'
const router = express.Router()

router.post('/signup',(req,res)=>{
    res.json({ message: "signup route" })
})     
router.post('/login',(req,res)=>{
    res.json({ message: "login route" })
})    
export default router     