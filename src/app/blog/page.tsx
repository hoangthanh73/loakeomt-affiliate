"use client";

import { useState } from 'react';
import PostCard from '../../components/UI/PostCard';
import { posts } from '../../data/post';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const POSTS_PER_PAGE = 10;

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <main className="blog-page bg-light min-vh-100">
      {/* Sử dụng class py-5 của BS5 thay vì khai báo biến padding */}
      <div className="container py-5">
        
        {/* Header: Dùng mb-5 của BS5 */}
        <header className="blog-header text-center mb-5">
          <h1 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: 'var(--f-title)' }}>
            Tin Tức & Kinh Nghiệm
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Chia sẻ kỹ thuật độ chế loa kéo, review mạch công suất và hướng dẫn căn chỉnh âm thanh chuyên nghiệp.
          </p>
        </header>

        {/* Grid: g-3 trên mobile, g-4 trên desktop */}
        <div className="row g-3 g-md-4">
          {currentPosts.map((post) => (
            <div key={post.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Pagination: Dùng mt-5 và d-flex của BS5 */}
        {totalPages > 1 && (
          <nav className="d-flex justify-content-center mt-5">
            <ul className="pagination-custom d-flex list-unstyled gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
                disabled={currentPage === 1}
              >
                <BsChevronLeft size={18} />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  {index + 1}
                </button>
              ))}

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                disabled={currentPage === totalPages}
              >
                <BsChevronRight size={18} />
              </button>
            </ul>
          </nav>
        )}
      </div>
    </main>
  );
};

export default BlogPage;