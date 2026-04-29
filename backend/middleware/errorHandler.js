module.exports = (err, req, res, next) => {
  console.error("🔥 ERRO:", err);

  let statusCode = err.status || 500;
  let message = err.message || "Erro interno do servidor";

  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Token inválido";
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    statusCode = 400;
    message = `${field} já está em uso`;
  }
  
  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expirado";
  }

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join(", ");
  }

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    msg: message,
  });
};