import { useEffect } from 'react'
import { useLocation } from 'react-router'

function pageLabel(pathname: string): string {
  if (/\/p\/?$/.test(pathname) || pathname.includes('/p/')) {
    return 'PDP'
  }
  if (pathname.includes('feminino')) {
    return 'PLP (feminino)'
  }
  return 'home'
}

function fireDemoError(label: string): void {
  throw new Error(`[mock_ecommerce] Erro simulado — ${label}`)
}

function fireDemoRejection(label: string): void {
  void Promise.reject(
    new TypeError(
      `[mock_ecommerce] Promise rejeitada — carrinho indisponível — ${label}`,
    ),
  )
}

export function DemoErrorTools() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(search)
    const label = pageLabel(pathname)
    const timers: number[] = []

    if (params.has('cry_simulate_error')) {
      timers.push(
        window.setTimeout(() => {
          fireDemoError(label)
        }, 1500),
      )
    }
    if (params.has('cry_simulate_rejection')) {
      timers.push(
        window.setTimeout(() => {
          fireDemoRejection(label)
        }, 1500),
      )
    }

    return () => {
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, [pathname, search])

  const label = pageLabel(pathname)

  return (
    <div id="cry-demo-error-actions" className="demo-error-actions">
      <button
        type="button"
        id="cry-demo-error-trigger"
        className="btn-demo-error btn-demo-error-fixed"
        aria-label="Disparar erro de teste para observabilidade"
        onClick={() => fireDemoError(label)}
      >
        Disparar erro
      </button>
      <button
        type="button"
        id="cry-demo-rejection-trigger"
        className="btn-demo-error btn-demo-error-fixed"
        aria-label="Disparar promise rejeitada (TypeError) de teste para observabilidade"
        onClick={() => fireDemoRejection(label)}
      >
        Disparar promise rejeitada
      </button>
    </div>
  )
}
