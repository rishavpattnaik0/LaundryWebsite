// Import Model
import User from "../models/User.js"

// Making Promise
import bigPromise from "../middlewares/bigPromise.js"
import { cookieToken } from "../utils/cookieToken.js";
import { mailHelper } from "../utils/mailHelper.js";
export const createUser = bigPromise(async(req,res,next)=>{
    const {username,email,password}=req.body;
    console.log(req.body);
    if((!username) || (!email) || (!password)){
        return res.status(400).json({
            success:false,
            message:"All fields are required!"
        })
    }
  const existingUser = await User.findOne({email:email})
    if(existingUser){
        return res.status(501).json({
            success:true,
            message:"You have been Already been registered !",
        })
    }
    else{
        const user=await User.create({
            username,
            email,
            password
        })
        return res.status(200).json({
            success:true,
            message:"User created!",
            data:user
        })
    }
})

export const login= bigPromise(async(req,res,next)=>{
    const {email,password}= req.body;
    console.log(req.body);
    const user=await User.findOne({email:email});
    if(!user)
    {
        return res.status(401).json({
        success:false,
        message:"Invalid Username or Password"
        });
    }
    else{
        const user1=await user.isValidatedPassword(req.body.password,user.password);
        if(!user1){
            return res.status(401).json({
                success:false,
                message:"Invalid Username or Password"
                });
        }
    return res.status(200).json({
        success:true,
        message:"Successfully logged in",
        data:user
        });
    } 
});

export const logout=bigPromise(async(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    
    res.status(200).json({
        success:true,
        message:"loggedOut Successfully"
    })
})

export const getUser = bigPromise(async(req,res,next) =>{
   const details= await User.find({});
//    console.log(JSON.parse(details));
   if(!details)
   {
    return res.status(401).json({
        success:false,
        message:"No users exist till now"
    })
   }
   else{
    return res.status(200).json({
        success:true,
        message:"Done !",
        data:details
    });
   }
});


export const updatePassword=bigPromise(async(req,res,next) =>{
   const id=req.body.id;
   const user=await User.findById(id);
   console.log(user.password);
   const user1=await user.isValidatedPassword(req.body.oldpassword,user.password);
   if(!user1)
   {
    return res.status(401).json({
    success:false,
    message:"Old password does not match to the new password"
    });
   }
   const newpass=req.body.newpassword;
   user.password=newpass;
   cookieToken(user,res,"Password updated Successfully");
});

export const updateUserdetails = bigPromise(async(req,res,next)=>{
 const data={
    username:req.body.newusername,
    email:req.body.newemail,
 }
 const userexists = await User.findOne({password:req.body.password});
 console.log(userexists.password);
 if(!userexists)
 {
    return res.status(401).json({
        success:false,
        message:"Enter Password Correctly"
    });
 }
 const updated = await User.findByIdAndUpdate(req.body.id,data,{
    new:true,
    runValidators:true,
    useModifyandUpdate:false
   });
   
   if(!updated)
   {
    return res.status(401).json({
        success:false,
        message:"Wrong email no user exist with this email"
     });
   }
   cookieToken(updated,res,"User details have been updated successfully");
});

export const deleteUser = bigPromise(async(req,res,next)=>{
    const user1 = await User.findById(req.body.id);
    if(!user1)
    {
       return res.status(401).json({
        success:true,
        message:"Invalid details of the user !"
       })
    }
    await user1.remove();
    return res.status(200).json({
    success:true,
    message:"Successfully Deleted User"
    });
})

export const addReviews=bigPromise(async(req,res,next)=>{
    const user=req.body;
    const a=await User.findOne({email:user.email});
    if(!a)
    {
        return res.status(401).json({
            success:false,
            message:"Invalid Username"
        });
    }
    else{
        const user1=await a.isValidatedPassword(req.body.password,a.password);
        if(!user1)
        {
            return res.status(401).json({
                success:false,
                message:"Invalid Password"
            });
        }
        const data={
            reviews:req.body.feedback
        }
            const user2= await User.updateOne({_id:a._id},{$push:{reviews:req.body.feedback,rating:req.body.rating}})
             
            if(!user2){
                return res.status(401).json({
                    success:false,
                    message:"Updation Failed"
                });
            }
        return res.status(200).json({
            success:true,
            message:"Successfully Added Your Review",
            data:a
        });
    }
})
let userid1;

export const addClothes = bigPromise(async(req,res,next)=>{
    const data={
        userid:req.body.userid,
    }
    userid1=data.userid;
    const data1={
        name:req.body.name,
        quantity:req.body.count,
        price:req.body.price
    }
    const user=await User.findById(data.userid);
    var b=user.clothes;
    if(user.clothes.length==0)
    {
        const user2=await User.updateOne({_id:user._id},{$push:{clothes:data1}});
            return res.status(200).json({
                success:true,
                message:"Successfully Added Your Products",
                data:user2
            }) 
    }
    
    else{
        let a=0;
    for(var i=0;i<b.length;i++)
    {
        console.log("Hi");
        console.log(user.clothes[i].name,data1.name);
        if(user.clothes[i].name===data1.name)
        {
            console.log("Hello")
            a=1;
            user.clothes[i].quantity+=data1.quantity;
            await user.save();
            console.log(user);
        }
    }
        if(a==0){
            const user2=await User.updateOne({_id:user._id},{$push:{clothes:data1}});
            return res.status(200).json({
                success:true,
                message:"Successfully Added Your Products"
            })
        }
    }
})

export const getClothes=bigPromise(async(req,res,next)=>{
    console.log(req.body.a);
    const user=await User.findById(req.body.a);
    return res.status(200).json({
        success:true,
        message:'Successfully Sent the User',
        data:user
    });
})