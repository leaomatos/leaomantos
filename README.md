# Leão Matos — landing page

Landing page estática mobile-first inspirada no layout de referência enviado pelo cliente.

## Estrutura

- `index.html` — página principal e CTAs.
- `privacidade.html` — política de privacidade.
- `termos.html` — termos de uso.
- `anunciante.html` — identificação e transparência do anunciante.
- `styles.css` / `script.js` — interface, navegação e medição de conversões.

## Deploy no Render

- Service type: **Static Site**
- Build command: `true`
- Publish directory: `.`
- Branch: `main`
- Auto deploy: enabled

## Medição do WhatsApp

A tag GA4 `G-2F3N7WDVNZ` e o Google Tag Manager `GTM-M54FVN9T` estão instalados nas quatro páginas HTML. Os dois botões da página inicial usam o WhatsApp oficial `+55 75 93300-7637`.

Ao clicar num botão WhatsApp, o site envia:

- GA4: evento `whatsapp_click`;
- `dataLayer`: evento `whatsapp_click`, com `conversion_type: whatsapp`.

A medição registra o clique que abre o WhatsApp; não confirma que a pessoa enviou a mensagem. Para usar como conversão no Google Ads, marque `whatsapp_click` como evento principal no GA4 e importe-o no Google Ads, ou crie no Google Tag Manager um acionador de evento personalizado com o nome `whatsapp_click`. Um snippet direto de conversão do Google Ads só pode ser instalado quando o Google fornecer o respetivo `AW-...` e o `label` da conversão.

## Antes de ativar campanhas

1. Confirmar o e-mail, CNPJ, endereço e nome legal em todas as páginas e no perfil de pagamentos do Google Ads.
2. Confirmar que a atividade e a campanha têm as licenças/isenções aplicáveis. O site não deve anunciar crédito, quitação, intermediação financeira ou outro serviço que a empresa não possa prestar.
3. Concluir a verificação de anunciante e, se aplicável, a verificação de serviços financeiros do Google Ads/G2 antes de segmentar pesquisas financeiras no Brasil.
4. Usar o mesmo domínio `leaomatos.onrender.com` no URL final e no URL de visualização do anúncio; não utilizar encurtadores ou redirecionamentos para outro domínio.
5. Atualizar o domínio canónico em `index.html`, `robots.txt` e `sitemap.xml` se o endereço final for diferente.

O site foi revisto em 7 de outubro de 2026 contra as orientações oficiais sobre verificação de anunciante, verificação de serviços financeiros, deturpação, destino que não funciona e destino não correspondente. Isso não garante aprovação: a decisão também depende da conta, do anúncio, da segmentação, do histórico da conta e da documentação apresentada ao Google.

Tracking deployment verified: GA4/GTM and WhatsApp click event included.
