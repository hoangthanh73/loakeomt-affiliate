import ProductCard from '../UI/ProductCard';
import { products } from '../../data/products';
import { BsFire, BsArrowRight } from "react-icons/bs";

const HotProducts = () => {
  // Lấy 4 sản phẩm tiêu biểu để hiển thị ở trang chủ
  const hotItems = products.slice(0, 4);

  return (
    <section className="hot-products py-5 bg-white">
      <div className="container">
        
        {/* Header Section: Mobile dồn hàng, Desktop dàn ngang */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-2">
          <div>
            <div className="d-flex align-items-center gap-2 text-danger fw-bold mb-1">
              <BsFire />
              <span className="text-uppercase small tracking-wider">Gợi ý hôm nay</span>
            </div>
            <h2 className="h3 fw-bold text-dark mb-0">Sản phẩm cực HOT</h2>
          </div>
          
          <a href="/products" className="text-primary text-decoration-none fw-bold small d-flex align-items-center gap-1">
            Xem tất cả linh kiện <BsArrowRight />
          </a>
        </div>

        {/* Grid: col-6 (2 cột) trên mobile là chuẩn Affiliate nhất */}
        <div className="row g-3 g-md-4">
          {hotItems.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Nút xem thêm chỉ hiện trên Mobile để tối ưu diện tích */}
        <div className="d-md-none mt-4">
          <a href="/products" className="btn btn-outline-primary w-100 py-2 fw-bold border-2">
            XEM TẤT CẢ SẢN PHẨM
          </a>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;