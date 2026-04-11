import React from 'react';
import { Product } from '../../data/products';
import { BsArrowRightShort, BsStarFill } from "react-icons/bs";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      {/* Phần ảnh sản phẩm */}
      <div className="product-card__image-wrapper">
        <img 
          src={product.image} 
          alt={product.title} 
          loading="lazy"
        />
        {/* Tag danh mục nhỏ phía góc */}
        <span className="product-card__category-badge">
          {product.category}
        </span>
      </div>

      {/* Nội dung sản phẩm */}
      <div className="product-card__body p-3">
        {/* Đánh giá sao giả lập để tăng uy tín (Trust) */}
        <div className="d-flex gap-1 mb-2 text-warning small">
          <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
        </div>

        <h3 className="product-card__title">
          {product.title}
        </h3>

        <p className="product-card__short-desc text-muted mb-3">
          {product.shortDescription}
        </p>

        {/* Nút bấm Affiliate - Nhấn mạnh phong cách Shopee */}
        <a 
          href={product.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary-affiliate w-100 d-flex align-items-center justify-content-center gap-1"
        >
          XEM GIÁ TỐT <BsArrowRightShort size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;