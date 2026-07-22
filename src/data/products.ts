import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'chicken-momo',
    slug: 'chicken-momo',
    name: 'Chicken Momo',
    category: 'Momo',
    tagline: 'Steamed to order, straight from your freezer.',
    description:
      "Hand-folded dumplings packed with juicy, seasoned chicken and steamed the traditional way before they're flash-frozen at peak flavor. No thawing, no prep — straight from the freezer to the steamer in under 20 minutes.",
    images: ['momo-1', 'momo-2', 'momo-3'],
    ingredients: [
      'Minced chicken',
      'Refined wheat flour',
      'Onion',
      'Spring onions',
      'Carrot',
      'Garlic & ginger',
      'Coriander',
      'Soy sauce',
      'Tometo sauce',
      'Hot spices',
      'Green chilli', 
      'Chilli flakes', 
      'Black pepper',
      'Salt',
    ],
    storage: 'Keep frozen at -18°C. Do not refreeze once thawed.',
    cookingInstructions: [
      'Do not thaw — steam directly from frozen.',
      'Bring your steamer to a rolling boil.',
      'Arrange momos with space between each piece.',
      'Steam for 15–20 minutes until the wrapper turns glossy.',
      'Serve hot with your favorite chutney or sauce.',
    ],
    // shelfLife: '6 months frozen from date of packing.',
    packSizes: [
      { label: 'Small', weight: '250g (approx. 12 pcs)', price: 220 },
      { label: 'Regular', weight: '500g (approx. 22 pcs)', price: 380 },
      { label: 'Family Pack', weight: '1kg (approx. 45 pcs)', price: 700 },
    ],
    isBestSeller: true,
  },
  {
    id: 'chicken-roll',
    slug: 'chicken-roll',
    name: 'Chicken Roll',
    category: 'Roll',
    tagline: 'Crisp on the outside, packed with flavor inside.',
    description:
      "A golden, flaky wrap rolled around a savory chicken filling and frozen ready-to-fry. No marinating, no mess — just a hot pan and a few minutes between you and a properly crispy roll.",
    images: ['roll-1', 'roll-2', 'roll-3'],
    ingredients: [
      'Chicken breast filling',
      'Wheat flour wrap',
      'Onion',
      'Carrot',
      'Chinese Cabbage',
      'Egg wash',
      'Vegitables',
      'Spice blend',
      'Salt',
      'Toya sauce',
      'Tometo sauce',
    ],
    storage: 'Keep frozen at -18°C. Do not refreeze once thawed.',
    cookingInstructions: [
      'Do not thaw — fry directly from frozen.',
      'Heat oil to medium in a pan.',
      'Fry for 5–7 minutes, turning until golden brown on all sides.',
      'Drain on a paper towel for a minute before serving.',
      'Best served hot with mustard sauce or ketchup.',
    ],
    // shelfLife: '6 months frozen from date of packing.',
    packSizes: [
      { label: 'Small', weight: '6 pcs', price: 200 },
      { label: 'Regular', weight: '12 pcs', price: 400 },
      { label: 'Family Pack', weight: '24pcs', price: 800 },
    ],
    isBestSeller: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug: string): Product[] {
  return products.filter((p) => p.slug !== slug)
}
