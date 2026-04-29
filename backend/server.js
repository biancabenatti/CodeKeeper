const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./config/swagger");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/cipher", require("./routes/cipher.routes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(5000, () => {
  console.log("🔒 ==================================================== 🔒");
  console.log("Servidor rodando na porta 5000");
  console.log("Swagger (API Docs): http://localhost:5000/api-docs");
  console.log("🔒 ==================================================== 🔒");
});