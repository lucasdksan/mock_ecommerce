import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { BenefitsBar, SiteFooter } from '../components/Layout'
import { ProductCard } from '../components/ProductCard'
import { getFemininoProducts } from '../data/products'

type SortOption = 'relevance' | 'price-asc' | 'price-desc'

export function PlpPage() {
  const [sort, setSort] = useState<SortOption>('relevance')

  const sortedProducts = useMemo(() => {
    const list = [...getFemininoProducts()]
    if (sort === 'price-asc') {
      list.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      list.sort((a, b) => b.price - a.price)
    }
    return list
  }, [sort])

  return (
    <>
      <main className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Feminino
          </nav>
          <header className="plp-header">
            <h1>Feminino</h1>
            <p>Calçados femininos: tênis, sandálias, botas e muito mais.</p>
          </header>

          <div className="plp-layout">
            <aside className="plp-filters">
              <h3>Categoria</h3>
              <ul className="filter-list">
                <li>
                  <a href="#tenis">Tênis</a>
                </li>
                <li>
                  <a href="#sandalias">Sandálias</a>
                </li>
                <li>
                  <a href="#botas">Botas</a>
                </li>
                <li>
                  <a href="#sapatos">Sapatos</a>
                </li>
              </ul>
              <h3>Marca</h3>
              <ul className="filter-list">
                <li>
                  <a href="#melissa">Melissa</a>
                </li>
                <li>
                  <a href="#via-marte">Via Marte</a>
                </li>
                <li>
                  <a href="#kenner">Kenner</a>
                </li>
              </ul>
              <h3>Tamanho</h3>
              <div className="size-chips">
                {['35', '36', '37', '38'].map((size) => (
                  <a key={size} className="size-chip" href={`#${size}`}>
                    {size}
                  </a>
                ))}
              </div>
            </aside>

            <div>
              <div className="plp-toolbar">
                <span className="plp-count">{sortedProducts.length} produtos</span>
                <select
                  className="plp-sort"
                  aria-label="Ordenar"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                >
                  <option value="relevance">Mais relevantes</option>
                  <option value="price-asc">Menor preço</option>
                  <option value="price-desc">Maior preço</option>
                </select>
              </div>

              <div className="product-grid">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <BenefitsBar />
      <SiteFooter compact />
    </>
  )
}
