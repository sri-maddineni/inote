const express=require('express');
const router=express.Router()

router.get('/',(req,res)=>{
     obj={
        response:"res got"
    }
    res.json(obj)
    res.send("hello");
    

})

module.exports=router;