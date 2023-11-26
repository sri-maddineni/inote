const express=require('express');
const router=express.Router()
const User=require('../models/User');
const {body, validationResult}=require('express-validator')

//create a user using : post /api/post method desnt require auth......
//no login required
//
router.post('/',[
    body('name','enter valid name').isLength({min:3}),
    body('email','enter valid email').isEmail(),
    body('password').isLength({min:6})
],async (req,res)=>{
     
    obj={
        response:"auth got"
    }
   
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()});
    }

    //check wheter user exixts with same email

    try{
        let user=await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).json({error:"an user already exists with same email"})
        }
    
        user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
            
        })
    
        res.json({"user":user})
    }
    catch(err){
            console.log("some exception occurred!"+err.message)
            res.status(500).json("some error occurred")
    }

    


    //.then(user=>res.json(user))
    // .catch(err=>{
    //     console.log("error occureed database -------------: " +err)
    //     res.json({error:"Please enter unique email: ",message: err.message})
    // });
    
   // res.send(req.body);

})

module.exports=router;