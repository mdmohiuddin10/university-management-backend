import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";



const router = express.Router()

const shenaBahini = (name)=>{
return (req: Request, res: Response, next: NextFunction)=>{
    console.log(`I am a middleware ${name}`);

    // validation
    // next()
}
}


// will call controller
router.post("/create-student",shenaBahini("validRequest"), UserControllers.createStudent)



export const UserRoutes = router;