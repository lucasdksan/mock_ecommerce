import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { SiteFooter } from '../components/Layout'
import { useCart } from '../hooks/useCart'
import { formatPrice, getProductBySlug } from '../data/products'

export function PdpPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined
  const { addItem } = useCart()

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] ?? '',
  )
  const [selectedColorId, setSelectedColorId] = useState(
    product?.colors?.[0]?.id ?? '',
  )
  const [activeThumb, setActiveThumb] = useState(0)

  if (!product) {
    return (
      <main className="section">
        <div className="container">
          <p>Produto não encontrado.</p>
          <Link to="/feminino">Voltar para Feminino</Link>
        </div>
        <SiteFooter compact />
      </main>
    )
  }

  const colors = product.colors ?? []
  const sizes = product.sizes ?? ['Único']
  const specs = product.specs ?? {}

  return (
    <>
      <main className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <a href="#infantil">Infantil</a> /{' '}
            <a href="#menina">Menina</a> / {product.thumbLabel}
          </nav>

          <div className="pdp-layout">
            <div className="pdp-gallery">
              <div className="main-image">
                {product.discountPercent != null && (
                  <span className="badge-discount">
                    -{product.discountPercent}%
                  </span>
                )}
                <span>Imagem do produto</span>
              </div>
              <div className="thumbs">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    type="button"
                    className={`thumb-mini${activeThumb === i ? ' active' : ''}`}
                    aria-label={`Miniatura ${i + 1}`}
                    onClick={() => setActiveThumb(i)}
                  />
                ))}
              </div>
            </div>

            <div className="pdp-info">
              <div className="brand">{product.brand}</div>
              <h1>
                {product.name}
                {selectedSize ? ` ${selectedSize}` : ''}
              </h1>
              <div className="pdp-prices">
                {product.priceOld != null && (
                  <div className="old">{formatPrice(product.priceOld)}</div>
                )}
                <div className="current">{formatPrice(product.price)}</div>
                <div className="installments">{product.installments}</div>
              </div>
              {product.code && (
                <p
                  style={{
                    fontSize: 12,
                    color: 'var(--brand-gray-500)',
                    marginTop: 8,
                  }}
                >
                  Cód.: {product.code}
                </p>
              )}
              <span className="pdp-highlight">Primeira troca grátis!</span>

              {colors.length > 0 && (
                <div className="pdp-block">
                  <label htmlFor="pdp-colors">Cores</label>
                  <div className="colors" id="pdp-colors">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        type="button"
                        className={`color-swatch${selectedColorId === color.id ? ' selected' : ''}`}
                        title={color.title}
                        style={{ background: color.hex }}
                        onClick={() => setSelectedColorId(color.id)}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="pdp-block">
                <label htmlFor="pdp-sizes">Tamanhos</label>
                <div className="sizes" id="pdp-sizes">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`size-btn${selectedSize === size ? ' selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn-primary"
                onClick={() => addItem()}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>

          {Object.keys(specs).length > 0 && (
            <div className="pdp-tabs">
              <h2 className="section-title">Especificações</h2>
              <table className="specs-table">
                <tbody>
                  {Object.entries(specs).map(([key, value]) => (
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {product.description && (
                <>
                  <h2
                    className="section-title"
                    style={{ marginTop: 40 }}
                  >
                    Descrição
                  </h2>
                  <p className="pdp-description">{product.description}</p>
                </>
              )}
            </div>
          )}
        </div>
      </main>

      <SiteFooter compact />
    </>
  )
}
