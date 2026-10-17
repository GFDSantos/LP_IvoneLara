import { useState } from "react";
import d from "../../data/ivonelara";

export default function Plantas() {
  const p = d.plantas;
  const [aberta, setAberta] = useState(null);
  return (
    <section className="bg-cream" id="plantas">
      <div className="container">
        <div className="center">
          <p className="eyebrow">Plantas</p>
          <h2 className="section-title">{p.titulo}</h2>
          <p className="section-text">{p.texto}</p>
        </div>
        <div className="plantas">
          {p.itens.map((i) => (
            <div className="planta" key={i.detalhe} onClick={() => setAberta(i)}>
              <img src={i.imagem} alt={i.nome} loading="lazy" />
              <h3>{i.nome}</h3>
              <p>{i.detalhe}</p>
              <p><strong>Comprou, ganhou:</strong> {i.beneficio}</p>
              <span className="ampliar">Ampliar +</span>
            </div>
          ))}
        </div>
        <p className="caption center" style={{ maxWidth: 820, margin: "24px auto 0", textTransform: "none", lineHeight: 1.6 }}>{p.aviso}</p>
      </div>
      {aberta && (
        <div className="overlay" onClick={() => setAberta(null)}>
          <div className="modal wide" onClick={(e) => e.stopPropagation()}>
            <button className="fechar" onClick={() => setAberta(null)} aria-label="Fechar">×</button>
            <h3>{aberta.nome}</h3>
            <img src={aberta.imagem} alt={aberta.nome} />
            <p className="caption">{aberta.detalhe}</p>
          </div>
        </div>
      )}
    </section>
  );
}
