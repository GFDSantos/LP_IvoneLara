import d from "../../data/ivonelara";

export default function Diferenciais() {
  return (
    <section id="numeros">
      <div className="container center">
        <p className="eyebrow">O empreendimento</p>
        <h2 className="section-title">Números que fazem do Dona Ivone Lara um novo sonho seu</h2>
        <div className="numeros">
          {d.numeros.map((n) => <div className="numero" key={n.label}><strong>{n.numero}</strong><span>{n.label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
