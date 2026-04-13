import type { Metadata } from "next"; // Nhớ thêm dòng này ở trên cùng
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


// Thêm đoạn này vào để Google nhận diện web của bạn
export const metadata: Metadata = {
  title: "Loa Kéo MT - Review Linh Kiện, hướng dẫn lắp loa kéo có tâm",
  description: "Chuyên review Bass 40 RCF, Bass Thái Lan, Mạch loa kéo V200. Tư vấn kỹ thuật âm thanh uy tín bởi Kỳ Tích.",
  verification: {
    // Dán cái mã số nằm trong ngoặc kép ở bảng Google Search Console của bạn vào đây
    google: "my-CHcwqC1OrXcyunrYLCTpl2V4JgTI188eWuZiLMJo", 
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>

        <Header />

        {children}

        <Footer />
        {/* Load Bootstrap JS cho toàn site */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        />

      </body>
    </html>
  );
}