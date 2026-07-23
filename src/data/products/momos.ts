import type { Product } from '@/types'

export const momoProducts: Product[] = [
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
    packSizes: [
      { label: 'Small', weight: '250g (approx. 12 pcs)', price: 220 },
      { label: 'Regular', weight: '500g (approx. 22 pcs)', price: 380 },
      { label: 'Family Pack', weight: '1kg (approx. 45 pcs)', price: 700 },
    ],
    isBestSeller: true,
  },
]
