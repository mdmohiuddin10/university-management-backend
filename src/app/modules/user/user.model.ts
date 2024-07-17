import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";

const userSchema = new Schema<TUser>({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum:  [ "admin" , "student" , "faculty"],
    },
    status : {
        type: String,
        enum: ["in-progress", "blocked"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    {
    timestamps: true,
    }
)



//   mangoose middleware/pre save middleware or hooks: wiil work on create() save()
userSchema.pre("save", async function(next){
    // console.log(this, "pre hook : we will save the data");
    // hashing password and save into DB
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; //doc
    // Store hash in your password DB.
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_round))
    next()   
  })

//   post save middleware/hooks
userSchema.post("save", function(doc, next){
    doc.password = " "
    // console.log(this, "post hook : we save the data");
    next()
})


export const User = model<TUser>('User', userSchema);





