import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Delivery', path: '/delivery' },
  { label: 'Contact', path: '/contact' },
]

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Return & Refund Policy', path: '/refund-policy' },
]

export const SITE = {
  name: "Kazi's BiteBox",
  shortName: 'BiteBox',
  tagline: 'Premium frozen food, ready when you are.',
  description:
    "Kazi's BiteBox brings restaurant-quality frozen Chicken Momo and Chicken Roll to your freezer — made fresh, frozen at peak flavor, ready in minutes.",
}

export const CONTACT = {
  phone: '+880 1831305640',
  whatsapp: '880 1831305640',
  email: 'ifratbinte@gmail.com',
  messenger: 'https://m.me/kazisbitebox',
  facebook: 'https://www.facebook.com/share/1CQHgdtDsv/?mibextid=wwXIfr',
  address: 'Uttara, Sector 11, Dhaka, Bangladesh',
}
