import "./Cadastro.css";

export default function Cadastro({ setView }) {
  return (
    <div className="cadastro-container">
      {/* Botão Voltar para Home */}
      <button className="back-button" onClick={() => setView("home")}>
        <span className="arrow">←</span> VOLTAR
      </button>

      <div className="cadastro-box">
        <h2>Registro</h2>
        <p className="cadastro-subtitle">Crie sua identidade digital criptografada.</p>
        
        <form className="cadastro-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-row">
            <div className="input-group">
              <label>Nome do Agente</label>
              <input type="text" placeholder="Ex: Alan Turing" />
            </div>
          </div>

          <div className="input-group">
            <label>Email de Comunicação</label>
            <input type="email" placeholder="agente@codekeeper.com" />
          </div>
          
          <div className="input-row">
            <div className="input-group">
              <label>Chave de Acesso (Senha)</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="input-group">
              <label>Confirmar Chave</label>
              <input type="password" placeholder="••••••••" />
            </div>
          </div>
          
          <button type="submit" className="cadastro-button">
            Finalizar Registro
          </button>
        </form>

        <div className="cadastro-footer">
          <div className="already-have">
            <span>Já possui autorização?</span>
            <button className="text-link" onClick={() => setView("login")}>
              Fazer Login agora
            </button>
          </div>
        </div>
      </div>
      
      <div className="ambient-glow-green"></div>
    </div>
  );
}