import { Request, Response } from "express";
import { StudentServices } from "./student.service";
// import studentValidationSchema from "./student.validation";
// import studentValidationSchema from "./student.validation";






const getAllStudents = async(req:Request, res:Response) =>{
    try{
        const result = await StudentServices.getAllStudentsFromDB()
        res.status(200).json({
            success : true,
            message : "Students are retrive successfully",
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


const getSingleStudent = async(req:Request, res:Response) =>{
    try{

        const { studentId } = req.params
        const studentResult = await StudentServices.getSingleStudentFromDB(studentId);

        res.status(200).json({
            success : true,
            message : "Student is  retrive successfully",
            data : studentResult,
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


const deleteStudent = async(req:Request, res:Response) =>{
    try{

        const { studentId } = req.params
        const studentResult = await StudentServices.deleteStudentFromDB(studentId);

        res.status(200).json({
            success : true,
            message : "Student is  deleted successfully",
            data : studentResult,
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


export const StudentControllers = {
    // createStudent,
    getAllStudents,
    getSingleStudent,
    deleteStudent
}