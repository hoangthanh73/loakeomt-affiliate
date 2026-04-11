// import fs from 'fs';
// import path from 'path';
// import { MDXRemote } from 'next-mdx-remote/rsc';
// import { notFound } from 'next/navigation';
// import { posts } from '../../../data/post';
// import Link from 'next/link';
// import { BsArrowLeft, BsCalendar3, BsPerson, BsTag } from "react-icons/bs";

// // Định nghĩa kiểu dữ liệu cho Next.js 15
// interface Props {
//   params: Promise<{ slug: string }>;
// }

// export default async function BlogPostPage({ params }: Props) {
//   // 1. Giải nén params (Bắt buộc cho Next.js 15)
//   const { slug } = await params;

//   // 2. Lấy thông tin Metadata từ file data/post.ts
//   const post = posts.find((p) => p.slug === slug);
//   if (!post) {
//     console.error(`Không tìm thấy slug: ${slug}`);
//     notFound();
//   }

//   // 3. Xử lý đường dẫn file MDX (Hãy chắc chắn thư mục content nằm ở ngoài cùng dự án)
//   const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);

//   if (!fs.existsSync(filePath)) {
//     console.error("LỖI ĐƯỜNG DẪN FILE:", filePath);
//     notFound();
//   }

//   // 4. Đọc file và xử lý bỏ phần Frontmatter (phần rác giữa cặp dấu ---)
//   let fileContent = fs.readFileSync(filePath, 'utf8');
//   const mdxContent = fileContent.replace(/^---[\s\S]*?---/, '').trim();

//   return (
//     <main className="blog-detail-wrapper py-5">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-9 col-xl-8">

//             {/* Thanh điều hướng */}
//             <nav className="mb-4">
//               <Link href="/blog" className="btn-back d-inline-flex align-items-center gap-2 text-decoration-none">
//                 <BsArrowLeft /> <span>Quay lại Blog</span>
//               </Link>
//             </nav>

//             {/* Header bài viết - Lấy từ data chuẩn */}
//             <header className="post-header mb-5 pb-4 border-bottom">
//               <div className="d-flex align-items-center gap-2 mb-3">
//                 <span className="badge-category">
//                    <BsTag className="me-1" /> {post.category}
//                 </span>
//               </div>

//               <h1 className="post-title mb-4">
//                 {post.title}
//               </h1>

//               <div className="post-meta d-flex flex-wrap gap-4 text-muted small">
//                 <div className="d-flex align-items-center gap-2">
//                   <BsCalendar3 className="text-primary" />
//                   <span>{post.date}</span>
//                 </div>
//                 <div className="d-flex align-items-center gap-2">
//                   <BsPerson className="text-primary" />
//                   <span>Tác giả: <strong>{post.author}</strong></span>
//                 </div>
//               </div>
//             </header>

//             {/* Ảnh bìa (Featured Image) */}
//             <div className="featured-image-box mb-5 shadow-lg rounded-4 overflow-hidden">
//               <img 
//                 src={post.image} 
//                 alt={post.title} 
//                 className="w-100 h-auto img-main"
//               />
//             </div>

//             {/* Nội dung bài viết hiển thị từ MDX */}
//             <article className="post-article-content fs-5">
//               <MDXRemote source={mdxContent} />
//             </article>

//             {/* Chữ ký & CTA cuối bài */}
//             <footer className="post-signature mt-5 p-4 rounded-4 bg-light border-start border-4 border-primary shadow-sm">
//               <h5 className="fw-bold text-dark mb-2">Lời kết từ Loa Kéo MT</h5>
//               <p className="small text-muted mb-0">
//                 Hy vọng bài review về <strong>{post.title}</strong> mang lại giá trị cho anh em. 
//                 Đừng quên theo dõi Fanpage và Zalo 0966.862.510 để cập nhật sơ đồ mạch mới nhất nhé!
//               </p>
//             </footer>

//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { posts } from '../../../data/post';
import { socials } from '../../../data/socials';
import Link from 'next/link';
import { BsArrowLeft, BsCalendar3, BsPerson, BsTag, BsCartCheck, BsChatDots, BsPhone } from "react-icons/bs";

