import PostCard from '../../components/UI/PostCard';
import { posts } from '../../data/post';

const LatestPost = () => {
  // Sắp xếp bài viết theo ngày giảm dần và lấy 4 hoặc 8 bài mới nhất
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4); // Bạn có thể chỉnh lên 8 nếu muốn nhiều hơn

  return (
    <section className="latest-post">
      <div className="container">
        {/* Header Section */}
        <div className="latest-post__header text-center text-md-start mb-4">
          <h2 className="latest-post__title">Bài Viết Mới Nhất</h2>
          <div className="latest-post__line"></div>
        </div>

        {/* Grid hiển thị - Mobile 1 cột, Tablet 2 cột, Desktop 4 cột */}
        <div className="row g-3 g-md-4">
          {latestPosts.map((post) => (
            <div key={post.id} className="col-12 col-sm-6 col-xl-3">
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Nút xem thêm thiết kế tối giản */}
        <div className="text-center mt-5">
          <a href="/blog" className="latest-post__btn-all">
            KHÁM PHÁ THÊM BÀI VIẾT
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;