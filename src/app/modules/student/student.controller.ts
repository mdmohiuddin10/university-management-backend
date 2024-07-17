import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
// import studentValidationSchema from "./student.validation";
// import studentValidationSchema from "./student.validation";



const getAllStudents = async(req:Request, res:Response, next: NextFunction) =>{
    try{
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
    }
    catch(err){
        next(err)
       }
}


const getSingleStudent = async(req:Request, res:Response, next: NextFunction) =>{
    try{

        const { studentId } = req.params
        const studentResult = await StudentServices.getSingleStudentFromDB(studentId);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student is retrived successfully",
            data: studentResult
        })
    }
    catch(err){
        next(err)
       }
}


const deleteStudent = async(req:Request, res:Response, next: NextFunction) =>{
    try{

        const { studentId } = req.params
        const studentResult = await StudentServices.deleteStudentFromDB(studentId);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student data deleted successfully",
            data: studentResult
        })
    }
    catch(err){
       next(err)
       }
}


export const StudentControllers = {
    // createStudent,
    getAllStudents,
    getSingleStudent,
    deleteStudent
}