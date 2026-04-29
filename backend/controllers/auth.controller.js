const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// CADASTRO
exports.register = async (req, res) => {
  const { username, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  await User.create({ username, password: hash });

  res.json({ msg: "Usuário criado" });
};

// LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) return res.status(404).json({ msg: "Usuário não existe" });

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) return res.status(401).json({ msg: "Senha inválida" });

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({ token });
};