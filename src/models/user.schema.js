import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import config from "../config/index.js";

const userSchema = new mongoose.Schema(
  {
    FisrtName: {
      type: String,
      required: [true, "FirstName is required"],
      maxLenght: [50, "name must be less then 50 char"],
    },
    LastName: {
      type: String,
      required: [true, "LastName is required"],
      maxLenght: [50, "name must be less then 50 char"],
    },
    UserName: {
      type: String,
      required: [true, "user name is required"],
      maxLenght: [50, "name must be less then 50 char"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "bro provide 8 character"],
      select: false
    },
    Gender: {
      type: String,
      required: [true, "Gender is required"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password,10)
})

userSchema.method = {
  comparePassword: async function(enterpassword){
    return await bcrypt.compare(enterpassword,this.password)
  },

  getJWTtoken: function(){
    jwt.sign({_id: this._id , name: this.UserName , email: this.email},config.JWT_SECRET,{
      expiresIn: config.JWT_EXPIRY
    })
  }
}
export default mongoose.model("User", userSchema);
