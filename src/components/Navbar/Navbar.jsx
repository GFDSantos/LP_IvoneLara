import d, { linkWhats } from "../../data/ivonelara";

export default function Navbar({ abrirFormulario }) {
  return (
    <header className="navbar">
      <div className="container">
        <div className="nav-logos">
          <img src={d.logos.ivone} alt={d.nome} />
          <span className="sep" />
          <img className="cury" src={d.logos.cury} alt="Cury" />
        </div>
        <nav className="nav-links">
          <a href="#sobre">Dona Ivone</a>
          <a href="#lazer">Lazer</a>
          <a href="#plantas">Plantas</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <div className="nav-actions">
          <button className="btn-primary" onClick={abrirFormulario}>Solicitar Simulação</button>
          <a className="btn-primary btn-whats" href={linkWhats()} target="_blank" rel="noopener noreferrer">Solicitar Atendimento</a>
        </div>
      </div>
    </header>
  );
}
