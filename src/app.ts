/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response, NextFunction } from "express";
const app: Application = express();
import cors from "cors";
import { globaErrorHandler } from "./app/modules/middlewares/globalErrorHandler";
import { notFound } from "./app/modules/middlewares/notFound";
import router from "./app/routes";

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/', router)


app.get("/", (req: Request, res: Response) => {
  res.send("hlw world");
});
console.log(process.cwd());

// global error handler
app.use(globaErrorHandler)

// not found
app.use(notFound)

export default app;


