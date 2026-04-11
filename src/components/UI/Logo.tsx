import React from 'react';
import Link from 'next/link';
import { siteInfo } from '../../data/socials';

interface LogoProps {
  fontSize?: string; // Ví dụ: 'fs-2', 'fs-3'
}

const Logo: React.FC<LogoProps> = ({ fontSize = 'fs-3' }) => {
  return (
    <Link 
      href="/" 
      className="navbar-brand d-flex align-items-center gap-1 shadow-none border-0"
      style={{ textDecoration: 'none' }}
    >
      <span 
        className={`fw-bolder ${fontSize}`}
        style={{ 
          // Hard code Playfair Display
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic', // Font này để nghiêng (italic) nhìn rất nghệ và sang
          letterSpacing: '-0.5px', // Font có chân không nên để khít quá như font không chân
          background: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          lineHeight: '1.2'
        }}
      >
        {siteInfo.author}
      </span>
    </Link>
  );
};

export default Logo;