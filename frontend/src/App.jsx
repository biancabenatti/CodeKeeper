import { useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [view, setView] = useState("home");
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
    setView("home");
  };

  const getTransform = () => {
    if (view === "login") return "translateX(-100vw)";
    if (view === "cadastro") return "translateX(-200vw)";
    return "translateX(0)";
  };


  return (
    <div className="main-wrapper">
      {!isLogged ? (
        <div className="slider-container" style={{ transform: getTransform() }}>
          <div className="page"><Home setView={setView} /></div>

          <div className="page">
            <Login setView={setView} onLogin={handleLogin} />
          </div>

          <div className="page"><Cadastro setView={setView} /></div>
        </div>
      ) : (
        <Dashboard onLogout={() => setIsLogged(false)} />
      )}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />
    </div>
  )
};
