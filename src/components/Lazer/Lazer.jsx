import { useState } from "react";
import d from "../../data/ivonelara";

export default function Lazer() {
  const z = d.lazer;
  const [aberta, setAberta] = useState(null);
  return (
    <section id="lazer">
      <div className="container">
        <div className="center">
          <p className="eyebrow">Lazer completo</p>
          <h2 className="section-title">{z.titulo}</h2>
          <p className="section-text">{z.texto}</p>
        </div>
        <div className="lazer-listas">
          <div className="box"><h3>Lazer coberto</h3><ul>{z.coberto.map((i) => <li key={i}>{i}</li>)}</ul></div>
          <div className="box"><h3>Lazer descoberto</h3><ul>{z.descoberto.map((i) => <li key={i}>{i}</li>)}</ul></div>
        </div>
        <div className="galeria">
          {z.itens.map((i) => (
            <figure key={i.nome} onClick={() => setAberta(i)}>
              <img src={i.imagem} alt={i.nome} loading="lazy" />
              <figcaption>{i.nome}</figcaption>
            </figure>
          ))}
        </div>
        <p className="caption center">Imagens: perspectivas ilustrativas</p>
      </div>
      {aberta && (
        <div className="overlay" onClick={() => setAberta(null)}>
          <div className="modal wide" onClick={(e) => e.stopPropagation()}>
            <button className="fechar" onClick={() => setAberta(null)} aria-label="Fechar">×</button>
            <img src={aberta.imagem} alt={aberta.nome} />
            <p className="caption">{aberta.nome} — perspectiva ilustrativa</p>
          </div>
        </div>
      )}
    </section>
  );
}
