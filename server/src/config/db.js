import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ourcampuskart_db_user:PvTnx6DFGqSLyCY0@cluster0.8mresi6.mongodb.net/portfolio"
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;