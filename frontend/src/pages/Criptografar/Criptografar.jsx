import { useState } from "react";
import "./Criptografar.css";

export default function Criptografar({ setView }) {
  return (
    <div className="action-container">

      <div className="action-box">
        <div className="badge">Encryption Module</div>
        <h2>Criptografar</h2>
        
        <div className="action-form">
          <div className="input-group">
            <label>Mensagem em Texto Claro</label>
            <textarea placeholder="Digite a mensagem confidencial..." rows="3"></textarea>
          </div>
          
          <div className="input-group">
            <label>Passo (Deslocamento)</label>
            <input type="number" placeholder="Ex: 3" />
          </div>
          
          <button className="primary-btn">Gerar Cifra e Chave</button>
        </div>

        {/* Área de Resultado - Só aparece após gerar */}
        <div className="result-area">
          <div className="result-item">
            <label>Texto Cifrado:</label>
            <code>k9v2...Lpx</code>
          </div>
          <div className="result-item highlight">
            <label>Hash (Chave Privada Única):</label>
            <div className="hash-display">SHA-256: 8jF2...9kL</div>
          </div>
          <p className="warning">⚠️ Esta chave expira após o primeiro uso.</p>
        </div>
      </div>
    </div>
  );
}