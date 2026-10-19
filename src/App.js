import { useState } from "react";
import "./App.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/sections.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/Sobre";
import Legado from "./components/Legado/Legado";
import Diferenciais from "./components/Diferenciais/Diferenciais";
import Mobilidade from "./components/Mobilidade/Mobilidade";
import Lazer from "./components/Lazer/Lazer";
import Plantas from "./components/Plantas/Plantas";
import MasterPlan from "./components/MasterPlan/MasterPlan";
import Localizacao from "./components/Localizacao/Localizacao";
import Trust from "./components/Trust/Trust";
import Formulario from "./components/Formulario/Formulario";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Footer from "./components/Footer/Footer";

function App() {
  const [formularioAberto, setFormularioAberto] = useState(false);
  const abrir = () => setFormularioAberto(true);

  return (
    <>
      <Navbar abrirFormulario={abrir} />
      <Formulario aberto={formularioAberto} fecharFormulario={() => setFormularioAberto(false)} />
      <Hero />
      <Sobre />
      <Legado />
      <Diferenciais />
      <Mobilidade />
      <Lazer />
      <Plantas />
      <MasterPlan />
      <Localizacao />
      <Trust />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
