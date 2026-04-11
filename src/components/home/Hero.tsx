import { SiTiktok, SiFacebook } from "react-icons/si"; // Đổi sang Facebook theo data mới
import { socials } from '../../data/socials'; // Import data của bạn

const Hero = () => {
  // Lấy link từ file data dựa trên id
  const tiktokLink = socials.find(s => s.id === 'tiktok')?.link || '#';
  const facebookLink = socials.find(s => s.id === 'facebook')?.link || '#';

  return (
    <section className="hero-section overflow-hidden">
      <div className="container py-5 my-md-5 text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            
            {/* Tag Badge */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill border bg-light mb-4 shadow-sm">
              <span className="badge bg-primary rounded-pill">Hot</span>
              <small className="fw-bold text-secondary">Review linh kiện loa kéo thực tế</small>
            </div>

            {/* Title với Gradient */}
            <h1 className="display-3 fw-bold mb-4">
              Review linh kiện <br className="d-none d-md-block" />
              <span className="text-gradient">LOA KÉO CHUẨN</span>
            </h1>

            <p className="fs-6 text-muted mb-5 mx-auto" style={{ maxWidth: '650px' }}>
              Chia sẻ cấu hình độ chế, sơ đồ đấu nối và review chân thực từ <strong>Loa kéo MT</strong>.
              Mua đúng shop, ráp đúng chuẩn!
            </p>

            {/* Buttons: Lấy link động từ socials.ts */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a 
                href={tiktokLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg px-4 py-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
              >
                <SiTiktok /> Xem TikTok
              </a>
              <a 
                href={facebookLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
              >
                <SiFacebook /> Ghé Fanpage
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;