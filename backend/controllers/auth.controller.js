const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

// CADASTRO
exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new AppError("Preencha todos os campos", 400);
    }

    if (password.length < 6) {
      throw new AppError("A senha deve ter no mínimo 6 caracteres", 400);
    }

    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/;

    if (!strongPasswordRegex.test(password)) {
      throw new AppError(
        "A senha deve conter maiúscula, minúscula, número e caractere especial",
        400
      );
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({
      username,
      email,
      password: hash,
    });

    res.json({ msg: "Usuário criado com sucesso" });

  } catch (err) {
    next(err); 
  }
};

// LOGIN
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Email e senha são obrigatórios", 400);
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError("Usuário não existe", 404);
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new AppError("Senha inválida", 401);
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ token });

  } catch (err) {
    next(err);
  }
};