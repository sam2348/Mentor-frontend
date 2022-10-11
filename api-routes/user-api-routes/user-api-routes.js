const express = require('express')
const router =express.Router()
const { check } = require('express-validator');
const UserControllers =require('../../controllres/UserController/UserControllers')
const ProctedRoutes =require('../../middleware/ProtectedRoutes')
const Upload =require('../../features/UploadProfile')

router
     .route('/register')
     .post([
        check('name').notEmpty().withMessage('name is required'),
        check('email').notEmpty().withMessage('email is required'),
        check('email').isEmail().withMessage('email is not valid'),
        check('PhoneNumber').notEmpty().withMessage('phone is required'),
	    check('PhoneNumber').isLength({ min: 10 }).withMessage('phone number must be at least 10 characters'),
	    check('PhoneNumber').isLength({ max: 12 }).withMessage('phone number must be at least 12 characters'),
        check('password').notEmpty().withMessage('password is required').isStrongPassword({ minLength: 8,minLowercase: 1, minUppercase: 1,minNumbers: 1}).withMessage('Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number'),
        check('confirmpassword').notEmpty().withMessage('password is required').isStrongPassword({ minLength: 8,minLowercase: 1, minUppercase: 1,minNumbers: 1}).withMessage('confirmpassowrd must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number'),
     ], UserControllers.CreatUser)



router
    .route('/login') 
    .post(
        [
          check('email').notEmpty().withMessage('email is required'),
          check('email').isEmail().withMessage('email is not valid'),
        ],UserControllers.login
    )   
    
    

    
  router
      .route('/getProfile')
      .get(ProctedRoutes,UserControllers.getProfile)


router
     .route('/profile-upload') 
     .patch(ProctedRoutes,Upload.single('myfile'),UserControllers.UplaodImage)   




router
    .route('/update-location')   
    .patch(ProctedRoutes,UserControllers.AddLoaction)  



router
    .route('/add-language')
    .patch(ProctedRoutes,UserControllers.AddLanguage)


router
     .route('/add-bio')
     .patch(ProctedRoutes,UserControllers.AddBio)


router
.route('/update-bio')
.patch(ProctedRoutes,UserControllers.UpdateBio)   



router
    .route('/add-skills')
    .patch(ProctedRoutes,UserControllers.AddSkill)



router
   .route('/add-education')  
   .patch(ProctedRoutes,UserControllers.AddEduction)  

router
     .route('/delete-education')   
     .delete(ProctedRoutes,UserControllers.DeleEducation)


router
     .route('/add-exprience')   
     .patch(ProctedRoutes,UserControllers.AddExprience)

     
router
     .route('/getAlluser') 
     .get(UserControllers.GetAllCandidate)    


router
     .route('/getSingleCandodateDetail/:id')    
     .get(UserControllers.GetCandidateProfile) 


module.exports = router