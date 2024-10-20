// import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
// import studentValidationSchema from "./student.validation";
// import studentValidationSchema from "./student.validation";



const getAllStudents = catchAsync(async(req, res ) =>{

        const result = await StudentServices.getAllStudentsFromDB()
        // res.status(200).json({
        //     success : true,
        //     message : "Students are retrive successfully",
        //     data : result,
        // })
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Students data retrived successfully",
            data: result
        })
    })


const getSingleStudent = catchAsync(async(req, res) =>{
   
    const { studentId } = req.params
    const studentResult = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Student is retrived successfully",
        data: studentResult
    })
})



const deleteStudent = catchAsync(async(req, res) =>{
    const { studentId } = req.params
    const studentResult = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Student data deleted successfully",
        data: studentResult
    })
})
  

export const StudentControllers = {
    // createStudent,
    getAllStudents,
    getSingleStudent,
    deleteStudent
}


// get all students
// async(req, res, next) =>{
//     try{
//         const result = await StudentServices.getAllStudentsFromDB()
//         // res.status(200).json({
//         //     success : true,
//         //     message : "Students are retrive successfully",
//         //     data : result,
//         // })
//         sendResponse(res, {
//             statusCode: httpStatus.OK,
//             success: true,
//             message: "Students data retrived successfully",
//             data: result
//         })
//     }
//     catch(err){
//         next(err)
//        }
// }

// for delete

// async(req, res, next) =>{
//     try{

//         const { studentId } = req.params
//         const studentResult = await StudentServices.deleteStudentFromDB(studentId);

//         sendResponse(res, {
//             statusCode: httpStatus.OK,
//             success: true,
//             message: "Student data deleted successfully",
//             data: studentResult
//         })
//     }
//     catch(err){
//        next(err)
//        }
// }