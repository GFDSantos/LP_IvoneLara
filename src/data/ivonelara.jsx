import logoIvone from "../assets/images/logos/logo_ivone.png";
import logoCury from "../assets/images/logos/logo_cury.png";
import hero from "../assets/images/hero/fachada.jpg";
import ivoneCavaquinho from "../assets/images/sobre/ivone_cavaquinho.jpg";
import ivonePalco from "../assets/images/sobre/ivone_palco.jpg";
import ivoneFoto from "../assets/images/sobre/ivone_foto.jpg";
import portaria from "../assets/images/sobre/portaria.jpg";
import bicicletario from "../assets/images/lev/bicicletario_lev.jpg";
import ciclista from "../assets/images/lev/ciclista.jpg";
import aerea from "../assets/images/localizacao/aerea.jpg";
import fotoTerminal from "../assets/images/localizacao/foto_a.jpg";
import fotoTouring from "../assets/images/localizacao/foto_b.jpg";
import fotoMaua from "../assets/images/localizacao/foto_c.jpg";
import fotomontagem from "../assets/images/galeria/fotomontagem.jpg";
import masterplan from "../assets/images/masterplan/masterplan.jpg";
import masterplanNum from "../assets/images/masterplan/masterplan_numerado.jpg";
import plantaC from "../assets/images/plantas/tipo_c.jpg";
import plantaD from "../assets/images/plantas/tipo_d.jpg";
import plantaB from "../assets/images/plantas/tipo_b.jpg";
import plantaA from "../assets/images/plantas/tipo_a.jpg";

const lz = require.context("../assets/images/lazer", false, /\.jpg$/);
const l = (nome, key) => ({ nome, imagem: lz(`./${key}.jpg`) });

