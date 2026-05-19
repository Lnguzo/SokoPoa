const connectDB = async () => {
  console.log("🔄 Attempting DB connection...");

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ Database connected");
  } catch (error) {
    console.log(" Database connection failed:");
    console.log(error.message);
  }
};