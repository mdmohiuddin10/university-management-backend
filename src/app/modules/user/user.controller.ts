import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";


const createStudent = catchAsync(async(req, res) =>{
  
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
   //  res.status(200).json({
   //      success : true,
   //      message : "Student is created successfully",
   //      data : result,
   //  })

   sendResponse(res, {
       statusCode: httpStatus.OK,
       success: true,
       message: "Student is created successfully",
       data: result
   })
})

 export const UserControllers = {
    createStudent,
 }