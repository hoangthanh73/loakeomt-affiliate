"use client";

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navLinks } from '../../data/navLinks'; // Import từ file riêng
import { socials } from '../../data/socials';
import { SiTiktok, SiFacebook } from "react-icons/si";

import Logo from '../UI/Logo';

const Header = () => {
  const pathname = usePathname();

  const tiktokLink = socials.find(s => s.id === 'tiktok')?.link || '#';
  const facebookLink = socials.find(s => s.id === 'facebook')?.link || '#';

  // 1. Tạo một cái "móc" để túm lấy cái nút đóng menu
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // 2. Hàm xử lý: Khi click vào link thì giả lập cú click vào nút đóng
  const handleNavLinkClick = () => {
    const navbar = document.getElementById('navbarNav');
    // Kiểm tra xem menu có đang mở không (có class 'show' của Bootstrap)
    if (navbar && navbar.classList.contains('show')) {
      closeBtnRef.current?.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom shadow-sm py-2">
      <div className="container">
        <Logo />

        <button
          ref={closeBtnRef}
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-3 mb-lg-0 fw-semibold text-center"
            onClick={handleNavLinkClick}>
            {navLinks.map((link) => {
              // Logic kiểm tra trang hiện tại để bật hiệu ứng Active
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              return (
                <li className="nav-item" key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link px-3 ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Nút Social lấy link động */}
          <div className="d-flex gap-2 justify-content-center">
            <a href={tiktokLink} target="_blank" className="btn btn-dark btn-sm rounded-pill px-3 d-flex align-items-center gap-2 shadow-sm">
              <SiTiktok size={14} /> <span className="small">TikTok</span>
            </a>
            <a href={facebookLink} target="_blank" className="btn btn-outline-primary btn-sm rounded-pill px-3 d-flex align-items-center gap-2 shadow-sm">
              <SiFacebook size={14} /> <span className="small">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;