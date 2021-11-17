import { MONGO_HOST, MONGO_NAME, MONGO_USER, MONGO_PASS } from "../config";
import mongoose from "mongoose";

export const connectMongoDB = () =>
  mongoose.connect(
    `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_NAME}`,
    { useNewUrlParser: true }
  );
