import d from "../../data/ivonelara";

export default function Localizacao() {
  const c = d.localizacao;
  return (
    <section className="bg-cream" id="localizacao">
      <div className="container">
        <div className="center">
          <p className="eyebrow">Localização</p>
          <h2 className="section-title">{c.titulo}</h2>
          <p className="section-text">{c.texto}</p>
        </div>
        <div className="chips" style={{ justifyContent: "center" }}>{c.pontos.map((p) => <span className="chip" key={p}>{p}</span>)}</div>
        <div className="loc-fotos">
          {c.fotos.map((f) => <figure key={f.nome} style={{ margin: 0 }}><img src={f.src} alt={f.nome} loading="lazy" /><p className="caption">{f.nome}</p></figure>)}
        </div>
        <div className="grid-2">
          <div><img src={c.aerea} alt="Foto aérea da região" loading="lazy" /><p className="caption">Foto aérea</p></div>
          <div><img src={c.fotomontagem} alt="Fotomontagem do empreendimento" loading="lazy" /><p className="caption">Fotomontagem — perspectiva ilustrativa</p></div>
        </div>
      </div>
    </section>
  );
}
