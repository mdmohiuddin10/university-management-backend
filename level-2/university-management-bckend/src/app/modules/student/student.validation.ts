import { z } from 'zod';

const userNameValidationSchema = z.object({
    firstName: z.string().max(10, "name cannot be more than 30 characters").nonempty(),
    middleName: z.string().max(10, "name cannot be more than 30 characters").optional(),
    lastName: z.string().max(10, "name cannot be more than 30 characters").nonempty()
});

const guardianValidationSchema = z.object({
    fatherName: z.string().nonempty(),
    fatherOccupation: z.string().nonempty(),
    fatherContactNumber: z.string().nonempty(),
    motherName: z.string().nonempty(),
    motherOccupation: z.string().nonempty(),
    motherContactNumber: z.string().nonempty()
});

const localGuardianvalidationSchema = z.object({
    name: z.string().nonempty(),
    occupation: z.string().nonempty(),
    contactNo: z.string().nonempty(),
    address: z.string().nonempty()
});



const studentValidationSchema = z.object({
    id: z.string().nonempty(),
    password: z.string(),
    name: userNameValidationSchema,
    gender: z.enum(["male", "female", "others"]),
    dateOfBirth: z.string().optional(),
    email: z.string().email().nonempty(),
    contactNo: z.string().nonempty(),
    emergencyContactNumber: z.string().nonempty(),
    bloodGroup: z.enum(["A+", "A-", "Ab+", "O+", "O-"]).optional(),
    presentAddress: z.string().min(1),
    permanentAddress: z.string().min(1),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianvalidationSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(["active", "blocked"]).default("active"),
    isDeleted : z.boolean()
});

export default studentValidationSchema;
