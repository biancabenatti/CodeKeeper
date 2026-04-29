//Conexão com MongoDB
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✔️ MongoDB conectado");
  } catch (err) {
    console.log("❌ Erro MongoDB:", err);
  }
};

module.exports = connectDB;