import Joi from "joi";



   // creating a shema validation using JOi
   const userNameValidationSchema = Joi.string(); // Define this according to your specific requirements
   const guardianValidationSchema = Joi.object(); // Define this according to your specific requirements
   const localGuardianValidationSchema = Joi.object(); // Define this according to your specific requirements
   
   const studentValidationSchema = Joi.object({
       id: Joi.string().required(),
       name: userNameValidationSchema.required(),
       gender: Joi.string().valid('male', 'female', 'others').required(),
       dateOfBirth: Joi.string(),
       email: Joi.string().email().required(),
       contactNo: Joi.string().required(),
       emergencyContactNumber: Joi.string().required(),
       bloodGroup: Joi.string().valid('A+', 'A-', 'Ab+', 'O+', 'O-'),
       presentAddress: Joi.string().required(),
       permanentAddress: Joi.string().required(),
       guardian: guardianValidationSchema.required(),
       localGuardian: localGuardianValidationSchema.required(),
       profileImg: Joi.string(),
       isActive: Joi.string().valid('active', 'blocked').default('active')
   });

   export default studentValidationSchema