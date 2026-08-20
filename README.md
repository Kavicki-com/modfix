# ModFix — Ambientes Comerciais

Landing page da ModFix, reproduzida a partir do layout do Figma
([arquivo](https://www.figma.com/design/KCuSxtuEjZgs75SbFEVRmE/Modfix?node-id=11-560)).

Site estático — HTML, CSS e JavaScript puro, sem build e sem dependências.

## Estrutura

```
index.html            markup de todas as seções
css/style.css         design tokens do Figma + layout dos 3 breakpoints
js/main.js            catálogo de produtos, texturas decorativas, header fixo, scroll suave
assets/img/           fotos e logos (WebP / SVG)
assets/icons/         ícones (SVG)
```

## Breakpoints

Os três frames do Figma são reproduzidos 1:1:

| Frame do Figma | Media query        |
| -------------- | ------------------ |
| Mobile 360     | base (< 768px)     |
| Tablet 768     | `min-width: 768px` |
| Desktop 1366   | `min-width: 1024px`|

Em telas acima de 1366px o conteúdo trava em 1238px de largura (o mesmo
"content width" do frame desktop) e fica centralizado; os fundos seguem full-bleed.

## Seções

Ticker de oferta · Header · Hero · Métricas · Segmentos Atendidos ·
Equipamentos de Destaque (17 produtos) · Vantagens · Projetos 3D ·
Diferenciais · CTA · Footer · Botão flutuante de WhatsApp.

## Onde editar o conteúdo

- **Produtos** — array `PRODUCTS` em `js/main.js` (nome, descrição, código, imagem).
- **Cores e espaçamentos** — variáveis CSS em `:root` (`css/style.css`), espelhando
  as variables do Figma.
- **Contato** — busque por `wa.me` e `mailto:` no `index.html`.

## Rodar localmente

Basta abrir o `index.html` no navegador. Para um servidor local:

```bash
python3 -m http.server 8000
# http://localhost:8000
```
