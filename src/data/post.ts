// src/data/posts.ts

export interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  summary: string;
  image: string; // Đường dẫn ảnh đại diện bài viết
  author: string;
  date: string;
  featured: boolean;
  shopeeLink: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Review Bass 20 Thái Từ 140 Coil 51: Tiếng ca cực sáng",
    slug: "review-bass-thai-20-tu-140-coil-51",
    category: "Review Sản Phẩm",
    summary: "Đánh giá chi tiết dòng bass 20 nhập Thái Lan chuyên cho loa xách tay.",
    image: "/images/blog/review-bass-thai-20-tu-140-coil-51/1.jpg",
    author: "Loa kéo MT",
    date: "2026-04-10",
    featured: true, // Thêm trường nổi bật
    shopeeLink: "https://s.shopee.vn/3B3MdQGVtA", // Giữ lại link này để dùng trong bài
  },
  {
    id: 2,
    title: "Đánh giá Mạch Loa Kéo V200 DSP 2026: Khả năng chống hú đỉnh cao",
    slug: "review-bo-mach-loa-keo-v200-dsp",
    category: "Review Linh Kiện",
    summary: "Khám phá sức mạnh của bo mạch V200 mẫu mới nhất. Tại sao anh em thợ lại tin dùng V200 cho các dòng loa xách tay cao cấp?",
    image: "/images/blog/review-bo-mach-loa-keo-v200-dsp/1.jpg",
    author: "Loa kéo MT",
    date: "2026-04-10",
    featured: true,
    shopeeLink: "https://s.shopee.vn/5AoR0fEAX2", // Link mới của bạn
  }, {
    id: 18,
    title: "Review Bass 40 RCF Xương Cá Từ 190 Coil 75: Uy lực loa kéo 4 tấc đơn",
    slug: "review-bass-40-rcf-tu-190-coil-75",
    category: "Review Linh Kiện",
    summary: "Đánh giá chi tiết dòng Bass 40 RCF loại 1. Tại sao từ 190 và coil 75 là cấu hình vàng cho loa kéo công suất lớn?",
    image: "/images/blog/review-bass-40-rcf-tu-190-coil-75/1.jpg",
    author: "Loa kéo MT",
    date: "2026-04-10",
    featured: true,
    shopeeLink: "https://s.shopee.vn/8fOJEHNHlA", 
  },{
    id: 19,
    title: "Đánh giá Bo Mạch Loa Kéo V450 Công Suất 300W: Uy lực cho loa kéo 5 tấc đôi",
    slug: "review-bo-mach-loa-keo-v450",
    category: "Review Linh Kiện",
    summary: "Khám phá sức mạnh thực tế của bo mạch V450 mẫu mới nhất. Tại sao công suất 300W thực thụ lại biến loa kéo của bạn thành dàn âm thanh sự kiện chuyên nghiệp?",
    image: "/images/blog/review-bo-mach-loa-keo-v450/1.jpg",
    author: "Loa kéo MT",
    date: "2026-04-13",
    featured: true,
    shopeeLink: "https://s.shopee.vn/5AoWI1zcEo",
  },
];