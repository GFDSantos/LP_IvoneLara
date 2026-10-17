import d from "../../data/ivonelara";

export default function Mobilidade() {
  const m = d.mobilidade;
  return (
    <section className="bg-cream" id="mobilidade">
      <div className="container grid-2">
        <div className="pair">{m.imagens.map((i) => <img key={i} src={i} alt="Bikes Lev" />)}</div>
        <div>
          <p className="eyebrow">{m.tag}</p>
          <h2 className="section-title">{m.titulo}</h2>
          <p className="section-text">{m.texto}</p>
          <p className="quote">{m.destaque}</p>
        </div>
      </div>
    </section>
  );
}
