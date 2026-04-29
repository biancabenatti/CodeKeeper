import { useState } from "react";
import "./Criptografar.css";
import API_URL from "../../services/api";
import { toastError, toastSuccess } from "../../utils/toast";

export default function Criptografar({ setView }) {
  const [text, setText] = useState("");
  const [shift, setShift] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEncrypt = async () => {
    if (!text || shift === "") {
      toastError("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/cipher/encrypt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          text,
          shift: Number(shift),
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        toastError(data?.msg || "Erro ao criptografar");
        return;
      }

      setResult(data);
      toastSuccess("Cifra gerada com sucesso!");

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
    setShift("");
    setResult(null);
  };

  return (
    <div className="action-container">

      <div className="action-box">
        <div className="badge">Encryption Module</div>
        <h2>Criptografar</h2>

        <div className="action-form">
          <div className="input-group">
            <label>Mensagem em Texto Claro</label>
            <textarea
              placeholder="Digite a mensagem confidencial..."
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Passo (Deslocamento)</label>
            <input
              type="number"
              placeholder="Ex: 3"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
            />
          </div>

          <div className="buttons-row">
            <button
              className="primary-btn"
              onClick={handleEncrypt}
              disabled={loading}
            >
              {loading ? "Gerando..." : "Gerar Cifra e Chave"}
            </button>

            <button className="secondary-btn2" onClick={handleClear}>
              Limpar
            </button>
          </div>
        </div>

        {result && (
          <div className="result-area">
            <div className="result-item">
              <label>Texto Cifrado:</label>
              <code onClick={() => handleCopy(result.encrypted)}>
                {result.encrypted}
              </code>
            </div>

            <div className="result-item">
              <label>Hash de Verificação:</label>
              <code className="hash-code" onClick={() => handleCopy(result.hash)}>
                {result.hash}
              </code>
            </div>

            <p className="warning">
              ⚠️ Esta chave pode ser utilizada apenas uma vez.
            </p>
          </div>
        )}
      </div>

      <div className="ambient-glow-green"></div>
    </div>
  );
}