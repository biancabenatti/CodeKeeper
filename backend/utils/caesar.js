function caesarEncrypt(text, shift) {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }

      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }

      return char;
    })
    .join("");
}

function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, 26 - shift);
}

module.exports = { caesarEncrypt, caesarDecrypt };