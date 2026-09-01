'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/about', label: '关于' },
  { href: '/faq', label: '常见问题' },
  { href: '/help', label: '使用帮助' },
  { href: '/privacy', label: '隐私' },
  { href: '/terms', label: '条款' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">🍬</span>
          甜甜网
        </Link>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="菜单">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
