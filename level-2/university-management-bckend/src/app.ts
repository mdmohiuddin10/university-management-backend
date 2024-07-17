import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', StudentRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("hlw world");
});
console.log(process.cwd());

export default app;

// C:\p.hero\level-2\complete-project-setup
