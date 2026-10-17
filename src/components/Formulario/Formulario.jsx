import { useState } from "react";
import d, { linkWhats } from "../../data/ivonelara";

const vazio = { nome: "", telefone: "", email: "", aceite: false };

export default function Formulario({ aberto, fecharFormulario }) {
  const [enviado, setEnviado] = useState(false);
  const [dados, setDados] = useState(vazio);

  if (!aberto) return null;

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setDados({ ...dados, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar a um endpoint real (CRM, planilha, e-mail, etc).
    // Os dados capturados estão disponíveis em `dados`.
    const msg = `Olá! Sou ${dados.nome} (${dados.telefone}, ${dados.email}) e quero solicitar uma simulação do ${d.nome}.`;
    window.open(linkWhats(msg), "_blank", "noopener");
    setEnviado(true);
  };

  const fecharEResetar = () => {
    fecharFormulario();
    setTimeout(() => { setEnviado(false); setDados(vazio); }, 300);
  };

  return (
    <div className="overlay" onClick={fecharEResetar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="fechar" onClick={fecharEResetar} aria-label="Fechar">×</button>

        {!enviado ? (
          <>
            <h3>Solicitar simulação</h3>
            <p className="lead">Preencha seus dados e um especialista vai fazer a simulação do {d.nome} para você.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" required placeholder="Seu nome completo" value={dados.nome} onChange={handleChange} />

              <label htmlFor="telefone">WhatsApp</label>
              <input id="telefone" name="telefone" type="tel" required placeholder="(21) 90000-0000" value={dados.telefone} onChange={handleChange} />

              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" required placeholder="voce@email.com" value={dados.email} onChange={handleChange} />

              <label className="aceite">
                <input type="checkbox" name="aceite" required checked={dados.aceite} onChange={handleChange} />
                Concordo em receber contato da Cury sobre este empreendimento, conforme a LGPD.
              </label>

              <button className="btn-primary" type="submit">Enviar</button>
              <p className="form-note">Ao enviar, você concorda em ser contatado pela equipe de vendas do {d.nome}.</p>
            </form>
          </>
        ) : (
          <div className="form-success">
            <h3>Recebemos seu contato</h3>
            <p>Um especialista do {d.nome} vai falar com você em breve. Obrigado pelo interesse!</p>
          </div>
        )}
      </div>
    </div>
  );
}
