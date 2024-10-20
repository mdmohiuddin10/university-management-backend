import { TStudent } from "./student.interface";
import { Student } from "./student.model";




const createStudentIntoDB = async (studentDatta: TStudent) =>{

    
 if(await Student.isUserExists(studentDatta.id)){
    throw new Error("User already exists!!")
 }

 const result =  await Student.create(studentDatta) //built in static method



// const student = new Student(studentDatta) //create an instance
// if(await student.isUserExists(studentDatta.id)){
//     throw new Error("User already exists!!")
// }
// const result =await student.save() //built in instance method 


 return result;
}



const getAllStudentsFromDB = async () =>{
    const result  = await Student.find()
    return result
}


const getSingleStudentFromDB = async (id: string) =>{
    // const result  = await Student.findOne({id})
    const result = await Student.aggregate([ {$match : {id: id}} ])
    return result
}

const deleteStudentFromDB = async (id: string) =>{
    const result  = await Student.updateOne({id}, {isDeleted : true})
    return result
}




export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB, 
    deleteStudentFromDB
}