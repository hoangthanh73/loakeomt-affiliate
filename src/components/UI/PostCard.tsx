import Link from 'next/link';
import { Post } from '../../data/post'; // Import interface Post từ file data

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="post-card">
      <Link href={`/blog/${post.slug}`} className="post-card__link">
        {/* 1. Phần hình ảnh */}
        <div className="post-card__image-box">
          <img 
            src={post.image} 
            alt={post.title} 
            className="post-card__img" 
          />
          <span className="post-card__category">{post.category}</span>
        </div>

        {/* 2. Phần nội dung */}
        <div className="post-card__content">
          <div className="post-card__meta">
            <span className="post-card__author">{post.author}</span>
            <span className="post-card__divider">•</span>
            <span className="post-card__date">{post.date}</span>
          </div>
          
          <h3 className="post-card__title">{post.title}</h3>
          
          <p className="post-card__summary">{post.summary}</p>
          
          <div className="post-card__footer">
            <span className="post-card__read-more">Đọc bài viết</span>
            <svg className="post-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;