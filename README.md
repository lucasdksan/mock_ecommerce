# Mock Ecommerce

Loja mock em React + TypeScript + Vite, inspirada em uma vitrine de calçados. Serve para demos de navegação (home, PLP, PDP), carrinho e integração com observabilidade.

## Stack

- React 19 + TypeScript
- Vite 8
- React Router 8
- React Compiler (via Babel)

## Páginas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/feminino` | PLP (listagem feminina) |
| `/:slug/p` | PDP (detalhe do produto) |

## Como rodar

```bash
pnpm install
pnpm dev
```

Outros scripts:

```bash
pnpm build    # build de produção
pnpm preview  # preview do build
pnpm lint     # ESLint
```

## Observabilidade

O script de observabilidade é injetado em `src/lib/observability.ts` na inicialização do app.

Para sobrescrever a URL padrão, copie `.env.example` para `.env` e defina:

```env
VITE_OBSERVABILITY_SCRIPT_URL=https://seu-endpoint/script/...
```

### Demo de erros

Na interface há um botão fixo (canto inferior direito) que dispara um erro síncrono diferente em cada página:

- **home** — `Error` ao carregar destaques
- **PLP (`/feminino`)** — `TypeError` no filtro de catálogo
- **PDP (`/:slug/p`)** — `ReferenceError` de SKU indisponível (inclui o slug do produto)

Também é possível acionar via query string (após ~1,5s):

- `?cry_simulate_error`

Exemplo: `http://localhost:5173/feminino?cry_simulate_error`

## Estrutura

```
src/
  components/   # Layout, ProductCard, DemoErrorTools
  context/      # Carrinho (CartProvider)
  data/         # Catálogo mock
  hooks/        # useCart
  lib/          # Observabilidade
  pages/        # Home, PLP, PDP
  styles/       # CSS global
```
