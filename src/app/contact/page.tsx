"use client";

import { socials, siteInfo } from '../../data/socials';
import { BsChevronRight, BsShieldCheck } from "react-icons/bs";

export default function ContactPage() {
  return (
    <main className="contact-page bg-light min-vh-100 pb-5">
      {/* Header Profile */}
      <section className="bg-dark text-white py-5 text-center mb-4 rounded-bottom-5">
        <div className="container">
          <img src={siteInfo.avatar} alt={siteInfo.author} className="rounded-circle border border-3 border-primary mb-3" style={{ width: 90, height: 90, objectFit: 'cover' }} />
          <h1 className="h4 fw-bold mb-1">{siteInfo.author}</h1>
          <p className="small opacity-75">{siteInfo.slogan}</p>
        </div>
      </section>

      {/* Social Links List */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-grid gap-3">
              {socials.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link} 
                  target="_blank" 
                  className={`d-flex align-items-center p-3 bg-white rounded-3 shadow-sm text-decoration-none transition-all ${item.highlight ? 'border border-primary' : ''}`}
                >
                  <div className="rounded-3 d-flex align-items-center justify-content-center text-white" style={{ backgroundColor: item.color, width: 45, height: 45, fontSize: '1.4rem' }}>
                    <item.icon />
                  </div>
                  <div className="ms-3 flex-grow-1">
                    <h3 className="h6 fw-bold mb-0 text-dark">{item.name}</h3>
                    <small className="text-muted" style={{ fontSize: 11 }}>{item.desc}</small>
                  </div>
                  <BsChevronRight className="text-muted" />
                </a>
              ))}
            </div>

            {/* QR Zalo & Trust Badges */}
            <div className="mt-5 text-center p-4 bg-white rounded-4 shadow-sm">
              <p className="small fw-bold text-uppercase mb-3">Quét mã kết bạn Zalo</p>
              <img src={siteInfo.qrZalo} alt="QR Zalo" className="img-fluid border p-2 rounded-3 mb-3" style={{ maxWidth: 180 }} />
              <div className="d-flex justify-content-center gap-2">
                <span className="badge bg-light text-success border border-success px-3 py-2 fw-medium"><BsShieldCheck /> Hỗ trợ sơ đồ</span>
                <span className="badge bg-light text-primary border border-primary px-3 py-2 fw-medium"><BsShieldCheck /> Link Shopee chuẩn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}