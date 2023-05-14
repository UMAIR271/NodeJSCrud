import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb+srv://admin:admin@cluster0.shfhh1b.mongodb.net/CRUD?retryWrites=true&w=majority",
  JWT_SECRET : process.env.JWT_SECRET || "yoursecret",
  JWT_EXPIRY : process.env.JWT_SECRET || "30d"
};

export default config;
