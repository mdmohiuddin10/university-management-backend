import { Schema, model } from 'mongoose';
import { StudentModel, TGourdian, TLocalGuardian, TStudent, TUserName } from './student.interface';
import dotenv from 'dotenv';
dotenv.config();


// import validator from 'validator';

const userNameSchema = new Schema<TUserName>({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [10, "name cannot be more than 30 characters"], // Corrected maxlength value
        // validate: {
        //     validator: function(value) {
        //         const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1);
        //         return firstNamestr === value;
        //     },
        //     message: props => `${props.value} is not capitalized`
        // }
    },
        middleName : {
            type: String, 
            trim: true,
            maxlength: [10, "name cannot be more than 30 character"]
        },
        lastName : {
            type: String, 
            required : true,
            trim: true,
            maxlength: [10, "name cannot be more than 30 character"],
            // validate: {
            //     validator: (value: string)=>validator.isAlpha(value),
            //     message: '{VALUE} is not capitalized'
            // },
        }
})


const guardianSchema = new Schema<TGourdian>({
        fatherName: {type: String, required: true},
        fatherOccupation: {type: String, required: true},
        fatherContactNumber: {type: String, required: true},
        motherName: {type: String, required: true},
        motherOccupation: {type: String, required: true},
        motherContactNumber: {type: String, required: true},
})


const localGuardianSchema = new Schema<TLocalGuardian>({
        name: {type: String, required: true},
        occupation: {type: String, required: true},
        contactNo: {type: String, required: true},
        address: {type: String, required: true},
})



const studentSchema = new Schema<TStudent, StudentModel>({
    id: { type: String, required: true, unique: true},
    user:  {
        type: Schema.Types.ObjectId,
        required: [true, "Uer ID must be required"],
        unique: true,
        ref: "User"
    },
    name: {
        type: userNameSchema,
        required: [true, "Name is required"],
    },
    gender : {
        type: String,
        enum: {
            values:  ["male" , "female", "others"],
            message: '{VALUE} is not valid'
        },
        required: true
    },
    dateOfBirth : {
        type : String
    },
    email : {
        type : String,
        required: true,
        unique: true,
        // validate: {
        //     validator: (value: string)=> validator.isEmail(value),
        //      message: '{VALUE} is not capitalized'
        // },
    },
    contactNo : {
        type: String, 
        required: true,
    },
    emergencyContactNumber : {
        type: String, 
        required: true,
    },
    bloodGroup : {
        type: String,
        enum:  ["A+" , "A-", "Ab+", "O+", "O-"]
    },
    presentAddress :  {
        type: String, 
        required: true,
    },
    permanentAddress :  {
        type: String, 
        required: true,
    },
    guardian : {
        type: guardianSchema,
        required: true
    },
    localGuardian : {
        type: localGuardianSchema,
        required: true
    },
    profileImg : {
        type : String,
    },
    // isActive :{
    //     type: String,
    //     enum:  ["active", "blocked"],
    //     default: "active"
    // },
    isDeleted : {
        type: Boolean,
        default : false
    }

  },
{
    toJSON : {
        virtuals: true,
    }
});


//   virtual 
studentSchema.virtual("fullName").get(function(){
    return this?.name?.firstName +" " + this.name.middleName + " " + this?.name?.lastName;
})





// qurey middlewaqre 
studentSchema.pre("find", function(next){
    this.find({isDeleted : { $ne : true}})
    next()
 
})

// qurey middlewaqre 
studentSchema.pre("findOne", function(next){
    this.findOne({isDeleted : { $ne : true}})
    next()
 
})


// qurey middlewaqre 
studentSchema.pre("aggregate", function(next){
    this.pipeline().unshift({ $match : {isDeleted : {$ne : true}}})
    next()
 
})







//   creating a custom static method
studentSchema.statics.isUserExists = async function(id: string){
    const existingUser = await Student.findOne({id})
    return existingUser
}



//   creating a custom instance method
//   studentSchema.methods.isUserExists = async function(id: string){
//     const existingUser = await Student.findOne({ id})
//     return existingUser
//   }


  export const Student = model<TStudent, StudentModel>('Student', studentSchema)