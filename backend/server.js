const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use("/auth", require("./routes/auth.routes"));
app.use("/cipher", require("./routes/cipher.routes"));

app.use(errorHandler);

app.listen(5000, () => {
  console.log("✔️ Servidor rodando na porta 5000");
});