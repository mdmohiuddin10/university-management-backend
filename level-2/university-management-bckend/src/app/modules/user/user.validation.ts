import { z } from 'zod';

const userValidationSchem = z.object({
    id: z.string(),
    password : z.string().max(20, {message: "password can not be more than 20 charactors"}),
    needsPasswordChange: z.boolean().default(true).optional().default(true),
    role: z.enum(["admin","student","faculty"]),
    status: z.enum(["in-progress" , "blocked"]),
    isDeleted: z.boolean().optional().default(false)
})

// hgfgiiihgieuhgiu

export const UserValidationSchema = {
    userValidationSchem
}
