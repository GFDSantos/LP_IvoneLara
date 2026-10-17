import d from "../../data/ivonelara";

export default function MasterPlan() {
  const m = d.masterplan;
  return (
    <section id="masterplan">
      <div className="container">
        <div className="center"><p className="eyebrow">Implantação</p><h2 className="section-title">{m.titulo}</h2></div>
        <div className="grid-2">{m.imagens.map((i) => <img key={i} src={i} alt="Master plan" loading="lazy" />)}</div>
        <ol className="mp-lista">{m.itens.map((t, i) => <li key={t}><b>{String(i + 1).padStart(2, "0")}</b>{t}</li>)}</ol>
        <p className="caption" style={{ textTransform: "none", lineHeight: 1.6 }}>{m.aviso}</p>
      </div>
    </section>
  );
}
