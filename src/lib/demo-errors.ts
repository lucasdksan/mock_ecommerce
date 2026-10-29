export type DemoErrorSpec = {
  pageKey: 'home' | 'plp' | 'pdp'
  buttonLabel: string
  ariaLabel: string
  fire: () => void
}

function fireHomeError(): void {
  throw new Error('[mock_ecommerce] Falha ao carregar destaques da home')
}

function firePlpError(): void {
  throw new TypeError(
    '[mock_ecommerce] Filtro de catálogo feminino retornou dados inválidos',
  )
}

function firePdpError(slug: string): void {
  throw new ReferenceError(
    `[mock_ecommerce] SKU indisponível no estoque — slug=${slug}`,
  )
}

export function getDemoErrorSpec(pathname: string): DemoErrorSpec {
  const pdpMatch = pathname.match(/^\/([^/]+)\/p\/?$/)
  if (pdpMatch) {
    const slug = pdpMatch[1]
    return {
      pageKey: 'pdp',
      buttonLabel: 'Disparar erro (PDP)',
      ariaLabel: 'Disparar erro de produto (PDP) para observabilidade',
      fire: () => firePdpError(slug),
    }
  }

  if (pathname.startsWith('/feminino')) {
    return {
      pageKey: 'plp',
      buttonLabel: 'Disparar erro (PLP)',
      ariaLabel: 'Disparar erro de listagem (PLP) para observabilidade',
      fire: firePlpError,
    }
  }

  return {
    pageKey: 'home',
    buttonLabel: 'Disparar erro (home)',
    ariaLabel: 'Disparar erro da home para observabilidade',
    fire: fireHomeError,
  }
}
