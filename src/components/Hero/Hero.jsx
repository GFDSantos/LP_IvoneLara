import d from "../../data/ivonelara";

export default function Hero() {
  const h = d.hero;
  return (
    <section className="hero" id="inicio">
      <div className="container grid-2">
        <div>
          <span className="badge">{h.badge}</span>
          <h1>{h.titulo} <br />{h.tituloDestaque}</h1>
          <p className="sub">{h.subtitulo}</p>
        </div>
        <div>
          <img className="hero-img" src={h.imagem} alt="Fachada do Residencial Dona Ivone Lara" />
          <p className="caption">{h.legenda}</p>
        </div>
      </div>
    </section>
  );
}
