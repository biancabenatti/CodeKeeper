const crypto = require("crypto");
const Cipher = require("../models/Cipher");
const { caesarEncrypt, caesarDecrypt } = require("../utils/caesar");
const AppError = require("../utils/AppError");

// CRIPTOGRAFAR
exports.encrypt = async (req, res, next) => {
  try {
    const { text, shift } = req.body;

    if (!text || shift === undefined) {
      throw new AppError("Texto e shift são obrigatórios", 400);
    }

    const encrypted = caesarEncrypt(text, Number(shift));

    const hash = crypto.randomBytes(8).toString("hex");

    await Cipher.create({
      hash,
      shift,
      used: false,
    });

    res.json({ encrypted, hash });

  } catch (err) {
    next(err);
  }
};

// DESCRIPTOGRAFAR
exports.decrypt = async (req, res, next) => {
  try {
    const { text, hash } = req.body;

    if (!text || !hash) {
      throw new AppError("Texto e hash são obrigatórios", 400);
    }

    const record = await Cipher.findOne({ hash });

    if (!record) {
      throw new AppError("Hash inválido", 400);
    }

    if (record.used) {
      throw new AppError("Hash já foi utilizado", 400);
    }

    const decrypted = caesarDecrypt(text, record.shift);

    record.used = true;
    await record.save();

    res.json({ decrypted });

  } catch (err) {
    next(err);
  }
};