import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";


const createStudentIntoDB = async ( password: string, studentDatta: TStudent) =>{
    // if(await Student.isUserExists(studentDatta.id)){
    //    throw new Error("User already exists!!")
    // }

    // create a user object
    const userData: Partial<TUser> = {}

    // if password is not given use default password
    userData.password = password || (config.default_pasword as string)

    // set student role
    userData.role = "student"

    // set manually generated Id
    userData.id = "2030100001"

    // create a user
    const newUser =  await User.create(userData) 

    // create a student
    if(Object.keys(newUser).length){
        // set id, _id as user
        studentDatta.id = newUser.id;
        studentDatta.user = newUser._id;  //reference id

        const newStudent = await Student.create(studentDatta)
        return newStudent
    }
   
   // const student = new Student(studentDatta) //create an instance
   // if(await student.isUserExists(studentDatta.id)){
   //     throw new Error("User already exists!!")
   // }
   // const result =await student.save() //built in instance method 
   
    // return newUser;
   }

   export const UserServices = {
    createStudentIntoDB
   }
   