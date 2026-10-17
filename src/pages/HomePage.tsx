import { Link } from 'react-router'
import {
  BenefitsBar,
  Newsletter,
  SiteFooter,
} from '../components/Layout'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'

const HOME_FEATURED_SLUGS = [
  'mini-melissa-possession-infantil-32409-begedourado-0852409257',
  'tenis-feminino-casual-via-marte',
  'chinelo-feminino-kenner-kivah',
  'sandalia-feminina-salto-grosso-mississipi',
]

export function HomePage() {
  const featured = HOME_FEATURED_SLUGS.map(
    (slug) => products.find((p) => p.slug === slug)!,
  )

  return (
    <>
      <div className="promo-strip">
        #Praquepagarmais — Frete grátis a partir de R$ 139
      </div>

      <section className="hero-banner">
        <div className="container">
          <h1>Calçados para toda a família</h1>
          <p>
            Tênis, sandálias, botas e acessórios das melhores marcas. Conforto,
            estilo e os melhores preços online.
          </p>
          <Link className="btn-outline-light" to="/feminino">
            Ver ofertas
          </Link>
        </div>
      </section>

      <div className="banner-row container">
        <a className="banner-tile" href="#converse">
          Converse — Esportivos
        </a>
        <Link className="banner-tile" to="/feminino">
          Botas femininas
        </Link>
        <a className="banner-tile" href="#acessorios">
          Acessórios com estilo
        </a>
        <a className="banner-tile" href="#remarcados">
          Remarcados
        </a>
      </div>

      <section className="size-shop">
        <div className="container">
          <h2>Compre por tamanho</h2>
          <div className="size-columns">
            <div className="size-column">
              <h3>Masculino</h3>
              <div className="size-chips">
                {['37', '38', '39', '40', '41', '42'].map((size) => (
                  <a key={size} className="size-chip" href={`#m-${size}`}>
                    {size}
                  </a>
                ))}
              </div>
            </div>
            <div className="size-column">
              <h3>Feminino</h3>
              <div className="size-chips">
                {['35', '36', '37', '38', '39', '40'].map((size) => (
                  <Link key={size} className="size-chip" to="/feminino">
                    {size}
                  </Link>
                ))}
              </div>
            </div>
            <div className="size-column">
              <h3>Infantil</h3>
              <div className="size-chips">
                {['26', '28', '30', '32', '33'].map((size) => (
                  <a key={size} className="size-chip" href={`#i-${size}`}>
                    {size}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="category-pills">
            <a className="category-pill" href="#tenis">
              Tênis
            </a>
            <a className="category-pill" href="#sandalia">
              Sandália
            </a>
            <a className="category-pill" href="#bolsa">
              Bolsa
            </a>
            <a className="category-pill" href="#botas">
              Botas
            </a>
            <a className="category-pill" href="#infantil">
              Infantil
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Ofertas especiais</h2>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <BenefitsBar />
      <Newsletter />
      <SiteFooter />
    </>
  )
}
