import d from "../../data/ivonelara";

export default function Sobre() {
  const s = d.sobre;
  return (
    <section className="sobre" id="sobre">
      <div className="container grid-2">
        <div className="pair">{s.imagens.map((i) => <img key={i} src={i} alt="Dona Ivone Lara" />)}</div>
        <div>
          <p className="eyebrow">A grande dama do samba</p>
          <h2 className="section-title">{s.titulo}</h2>
          {s.textos.map((t) => <p key={t} className="section-text">{t}</p>)}
          <div className="chips">{s.chips.map((c) => <span key={c} className="chip">{c}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
