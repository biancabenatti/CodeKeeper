import "./Descriptografar.css";

export default function Descriptografar({ setView }) {
  return (
    <div className="action-container-decripto">
      <div className="action-box-decripto">
        <div className="badge-decripto badge-sec-decripto">Decryption Module</div>
        <h2 className="title-decripto">Descriptografar</h2>
        
        <div className="action-form-decripto">
          <div className="input-group-decripto">
            <label>Mensagem Criptografada</label>
            <textarea placeholder="Cole o código cifrado aqui..." rows="3"></textarea>
          </div>
          
          <div className="input-group-decripto">
            <label>Hash de Autorização</label>
            <input type="text" placeholder="Insira o Hash gerado anteriormente" />
          </div>
          
          <button className="secondary-btn-decripto">Validar e Revelar</button>
        </div>

        <div className="result-area-decripto success-decripto">
          <label>Mensagem Original:</label>
          <div className="message-reveal-decripto">O código será revelado aqui...</div>
        </div>
      </div>
    </div>
  );
}