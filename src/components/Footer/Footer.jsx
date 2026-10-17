import d from "../../data/ivonelara";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <img src={d.logos.ivone} alt={d.nome} />
          <p style={{ margin: 0, fontWeight: 600 }}>Central de vendas · {d.contato.telefone}</p>
          <div><p className="label">Incorporação, realização e construção</p><img src={d.logos.cury} alt="Cury" /></div>
        </div>
        <p className="legal">{d.legal}</p>
      </div>
    </footer>
  );
}
