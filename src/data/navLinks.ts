export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Sản phẩm', href: '/products' },
  { name: 'Kinh nghiệm', href: '/blog' },
  { name: 'Liên hệ', href: '/contact' },
];