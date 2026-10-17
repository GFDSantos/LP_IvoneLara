import d from "../../data/ivonelara";

export default function Legado() {
  const g = d.legado;
  return (
    <section className="bg-cream" id="legado">
      <div className="container grid-2">
        <div>
          <p className="eyebrow">Homenagem Cury</p>
          <h2 className="section-title">{g.titulo}</h2>
          <p className="section-text">{g.texto}</p>
          <p className="quote">{g.frase}</p>
        </div>
        <div className="pair"><img src={g.imagem} alt="Dona Ivone Lara" /><img src={g.imagemFachada} alt="Portaria do residencial" /></div>
      </div>
    </section>
  );
}
