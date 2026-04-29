import { useState } from "react";
import "./Cadastro.css";
import API_URL from "../../services/api";
import { toastSuccess, toastError } from "../../utils/toast";

export default function Cadastro({ setView }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toastError("Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      toastError("As senhas não coincidem");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      let data;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        toastError(data?.msg || `Erro ${response.status}`);
        return;
      }

      toastSuccess(data.msg || "Usuário criado com sucesso!");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        setView("login");
      }, 1500);

    } catch (error) {
      console.error("Erro:", error);
      toastError("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-container">
      <button className="back-button" onClick={() => setView("home")}>
        <span className="arrow">←</span> VOLTAR
      </button>

      <div className="cadastro-box">
        <h2>Registro</h2>
        <p className="cadastro-subtitle">
          Crie sua identidade digital criptografada.
        </p>

        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <label>Nome do Agente</label>
              <input
                type="text"
                placeholder="Ex: Alan Turing"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email de Comunicação</label>
            <input
              type="email"
              placeholder="agente@codekeeper.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Chave de Acesso</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            

            <div className="input-group">
              <label>Confirmar Chave</label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="cadastro-button" disabled={loading}>
            Finalizar Registro
          </button>
        </form>

        <div className="cadastro-footer">
          <div className="already-have">
            <span>Já possui autorização?</span>
            <button
              className="text-link"
              onClick={() => setView("login")}
            >
              Fazer Login agora
            </button>
          </div>
        </div>
      </div>

      <div className="ambient-glow-green"></div>
    </div>
  );
}
