import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createStudent = async(req: Request, res: Response) =>{
    try{
 
 
     const { password, student: studentData} = req.body;
 
     // data validate using Zod
    //  const zodparsedData = studentValidationSchema.parse(studentData)  
     // data valid using joi
     // const { error, value } = studentValidationSchema.validate(studentData)
     // will call service func to send this data
     const result = await UserServices.createStudentIntoDB(password, studentData);
    
     // if(error){
     //     res.status(500).json({
     //         success : false,
     //         message : "Something went wrong",
     //         error: error.details
     //     })
     // }
 
     // send response
     res.status(200).json({
         success : true,
         message : "Student is created successfully",
         data : result,
     })
    }
    catch(err: any){
     res.status(500).json({
         success : false,
         message : err.message || "Something went wrong",
         error : err,
     })
    }
 }

 export const UserControllers = {
    createStudent,
 }