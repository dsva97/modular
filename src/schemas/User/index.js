import { Schema, model } from "mongoose";

export const userSchema = new Schema({
  name: String,
  email: String,
});

export const User = model("User", userSchema);