const ivonelara = {
  nome: "Residencial Dona Ivone Lara",
  logos: { ivone: logoIvone, cury: logoCury },
  contato: { whatsapp: "5521972973535", telefone: "+55 21 97297-3535" },

  hero: {
    badge: "1 e 2 quartos com varanda · lazer completo",
    titulo: "Onde o samba virou sentimento,",
    tituloDestaque: "nasce um novo sonho seu.",
    subtitulo:
      "No centro do Porto Maravilha, a Cury homenageia a Grande Dama do Samba com apartamentos de 1 e 2 quartos com varanda, áreas comuns entregues equipadas e decoradas e bikes elétricas para uso compartilhado.",
    imagem: hero,
    legenda: "Fachada — perspectiva ilustrativa",
  },

  sobre: {
    titulo: "Dona Ivone Lara: um talento que resistiu e revolucionou",
    textos: [
      "Nascida em 1922 e criada no Rio de Janeiro, Yvonne Lara da Costa cresceu em uma família humilde, mas com grande apreço pela música. Inspirada por seu tio instrumentista, comprou o primeiro cavaquinho — e dali vieram as primeiras notas, acordes e composições.",
      "Mulher, negra, formada em enfermagem e serviço social, foi pioneira ao usar a musicoterapia no tratamento de pacientes com transtornos mentais. Em ambientes majoritariamente masculinos, levava o samba latente no coração, até se tornar a 1ª mulher a integrar a ala dos compositores de uma escola de samba brasileira, assinando o samba-enredo “Os 5 Bailes da História do Rio”.",
      "Seu talento e persistência não apenas garantiram sua entrada naquele espaço: abriram as portas para todas as mulheres que vieram depois.",
    ],
    chips: ["Rainha", "Grande mestra", "Síntese do samba", "Estilista do contracanto", "Beleza do Rio", "Maior sambista de todos os tempos"],
    imagens: [ivoneCavaquinho, ivonePalco],
  },

  legado: {
    titulo: "Seu legado engrandece o Porto Maravilha",
    texto:
      "O Porto Maravilha é um dos berços do samba: abraçou e deu vida a tantos artistas inspirados no legado de Dona Ivone Lara. Por isso, a Cury tem o orgulho de homenagear uma das maiores representantes do gênero — aquela que lutou pelos seus direitos, acreditou no seu potencial e eternizou, na memória de todos os cariocas, o que é o verdadeiro “Sonho meu…”.",
    frase: "Afinal, sempre que ouvirmos Ivone cantar, toda a poesia vai pairar no ar e o Porto Maravilha também vai brilhar.",
    imagem: ivoneFoto,
    imagemFachada: portaria,
  },

  numeros: [
    { numero: "650", label: "unidades" },
    { numero: "1 e 2", label: "quartos com varanda" },
    { numero: "8", label: "elevadores" },
    { numero: "6.185,75 m²", label: "de área de terreno" },
    { numero: "19 + térreo", label: "pavimentos tipo + barrilete" },
    { numero: "33", label: "apartamentos por andar tipo" },
    { numero: "660", label: "vagas para bicicletas" },
    { numero: "20", label: "vagas para bicicletas elétricas" },
  ],

  mobilidade: {
    tag: "Cury + Lev: em sintonia com esse legado",
    titulo: "Onde o samba virou sentimento, ninguém fica parado",
    texto:
      "Inspirados na união que só o samba proporciona, surge uma nova parceria. Cury + Lev trazem um novo jeito de se mover pelo Porto, unindo mobilidade sustentável, praticidade e mais conexão entre pessoas. Serão disponibilizadas 20 bikes para uso compartilhado entre os condôminos, aproximando moradores e criando novos caminhos para explorar cada canto da cidade.",
    destaque: "Essa história vai continuar por todo o Rio!",
    imagens: [bicicletario, ciclista],
  },

  lazer: {
    titulo: "Felicidade é acordar com diversão dentro de casa",
    texto: "A paz que procuro, eu encontro aqui, bem forte: pra rotina toda encaixar, áreas comuns entregues equipadas e decoradas.",
    coberto: ["Delivery", "Lavanderia", "Mercadinho", "Coworking", "Sport bar", "Brinquedoteca", "Sala games", "Pet care", "Salão de festas", "Fitness", "Churrasqueiras", "Espaço zen", "Sala de jogos juvenil", "Bicicletário elétrico"],
    descoberto: ["Apoio churrasqueiras", "Fitness externo", "Apoio salão de festas", "Apoio quadra recreativa", "Quadra recreativa", "Espaço beer", "Piscina infantil", "Piscina adulto", "Solário", "Espaço bem-estar", "Play kids e play baby", "Praça de jogos", "Pet place", "Quadra beach tennis", "Apoio beach tennis"],
    itens: [
      l("Piscina adulto e infantil", "piscina_adulto_infantil"), l("Piscina", "piscina"), l("Espaço beer", "espaco_beer"),
      l("Churrasqueira", "churrasqueira"), l("Apoio salão de festas", "apoio_salao"), l("Salão de festas", "salao_festas"),
      l("Sport bar", "sport_bar"), l("Sala games", "sala_games"), l("Sala de jogos juvenil", "jogos_juvenil"),
      l("Fitness", "fitness"), l("Fitness externo", "fitness_externo"), l("Coworking", "coworking"),
      l("Brinquedoteca", "brinquedoteca"), l("Play kids", "play_kids"), l("Praça de jogos", "praca_jogos"),
      l("Quadra recreativa", "quadra"), l("Quadra beach tennis", "beach_tennis"), l("Pet place", "pet_place"),
      l("Pet care", "pet_care"), l("Espaço bem-estar", "bem_estar"), l("Espaço zen", "zen"),
      l("Delivery", "delivery"), l("Mercadinho", "mercadinho"), l("Lavanderia", "lavanderia"), l("Bicicletário", "bicicletario"),
    ],
  },

  plantas: {
    titulo: "Plantas pensadas para o seu jeito de viver",
    texto: "Todos os apartamentos têm varanda, e os dormitórios são entregues com piso laminado.",
    itens: [
      { nome: "1 Quarto com Varanda", detalhe: "Tipo C · finais 02 ao 07, 24, 31 e 32 · 2º ao 20º pav.", beneficio: "Piso laminado no quarto", imagem: plantaC },
      { nome: "1 Quarto com Varanda", detalhe: "Tipo D · finais 01 e 33 · 2º ao 20º pav.", beneficio: "Piso laminado no quarto", imagem: plantaD },
      { nome: "2 Quartos com Varanda", detalhe: "Tipo B · finais 08 ao 19, 22, 23 e 25 ao 30 · 2º ao 20º pav.", beneficio: "Piso laminado nos quartos", imagem: plantaB },
      { nome: "2 Quartos com Varanda", detalhe: "Tipo A · finais 20 e 21 · 2º ao 20º pav.", beneficio: "Piso laminado nos quartos", imagem: plantaA },
    ],
    aviso: "Decoração meramente ilustrativa. Móveis, equipamentos e revestimentos não são partes integrantes do contrato. Cotas de parede acabada, podendo sofrer alterações no decorrer da obra. Empreendimento em alvenaria estrutural: é proibido remover ou modificar paredes estruturais.",
  },

  masterplan: {
    titulo: "Master plan: áreas comuns entregues equipadas e decoradas",
    imagens: [masterplan, masterplanNum],
    itens: ["Portaria", "Pulmão de acesso", "Delivery", "Hall de acesso", "Lavanderia", "Mercadinho", "Coworking", "Sport bar", "Brinquedoteca", "Sala games", "Pet care", "Salão de festas", "Fitness", "Churrasqueiras", "Espaço zen", "Sala de jogos juvenil", "Apoio churrasqueiras", "Fitness externo", "Apoio salão de festas", "Apoio quadra recreativa", "Quadra recreativa", "Espaço beer", "Piscina infantil", "Piscina adulto", "Solário", "Espaço bem-estar", "Bicicletário", "Bicicletário elétrico", "Play kids", "Play baby", "Praça de jogos", "Pet place", "Quadra beach tennis", "Apoio beach tennis", "Área técnica", "Lixeira", "Reservatórios"],
    aviso: "Ilustração artística da masterplan. A vegetação da maquete representa artisticamente a fase adulta das espécies; o empreendimento será entregue com a vegetação implantada por meio de mudas, conforme o projeto paisagístico.",
  },

  localizacao: {
    titulo: "No centro do Porto Maravilha: esse é o seu lugar",
    texto: "Cultura, mobilidade e lazer a poucos passos de casa, entre a Zona Portuária, o Centro e a Zona Norte do Rio.",
    pontos: ["Av. Rodrigues Alves", "Praça Mauá", "Terminal Intermodal Gentileza", "Cidade do Samba", "Rodoviária do Rio", "Yup Star", "IMPA Tech", "Centro do Rio", "Bafo da Prainha", "Aquário", "Av. Francisco Bicalho", "Museu do Amanhã", "Av. Brasil", "Av. Presidente Vargas", "Sambódromo", "Cidade Nova", "Exporio", "Quinta da Boa Vista", "Quinta d'Or", "Estação de trem e metrô de São Cristóvão", "Maracanã", "TIG", "Centro de Tradições Nordestinas"],
    fotos: [{ src: fotoMaua, nome: "Praça Mauá" }, { src: fotoTouring, nome: "Edifício Touring" }, { src: fotoTerminal, nome: "Terminal Intermodal Gentileza" }],
    aerea,
    fotomontagem,
  },

  trust: {
    tag: "Quem constrói",
    titulo: "Ter um apartamento Cury é garantir qualidade, confiança e solidez",
    texto:
      "Com empreendimentos em 30 cidades do Brasil, a Cury é reconhecida pelo Prêmio Top Imobiliário, Prêmio Master Imobiliário e Ademi-RJ, além de ser certificada na categoria máxima de repassadora pela Caixa Econômica Federal, com ISO 9001 e nível A no PBQP-H, o máximo do Programa Brasileiro da Qualidade e Produtividade na Habitação.",
    numeros: [
      { numero: "60+", label: "anos de história" },
      { numero: "30", label: "cidades no Brasil" },
      { numero: "6.000+", label: "profissionais diretos e indiretos" },
      { numero: "B3", label: "empresa listada na bolsa" },
    ],
    premios: ["Premiada 14 vezes pelo Destaque Ademi", "Premiada 30 vezes pelo Top Imobiliário", "Premiada 13 vezes pelo Master Imobiliário", "PBQP-H nível A", "ABS Quality Evaluations", "Certificado de responsabilidade ambiental"],
    compromisso: "Compromisso 1%: a Cury destina 1% do lucro líquido a iniciativas que ampliam oportunidades, promovem a inclusão e impulsionam o desenvolvimento social, com gestão do Instituto Cury.",
  },

  ctaFinal: {
    eyebrow: "Fale com a gente",
    titulo: "Onde o samba virou sentimento, nasce um novo sonho seu",
    texto: "Solicite uma simulação ou fale com um especialista pelo WhatsApp. Tabela de preços e plantas completas são apresentadas em visita presencial.",
  },

  legal:
    "CCISA 154 Incorporadora Ltda. (Residencial Dona Ivone Lara). Autor do projeto/PRPA e responsável pela obra/PREO: Érico Franco Guimarães – CAU 21998171429. Projeto legal aprovado em 16/09/2026, conforme o processo nº 000258.000063/2026-91, emitido pela Prefeitura da Cidade do Rio de Janeiro. Para mais informações, consulte a central de vendas da Cury (CCISA 08 Consultoria Imobiliária Ltda.) – CRECI 23.670-J. Responsável técnico: Renato Silva Correia RJ-054793/O – Rua da Quitanda, nº 86, 7º andar, sala 701 – parte – Centro – CEP 20091-902 – Rio de Janeiro/RJ. As imagens apresentadas nos desenhos, artes, perspectivas, anúncios ou em qualquer outra forma de veiculação são meramente ilustrativas, bem como a reprodução da vegetação da maquete representa artisticamente a fase adulta das espécies. O empreendimento será entregue com a vegetação implantada por meio de mudas, conforme a especificação do projeto paisagístico. O projeto não possui vagas para veículos. Confira o memorial descritivo de clientes para mais informações. Consulte o corretor sobre o valor exato do benefício que a sua renda e a sua cidade dispõem.",
};

export const linkWhats = (msg = "Olá! Quero saber mais sobre o Residencial Dona Ivone Lara.") =>
  `https://wa.me/${ivonelara.contato.whatsapp}?text=${encodeURIComponent(msg)}`;

export default ivonelara;
