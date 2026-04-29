import { useState } from "react";
import "./Login.css";
import API_URL from "../../services/api";
import { toastSuccess, toastError } from "../../utils/toast";

export default function Login({ setView, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toastError("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toastError(data.msg || "Erro ao fazer login");
        return;
      }


      localStorage.setItem("token", data.token);


      toastSuccess("Acesso autorizado");
      setTimeout(() => {
        if (onLogin) {
          onLogin();
        }
      }, 800);

    } catch (error) {
      console.error("Erro:", error);
      toastError("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={() => setView("home")}>
        <span className="arrow">←</span> VOLTAR
      </button>

      <div className="login-box">
        <div className="badge">Secure Access</div>
        <h2>Identificação</h2>
        <p className="login-subtitle">
          Insira suas credenciais para acesso ao terminal.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Usuário</label>
            <input
              type="text"
              placeholder="ID do Agente"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Autenticando..." : "Autenticar"}
          </button>
        </form>

        <div className="login-footer">
          <div className="forgot-password">
            <a href="#">Esqueceu a chave de acesso?</a>
          </div>

          <div className="no-account">
            <span>Não tem conta ainda?</span>
            <button
              className="text-link"
              onClick={() => setView("cadastro")}
            >
              Cadastre-se agora
            </button>
          </div>
        </div>
      </div>

      <div className="ambient-glow"></div>
    </div>
  );
}