// Định nghĩa kiểu dữ liệu cho Next.js 15
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  // 1. Giải nén params
  const { slug } = await params;

  // 2. Lấy thông tin bài viết từ data
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // 3. Lấy link Zalo và Hotline từ mảng socials
  const zaloLink = socials.find(s => s.id === "zalo")?.link || "#";
  const callLink = socials.find(s => s.id === "call")?.link || "#";

  // 4. Xử lý đường dẫn file MDX
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  let fileContent = fs.readFileSync(filePath, 'utf8');
  const mdxContent = fileContent.replace(/^---[\s\S]*?---/, '').trim();

  // 5. Cấu hình MDX Components (Tự động hóa Link Affiliate)
  const mdxComponents = {
    // Tự động biến [Tên sản phẩm]() thành link Shopee của bài đó
    a: (props: any) => {
      const isAutoLink = !props.href || props.href === "#" || props.href === "";
      return (
        <a
          {...props}
          href={isAutoLink ? post.shopeeLink : props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={isAutoLink ? "product-inline-link fw-bold" : ""}
        >
          {props.children}
        </a>
      );
    },
    // Style cho hình ảnh trong bài viết mdx
    img: (props: any) => (
      <span className="d-block my-4 text-center">
        <img {...props} className="img-fluid rounded-4 shadow-sm border" style={{ maxHeight: '500px' }} />
        {props.alt && <small className="d-block text-muted mt-2 italic">▲ {props.alt}</small>}
      </span>
    )
  };

  return (
    <main className="blog-detail-wrapper py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">

            {/* Quay lại */}
            <nav className="mb-4">
              <Link href="/blog" className="btn-back d-inline-flex align-items-center gap-2 text-decoration-none text-muted">
                <BsArrowLeft /> <span>Quay lại danh sách</span>
              </Link>
            </nav>

            {/* Header bài viết */}
            <header className="post-header mb-5 pb-4 border-bottom">
              <div className="mb-3">
                <span className="badge bg-light text-primary border px-3 py-2 rounded-pill text-uppercase small fw-bold">
                  <BsTag className="me-1" /> {post.category}
                </span>
              </div>
              <h1 className="post-title mb-4 fw-bold display-5" style={{ letterSpacing: '-1px' }}>
                {post.title}
              </h1>
              <div className="post-meta d-flex flex-wrap gap-4 text-muted small">
                <div className="d-flex align-items-center gap-2">
                  <BsCalendar3 className="text-primary" />
                  <span>{post.date}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <BsPerson className="text-primary" />
                  <span>Tác giả: <strong>{post.author}</strong></span>
                </div>
              </div>
            </header>

            {/* Ảnh bìa */}
            <div className="featured-image-box mb-5 shadow-lg rounded-4 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-100 h-auto" />
            </div>

            {/* Nội dung bài viết */}
            <article className="post-article-content fs-5 lh-lg mb-5">
              <MDXRemote source={mdxContent} components={mdxComponents} />
            </article>

            {/* BOX AFFILIATE CHUYÊN NGHIỆP */}
            <section className="affiliate-section p-4 p-md-5 rounded-4 shadow-lg text-white"
              style={{ background: '#000', border: '1px solid #333' }}>
              <div className="row align-items-center">
                <div className="col-lg-7 mb-4 mb-lg-0 text-center text-lg-start">
                  <h3 className="fw-bold text-warning mb-2">Chốt đơn ngay anh em ơi!</h3>
                  <p className="opacity-75 mb-0 small">Sản phẩm đã được Kỳ Tích kiểm tra kỹ thuật. Anh em thợ đặt qua Shopee hoặc nhắn Zalo để mình tư vấn sơ đồ mạch nhé.</p>
                </div>

                <div className="col-lg-5">
                  <div className="d-grid gap-3">
                    <a href={post.shopeeLink} target="_blank" className="btn btn-warning btn-lg fw-bold rounded-pill py-3 shadow d-flex align-items-center justify-content-center gap-2">
                      <BsCartCheck className="fs-4" /> MUA TRÊN SHOPEE
                    </a>

                    <a href={zaloLink} target="_blank"
                      className="btn btn-primary btn-lg fw-bold rounded-pill py-3 d-flex align-items-center justify-content-center gap-2 shadow"
                      style={{ backgroundColor: '#0068ff', border: '2px solid #fff' }}>
                      <BsChatDots className="fs-4" /> NHẮN ZALO TƯ VẤN
                    </a>

                    <a href={callLink} className="btn btn-outline-light rounded-pill d-flex align-items-center justify-content-center gap-2">
                      <BsPhone /> Gọi: 0966.862.510
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}