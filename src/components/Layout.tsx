import { Link, Outlet, useLocation } from 'react-router'
import { useCart } from '../hooks/useCart'
import { DemoErrorTools } from './DemoErrorTools'

const NAV_ITEMS = [
  { to: '/', label: 'Lançamentos', key: 'home' },
  { to: '/feminino', label: 'Feminino', key: 'feminino' },
  { to: '#', label: 'Masculino', key: 'masculino' },
  { to: '#', label: 'Infantil', key: 'infantil' },
  { to: '#', label: 'Bolsas & Mochilas', key: 'bolsas' },
  { to: '#', label: 'Esporte', key: 'esporte' },
  { to: '#', label: 'Marcas', key: 'marcas' },
  { to: '#', label: 'Promoções', key: 'promocoes' },
] as const

function navIsActive(pathname: string, key: string): boolean {
  if (key === 'home') return pathname === '/'
  if (key === 'feminino') return pathname.startsWith('/feminino')
  return false
}

function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="container">
        <div className="utility-links">
          <a href="#lojas">Nossas lojas</a>
          <a href="#troca">Solicitar troca</a>
        </div>
        <span className="utility-phone">(11) 3327-3327</span>
      </div>
    </div>
  )
}

function CouponBar() {
  function copyCoupon() {
    void navigator.clipboard.writeText('MAIS05')
  }

  return (
    <div className="coupon-bar">
      <div className="container">
        <span>
          Primeira compra com <strong>5% OFF</strong>
        </span>
        <span className="coupon-code">
          MAIS05{' '}
          <button type="button" className="btn-copy" onClick={copyCoupon}>
            COPIAR
          </button>
        </span>
      </div>
    </div>
  )
}

function SiteHeader() {
  const { count } = useCart()
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          Shop
          <small>Demo</small>
        </Link>
        <div className="search-wrap">
          <input
            type="search"
            placeholder="Procurar produto"
            aria-label="Busca"
          />
        </div>
        <div className="header-actions">
          <a href="#entrar">Entrar</a>
          <a href="#carrinho">
            Carrinho <span className="cart-badge">{count}</span>
          </a>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                {item.to.startsWith('/') ? (
                  <Link
                    to={item.to}
                    className={
                      navIsActive(pathname, item.key) ? 'active' : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.to}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export function BenefitsBar() {
  return (
    <section className="benefits-bar">
      <div className="container benefits">
        <div className="benefit">
          <div className="benefit-icon">↺</div>
          <strong>Primeira troca grátis</strong>
          <span>Para todo o Brasil</span>
        </div>
        <div className="benefit">
          <div className="benefit-icon">10×</div>
          <strong>10x sem juros</strong>
          <span>No cartão de crédito</span>
        </div>
        <div className="benefit">
          <div className="benefit-icon">🚚</div>
          <strong>Frete grátis</strong>
          <span>A partir de R$ 139</span>
        </div>
        <div className="benefit">
          <div className="benefit-icon">%</div>
          <strong>5% no Pix</strong>
          <span>Pagamento instantâneo</span>
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <h2>Cadastre-se e fique por dentro</h2>
        <p>Receba novidades e ofertas exclusivas por e-mail.</p>
        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <input type="email" placeholder="Seu e-mail" aria-label="E-mail" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom">
            <p>Copyright © 2026 Shop Demo — Demo React para testes</p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Institucional</h3>
            <ul>
              <li>
                <a href="#sobre">Conheça a Shop Demo</a>
              </li>
              <li>
                <a href="#lojas">Nossas lojas</a>
              </li>
              <li>
                <a href="#trabalhe">Trabalhe conosco</a>
              </li>
              <li>
                <a href="#contato">Fale conosco</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Ajuda</h3>
            <ul>
              <li>
                <a href="#faq">Perguntas frequentes</a>
              </li>
              <li>
                <a href="#trocas">Trocas e devoluções</a>
              </li>
              <li>
                <a href="#entregas">Entregas</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Conta</h3>
            <ul>
              <li>
                <a href="#conta">Minha conta</a>
              </li>
              <li>
                <a href="#pedidos">Meus pedidos</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Em destaque</h3>
            <ul>
              <li>
                <a href="#esporte">Shop Demo Esporte</a>
              </li>
              <li>
                <a href="#bf">Black Friday</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="payment-row">
          <span className="payment-badge">Visa</span>
          <span className="payment-badge">Master</span>
          <span className="payment-badge">Elo</span>
          <span className="payment-badge">Pix</span>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © 2026 Shop Demo — Demo React para testes de
            observabilidade
          </p>
        </div>
      </div>
    </footer>
  )
}

export function Layout() {
  return (
    <>
      <UtilityBar />
      <CouponBar />
      <SiteHeader />
      <Outlet />
      <DemoErrorTools />
    </>
  )
}
