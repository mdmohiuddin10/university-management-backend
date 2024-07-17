import { z } from 'zod';

const userValidationSchem = z.object({
    // id: z.string(),
    password : z.string({
        invalid_type_error: "Password must be string"
    }).max(20, {message: "password can not be more than 20 charactors"}).optional(),
    // needsPasswordChange: z.boolean().default(true).optional().default(true),
    // role: z.enum(["admin","student","faculty"]),
    // status: z.enum(["in-progress" , "blocked"]).default("in-progress"),
    // isDeleted: z.boolean().optional().default(false)
})

// hgfgiiihgieuhgiuifighifhbvbkguvhivhighuigghiug

export const UserValidationSchema = {
    userValidationSchem
}
