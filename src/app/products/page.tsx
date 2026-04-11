"use client";

import { useState, useEffect, useMemo } from 'react';
import ProductCard from '../../components/UI/ProductCard'; 
import { products } from '../../data/products';
import { categories } from '../../data/categories';

const ITEMS_PER_PAGE = 12;

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Lọc sản phẩm theo Category
  const filteredProducts = useMemo(() => {
    return activeCategory === "all"
      ? products
      : products.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory]);

  // 2. Tính toán phân trang
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  
  const currentProducts = useMemo(() => {
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredProducts, currentPage]);

  // 3. Xử lý khi đổi danh mục hoặc đổi trang
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="products-page">
      {/* HEADER SECTION */}
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">Kho Linh Kiện</h1>
          <p className="page-header__desc">
            Chuyên cung cấp linh kiện loa kéo rời, bo mạch DSP chính hãng.
          </p>
        </div>
      </header>

      {/* FILTER NAVIGATION (Cuộn ngang mobile) */}
      <nav className="product-filter">
        <div className="container">
          <div className="product-filter__list">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`filter-btn ${activeCategory === cat.value ? 'is-active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* PRODUCTS LIST */}
      <section className="products-content">
        <div className="container">
          {currentProducts.length > 0 ? (
            <div className="product-grid">
              {currentProducts.map((item) => (
                <div key={item.id} className="product-grid__item">
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>Chưa có linh kiện nào trong mục này...</p>
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="page-btn" 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                &lsaquo;
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`page-btn ${currentPage === i + 1 ? 'is-active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                className="page-btn" 
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &rsaquo;
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}