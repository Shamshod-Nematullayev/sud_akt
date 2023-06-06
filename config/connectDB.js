const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO).then(() => {
      console.log(`DB connection was successfull`);
    });
  } catch (err) {
    throw err.message;
  }
};

module.exports = { connectDB };
