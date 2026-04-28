import { useState } from "react";
import Criptografar from "../Criptografar/Criptografar";
import Descriptografar from "../Descriptografar/Descriptografar";
import "./Dashboard.css";
import logoImg from "/LogoGeral.png";

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("cripto");

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="logo-container">
          <img src={logoImg} alt="CodeKeeper System Logo" className="sidebar-logo" />
        </div>
        <nav>
          <button 
            className={activeTab === "cripto" ? "active" : ""} 
            onClick={() => setActiveTab("cripto")}
          >
            Criptografar
          </button>
          <button 
            className={activeTab === "decripto" ? "active" : ""} 
            onClick={() => setActiveTab("decripto")}
          >
            Descriptografar
          </button>
        </nav>
        <button className="logout-btn" onClick={onLogout}>Sair</button>
      </aside>

      <main className="dash-content">
        {activeTab === "cripto" ? <Criptografar /> : <Descriptografar />}
      </main>
    </div>
  );
}