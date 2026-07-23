import type { Product } from '@/types'

export const rollProducts: Product[] = [
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
    packSizes: [
      { label: 'Small', weight: '6 pcs', price: 200 },
      { label: 'Regular', weight: '12 pcs', price: 400 },
      { label: 'Family Pack', weight: '24pcs', price: 800 },
    ],
    isBestSeller: true,
  },
]
