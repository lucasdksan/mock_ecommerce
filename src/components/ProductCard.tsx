import { Link } from 'react-router'
import { formatPrice, type Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const href = `/${product.slug}/p`

  return (
    <Link className="product-card" to={href}>
      <div className="thumb-wrap">
        {product.discountPercent != null && (
          <span className="badge-discount">-{product.discountPercent}%</span>
        )}
        {product.promo && <span className="badge-promo-tag">PROMO</span>}
        <span className="thumb-label">{product.thumbLabel}</span>
      </div>
      <div className="info">
        <div className="brand">{product.brand}</div>
        <div className="name">{product.name}</div>
        <div className="price-row">
          {product.priceOld != null && (
            <span className="price-old">{formatPrice(product.priceOld)}</span>
          )}
          <span className="price">{formatPrice(product.price)}</span>
        </div>
        <div className="installments">{product.installments}</div>
      </div>
    </Link>
  )
}
