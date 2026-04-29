import { useState } from "react";
import "./Descriptografar.css";
import API_URL from "../../services/api";
import { toastError, toastSuccess } from "../../utils/toast";

export default function Descriptografar({ setView }) {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDecrypt = async () => {
    if (!text || !hash) {
      toastError("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/cipher/decrypt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          text,
          hash,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        toastError(data?.msg || "Erro ao descriptografar");
        return;
      }

      setResult(data);
      toastSuccess("Mensagem revelada com sucesso!");

    } catch (err) {
      console.error(err);
      toastError("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    toastSuccess("Copiado!");
  };

  const handleClear = () => {
    setText("");
    setHash("");
    setResult(null);
  };

  return (
    <div className="action-container-decripto">
      <div className="action-box-decripto">
        <div className="badge-decripto">Decryption Module</div>
        <h2>Descriptografar</h2>

        <div className="action-form-decripto">
          <div className="input-group-decripto">
            <label>Mensagem Criptografada</label>
            <textarea
              placeholder="Cole o código cifrado aqui..."
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="input-group-decripto">
            <label>Hash de Autorização</label>
            <input
              type="text"
              placeholder="Insira o Hash gerado anteriormente"
              value={hash}
              onChange={(e) => setHash(e.target.value)}
            />
          </div>

          <div className="buttons-row">
            <button
              className="primary-btn-decripto"
              onClick={handleDecrypt}
              disabled={loading}
            >
              {loading ? "Processando..." : "Validar e Revelar"}
            </button>

            <button
              className="secondary-btn-decripto"
              onClick={handleClear}
            >
              Limpar
            </button>
          </div>
        </div>

        {result && (
          <div className="result-area-decripto">
            <div className="result-item-decripto">
              <label>Mensagem Original:</label>
              <code onClick={() => handleCopy(result.decrypted)}>
                {result.decrypted}
              </code>
            </div>
          </div>
        )}
      </div>

      <div className="ambient-glow-green"></div>
    </div>
  );
}