import Logo from '../../components/UI/Logo';
import { navLinks } from '../../data/navLinks';
import { socials } from '../../data/socials';
import { SiFacebook, SiTiktok, SiZalo } from "react-icons/si";

const Footer = () => {
  const fbLink = socials.find(s => s.id === 'facebook')?.link || '#';
  const tiktokLink = socials.find(s => s.id === 'tiktok')?.link || '#';

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">

          {/* Cột 1: Brand */}
          <div className="col-12 col-lg-4 text-center text-lg-start">
            <Logo fontSize="fs-2" />
            <p className="mt-3 lh-lg text-white-50 small">
              Chuyên review linh kiện loa kéo và chia sẻ kinh nghiệm độ chế âm thanh thực tế.
              Mua đúng chuẩn - Ráp đúng bài cùng Loa Kéo MT.
            </p>
          </div>

          {/* Cột 2: Danh mục (Links) */}
          <div className="col-6 col-lg-2 offset-lg-1">
            <h6 className="footer-title">DANH MỤC</h6>
            <ul className="list-unstyled">
              {navLinks.map((link) => (
                <li key={link.href} className="mb-2">
                  <a href={link.href} className="footer-link small">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Liên hệ tập trung */}
          <div className="col-6 col-lg-5 col-xl-4 offset-xl-1">
            <h6 className="footer-title">LIÊN HỆ KỸ THUẬT</h6>
            
            <div className="contact-info">
              {/* TikTok */}
              <a href={tiktokLink} target="_blank" className="d-flex align-items-center gap-3 mb-3 hover-primary text-decoration-none">
                <div className="icon-box"><SiTiktok size={16} /></div>
                <div className="small">
                  <span className="d-block text-white-50">Review thực tế:</span>
                  <strong className="text-white text-uppercase">TikTok Loa Kéo MT</strong>
                </div>
              </a>

              {/* Zalo - Hỗ trợ kỹ thuật */}
              <a
                href="https://zalo.me/0966862510"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 mb-3 hover-primary text-decoration-none"
              >
                <div className="icon-box"><SiZalo size={20} /></div>
                <div className="small">
                  <span className="d-block text-white-50">Zalo hỗ trợ:</span>
                  <strong className="text-white">0966.862.510</strong>
                </div>
              </a>

              {/* Fanpage - Săn deal */}
              <a href={fbLink} target="_blank" className="d-flex align-items-center gap-3 hover-primary text-decoration-none">
                <div className="icon-box"><SiFacebook size={18} /></div>
                <div className="small">
                  <span className="d-block text-white-50">Cộng đồng:</span>
                  <strong className="text-white">Fanpage Loa Kéo MT</strong>
                </div>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom text-center small">
          <p>© {new Date().getFullYear()} Loa Kéo MT. Toàn bộ nội dung được build bởi Loa kéo MT.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;