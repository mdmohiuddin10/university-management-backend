import dotenv from 'dotenv';
dotenv.config();

import app from "./app";
// import config from "./app/config";
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

