import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react"; 
import "./Login.css";
import API_URL from "../../services/api";
import { toastSuccess, toastError } from "../../utils/toast";

export default function Login({ setView, onLogin }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toastError("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toastError(data.msg || "Erro ao fazer login");
        return;
      }

      localStorage.setItem("token", data.token);
      toastSuccess("Acesso autorizado");
      
      setTimeout(() => {
        if (onLogin) onLogin();
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
        <ArrowLeft size={16} style={{ marginRight: '8px' }} /> VOLTAR
      </button>

      <div className="login-box">
        <div className="badge">Secure Access</div>
        <h2>Identificação</h2>
        <p className="login-subtitle">
          Insira suas credenciais para acesso ao terminal.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email do usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <div className="password-field-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
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