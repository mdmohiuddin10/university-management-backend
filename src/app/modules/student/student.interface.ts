
import { Model, Types } from "mongoose";

export type TGourdian = {
        fatherName: string;
        fatherOccupation : string;
        fatherContactNumber : string;
        motherName: string;
        motherOccupation : string;
        motherContactNumber : string;
    }

export type TUserName = {
        firstName: string;
        middleName?: string;
        lastName: string 
    }

export type TLocalGuardian = {
    name : string;
    occupation : string;
    contactNo : string;
    address : string
}
    

export type TStudent =  {
    id: string,
    user: Types.ObjectId
    password: string,
    name: TUserName;
    gender: "male" | "female" | "others";
    email: string;
    dateOfBirth ?: string;
    contactNo : string;
    emergencyContactNumber : string;
    bloodGroup ?: "A+" | "A-" | "Ab+" | "O+" | "O-";
    presentAddress : string;
    permanentAddress : string;
    guardian : TGourdian;
    localGuardian : TLocalGuardian;
    profileImg ?: string;
    // isActive : "active" | "blocked";
    isDeleted: boolean

  }

//   for creating static
export interface StudentModel extends Model<TStudent> {
    isUserExists(id: string): Promise<TStudent | null>;
  }


// for creating instance
//   export type StudentMethods = {
//     isUserExists( id: string ) : Promise<TStudent | null>
//   }

//    export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>;