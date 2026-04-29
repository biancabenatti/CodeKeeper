const crypto = require("crypto");
const Cipher = require("../models/Cipher");
const { caesarEncrypt, caesarDecrypt } = require("../utils/caesar");

// CRIPTOGRAFAR
exports.encrypt = async (req, res) => {
  const { text, shift } = req.body;

  const encrypted = caesarEncrypt(text, Number(shift));

  const hash = crypto.randomBytes(8).toString("hex");

  await Cipher.create({
    hash,
    shift,
    used: false,
  });

  res.json({ encrypted, hash });
};

// DESCRIPTOGRAFAR
exports.decrypt = async (req, res) => {
  const { text, hash } = req.body;

  const record = await Cipher.findOne({ hash });

  if (!record) return res.status(400).json({ msg: "Hash inválido" });

  if (record.used)
    return res.status(400).json({ msg: "Hash já foi utilizado" });

  const decrypted = caesarDecrypt(text, record.shift);

  record.used = true;
  await record.save();

  res.json({ decrypted });
};