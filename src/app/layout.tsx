import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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