import { useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import "./App.css";

export default function App() {
  const [view, setView] = useState("home");
  const getTransform = () => {
    if (view === "login") return "translateX(-100vw)";
    if (view === "cadastro") return "translateX(-200vw)";
    return "translateX(0)";
  };

  return (
    <div className="main-wrapper">
      <div className="slider-container" style={{ transform: getTransform() }}>
        
        <div className="page">
          <Home setView={setView} />
        </div>

        <div className="page">
          <Login setView={setView} />
        </div>

        <div className="page">
          <Cadastro setView={setView} />
        </div>

      </div>
    </div>
  );
}