import "./Home.css"

export default function Home({ setView }) {
  return (
    <section id="banner">
      <div className="content">
        <div className="badge">Encryption Standard v1.0</div>
        <h1>
          <span className="gradient">CodeKeeper.</span>
        </h1>
        <p>Criptografe e descriptografe mensagens utilizando um dos métodos mais clássicos da história.</p>

        <div className="buttons">
          <button className="primary" onClick={() => setView("login")}>Login</button>
          <button className="secondary" onClick={() => setView("cadastro")}>Cadastrar-se</button>
        </div>
      </div>
      <div className="wave"></div>
    </section>
  );
}