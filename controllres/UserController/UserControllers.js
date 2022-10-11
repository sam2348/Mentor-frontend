const User =require('../../models/UserShema')
const Error=require('../../utils/ErrorHandler')
const generateToken =require('../../suscribers/generateToken')
const {validationResult}=require('express-validator')
const { start } = require('@craco/craco/lib/cra')


// Adding new req.body (Sign-Up Controller)
exports.CreatUser =async(req,res,next)=>{
  const candidata =await User.find()
    const errors =validationResult(req)
    if (!errors.isEmpty()) {
        return next(new Error(errors.array(),404))
    }
     const email = req.body.email.toLowerCase()
    //Comparing The Password and confirmpassword
        if (req.body.password != req.body.confirmpassword)
        return next(new Error("password not match", 400));

     //check The Existing user    
    User.findOne({email:email},(err,user)=>{
        if (user) return next(new Error("user with given email already exist!", 400));
    })    


    // new User Object
    const Userdata = {
        candidateId:candidata.length+1,
        name: req.body.name,
        email: email,
        password: req.body.password,
        confirmPassword: req.body.confirmpassword,
        PhoneNumber:parseInt(req.body.PhoneNumber)
      };

      const user = new User(Userdata)

      user.save((err, doc) => {
        if (err) {
          console.log(err);
          return next(new Error(`${err.message}`, 400));
        }
        res.status(200).json({
          message:"User Register SucessFully",  
          succes: true,
          name:doc.name,
          email:doc.email,
          PhoneNumber:doc.PhoneNumber
        });
      });

}





exports.login =async(req,res,next)=>{
      // taking a user
  const email = req.body.email.toLowerCase();

  User.findOne({ email:email}, async function (err, user) {
    // email is no valid
    if (!user)
      return next(
        new Error(
          `The email address you entered isn't connected to an account. Please  Create a new account.`,
          400
        )
      );

    const isMatch = await user.comparepassword(req.body.password);
    // password does not match
    if (!isMatch) return next(new Error("Invaid credentials", 400));

    //Match The password  then
    //Generate a Token
    const token = generateToken(user);

    res.status(200).json({
      message: "Login SucessFully",
      _Id: user._id,
      name: user.name,
      email: user.email,
      token: token,
    });
  });

}


exports.getProfile =(req,res,next)=>{
    User.findOne({email:req.data.email},function(err,doc){
        if(!doc){
           return next(new Error("Candidate Not be Registed"))
        }
        res.status(200).json({
           candidata:doc
        })
    })
}


exports.UplaodImage =async(req,res,next)=>{
  const uploadImage={
    location:req.file.filename
}
User.findOneAndUpdate({email:req.data.email},{$set:uploadImage},function(err,doc){
    if(err){
       return next(new Error('Loaction cannot be added',400))
    }
    res.status(200).json({
      message:"image  upload Sucessfully Sucessfully",
    })
})
}



exports.AddLoaction =async(req,res,next)=>{
    const addLocation={
        location:req.body.location
    }
    User.findOneAndUpdate({email:req.data.email},{$set:addLocation},function(err,doc){
        if(err){
           return next(new Error('Loaction cannot be added',400))
        }
        res.status(200).json({
          message:"loaction added Sucessfully",
          location:doc.location
        })
    })
}


exports.DeleEducation=async(req,res,next)=>{
  const userEducation =await User.findOne({email:req.data.email})
     
  if(!userEducation){
      return next(new Error('education is not found',404))
  }

    const education = userEducation.education.filter((edu)=>{
        return edu._id.toString()!=req.query.id
    })

   await User.updateOne(
      {
        email:req.data.email
      },
      {
        education
      },
      {
        new: true,
        runValidators: true, 
        useFindAndModify: false
      }
    )
 
}



exports.AddLanguage=async(req,res,next)=>{
  const data = req.body
  const lng = data.map(o => o.language)
  const filtered = data.filter(({language}, index) => !lng.includes(language, index + 1))

  User.updateOne({email:req.data.email},{$push:{language:filtered}},{new: true, upsert: true },function(err,doc){
      res.status(200).json({
        message:"Langauge Added SucesssFully"
      })
  })
}



exports.AddBio =(req,res,next)=>{
    const addBio={
      bio:req.body.bio
    }
  User.findOneAndUpdate({email:req.data.email},{$set:addBio},function(err,doc){
        if(err){
          return next(new Error('bio cannot be added',400))
        }
        res.status(200).json({
          message:"Bio added Sucessfully",
          Bio:doc.bio
        })
  })
}



exports.UpdateBio =(req,res,next)=>{
  const addBio={
    bio:req.body.bio
  }
  User.findOneAndUpdate({email:req.data.email},{$set:addBio},function(err,doc){
        if(err){
          return next(new Error('bio cannot be added',400))
        }
        res.status(200).json({
          message:"Bio added Sucessfully",
          Bio:doc.bio
        })
  })
}




exports.AddSkill =(req,res,next)=>{
  const data = req.body
  const skill = data.map(o => o.skills)
  const filtered = data.filter(({skills}, index) => !skill.includes(skills, index + 1))

  User.updateOne({email:req.data.email},{$push:{language:filtered}},{new: true, upsert: true },function(err,doc){
      res.status(200).json({
        message:"Langauge Added SucesssFully"
      })
  })
  
}

exports.AddEduction=async(req,res,next)=>{
  const addEducation={
    _id:req.body.id,
    degreeName:req.body.degreeName,
    collegeName:req.body.collegeName,
    startDate:req.body.startDate,
    endDate:req.body.endDate
  }

  User.findOneAndUpdate({email:req.data.email},{$push:{education:addEducation}}, {new: true,useFinedAndModify: false},function(err,doc){
  
        if(err){
          return next(new Error('edu cannot be added',400))
        }
        res.status(200).json({
          message:"Bio added Sucessfully",
          education:doc.education
        })
   })

  }
  




exports.AddExprience=(req,res,next)=>{
  const addExprience={
    _id:req.body.id,
    position:req.body.position,
    company:req.body.company,
    startDate:req.body.startDate,
    endDate:req.body.endDate
  }
  
  User.findOneAndUpdate({email:req.data.email},{$push:{experience:addExprience}}, {new: true,useFinedAndModify: false},function(err,doc){
  
    if(err){
      return next(new Error('Exprience  cannot be added',400))
    }
    res.status(200).json({
      message:"Bio added Sucessfully",
      education:doc.education
    })
})
}



exports.GetAllCandidate=(req,res,next)=>{
 
    User.find({},function(err,candidate){
       if(!candidate){
           return next(new Error('candidate not be found',404))
       }
       res.status(200).json({
          candidate:candidate
       })
    })
    
}


exports.GetCandidateProfile=(req,res,next)=>{
     User.findOne({_id:req.params.id},function(err,candidate){
          if(!candidate){
            return next(new Error('candidate not be found',404))
          }
        res.status(200).json({
            candidate:candidate
        })
     })
}