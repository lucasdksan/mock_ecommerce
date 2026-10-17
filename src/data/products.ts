export type ProductColor = {
  id: string
  title: string
  hex: string
}

export type ProductSpecs = Record<string, string>

export type Product = {
  slug: string
  brand: string
  name: string
  thumbLabel: string
  price: number
  priceOld?: number
  discountPercent?: number
  promo: boolean
  installments: string
  category: string
  description?: string
  code?: string
  colors?: ProductColor[]
  sizes?: string[]
  specs?: ProductSpecs
}

export const FEATURED_SLUG =
  'mini-melissa-possession-infantil-32409-begedourado-0852409257'

export const products: Product[] = [
  {
    slug: FEATURED_SLUG,
    brand: 'Melissa',
    name: 'Mini Melissa Possession Infantil 32409 BEGE/DOURADO',
    thumbLabel: 'Sandália',
    price: 104.99,
    priceOld: 169.9,
    discountPercent: 38,
    promo: true,
    installments: '5x de R$ 20,99 sem juros',
    category: 'feminino',
    code: '0852409257',
    description:
      'Com a Mini Melissa Possession Infantil 32409, sua menina vai se sentir ainda mais estilosa e confortável. Design moderno, material Melflex leve e flexível, ideal para o dia a dia. Resistente à água e fácil de limpar.',
    colors: [
      { id: 'bege-dourado', title: 'Bege/Dourado', hex: '#d4b896' },
      { id: 'pink', title: 'Pink', hex: '#f4a6c8' },
      { id: 'rosa', title: 'Rosa', hex: '#e891a8' },
    ],
    sizes: ['26/27', '28', '29', '30', '31', '32', '33'],
    specs: {
      Cód: '0852409257',
      Modelo: '0852409',
      Referência: '32409',
      Marca: 'Melissa',
      'Material do sapato': 'PVC Melflex',
      'Material da sola': 'PVC',
      'Material da palmilha': 'EVA',
    },
  },
  {
    slug: 'tenis-feminino-casual-via-marte',
    brand: 'Via Marte',
    name: 'Tênis Feminino Casual',
    thumbLabel: 'Tênis',
    price: 157.49,
    priceOld: 199.99,
    discountPercent: 21,
    promo: true,
    installments: '7x de R$ 22,49',
    category: 'feminino',
  },
  {
    slug: 'sandalia-feminina-salto-grosso-mississipi',
    brand: 'Mississipi',
    name: 'Sandália Feminina Salto Grosso',
    thumbLabel: 'Sandália',
    price: 104.99,
    priceOld: 149.99,
    discountPercent: 30,
    promo: true,
    installments: '5x de R$ 20,99',
    category: 'feminino',
  },
  {
    slug: 'sandalia-feminina-bottero',
    brand: 'Bottero',
    name: 'Sandália Feminina Salto Grosso Bottero',
    thumbLabel: 'Bota',
    price: 209.99,
    promo: false,
    installments: '10x de R$ 20,99',
    category: 'feminino',
  },
  {
    slug: 'tenis-feminino-moleca',
    brand: 'Moleca',
    name: 'Tênis Feminino Casual Moleca',
    thumbLabel: 'Tênis',
    price: 129.99,
    promo: false,
    installments: '6x de R$ 21,66',
    category: 'feminino',
  },
  {
    slug: 'chinelo-feminino-kenner-kivah',
    brand: 'Kenner',
    name: 'Chinelo Feminino Kivah Comfy',
    thumbLabel: 'Chinelo',
    price: 188.99,
    priceOld: 219.99,
    discountPercent: 14,
    promo: true,
    installments: '9x de R$ 20,99',
    category: 'feminino',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFemininoProducts(): Product[] {
  return products.filter((p) => p.category === 'feminino')
}

export function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
