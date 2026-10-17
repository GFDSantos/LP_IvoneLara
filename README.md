# LP Residencial Dona Ivone Lara — Cury

Landing page em React (Create React App) do **Residencial Dona Ivone Lara**, Cury, no Porto Maravilha (Rio de Janeiro).
Estrutura baseada no modelo `LP_LuzesRioLamparina`: um componente por pasta e conteúdo centralizado em `src/data`.

## Rodar

```bash
npm install
npm start      # http://localhost:3000
npm run build  # gera /build para deploy
```

## Onde mexer

- **Textos, imagens, números, WhatsApp**: `src/data/ivonelara.jsx`
- **Cores e tamanho dos títulos**: `src/styles/variables.css` (`--cury-blue: #283587`, `--title-size: 1.8rem`)
- **Estilos das seções**: `src/styles/sections.css`
- **Formulário**: `Formulario.jsx` abre o WhatsApp +55 21 97297-3535 com os dados preenchidos. Há um `TODO` para ligar a um CRM/endpoint.

## Regras aplicadas

- Cabeçalho de cada bloco: azul Cury, negrito, 1.8rem (`--title-size`). Subtítulos: preto, 1.3rem (`--subtitle-size`). Demais textos: preto (`--text`).
- Todas as imagens com cantos arredondados.
- Plantas sem o m² no texto abaixo (confira se a imagem da planta traz a metragem).

## Imagens

Extraídas do Book oficial (perspectivas ilustrativas) e otimizadas. Troque pelos arquivos finais em alta antes de publicar.
`logos/logo_ivone.png` foi recortado do Book e pode ter pequenos ruídos de textura: substitua pelo arquivo vetorial/PNG oficial se tiver.
