import dotenv from 'dotenv';
dotenv.config();

import app from "./app";
// import config from "./app/config";
import mongoose from "mongoose";
import config from './app/config';

async function main() {
  try {
    // await mongoose.connect(process.env.DATABASE_URL as string);
    await mongoose.connect(config.database_url as string);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

