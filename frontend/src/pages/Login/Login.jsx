import "./Login.css";

export default function Login({ setView, onLogin }) {
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Botão clicado!"); 
    
    if (onLogin) {
      onLogin(); 
    } else {
      console.error("A função onLogin não foi passada para o componente!");
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
        <p className="login-subtitle">Insira suas credenciais para acesso ao terminal.</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Usuário</label>
            <input type="text" placeholder="ID do Agente" />
          </div>
          
          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="login-button">
            Autenticar
          </button>
        </form>

        <div className="login-footer">
          <div className="forgot-password">
            <a href="#">Esqueceu a chave de acesso?</a>
          </div>
          
          <div className="no-account">
            <span>Não tem conta ainda?</span>
            <button className="text-link" onClick={() => setView("cadastro")}>
              Cadastre-se agora
            </button>
          </div>
        </div>
      </div>
      
      <div className="ambient-glow"></div>
    </div>
  );
}