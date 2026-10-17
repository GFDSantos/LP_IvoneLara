import d from "../../data/ivonelara";

export default function Trust() {
  const t = d.trust;
  return (
    <section id="cury">
      <div className="container">
        <p className="eyebrow">{t.tag}</p>
        <h2 className="section-title">{t.titulo}</h2>
        <p className="section-text">{t.texto}</p>
        <div className="trust-grid">{t.numeros.map((n) => <div className="numero" key={n.label}><strong>{n.numero}</strong><span>{n.label}</span></div>)}</div>
        <div className="chips">{t.premios.map((p) => <span className="chip" key={p}>{p}</span>)}</div>
        <p className="section-text">{t.compromisso}</p>
      </div>
    </section>
  );
}
