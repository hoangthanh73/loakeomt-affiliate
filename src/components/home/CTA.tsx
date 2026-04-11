import { SiFacebook } from "react-icons/si";
import { socials } from "../../data/socials";

const CTA = () => {
  const fbLink = socials.find(s => s.id === 'facebook')?.link || '#';

  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="cta-wrapper shadow-lg text-center p-4 p-md-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold text-white mb-3">
                Săn Deal Linh Kiện Mỗi Ngày
              </h2>
              <p className="fs-6 text-white-50 mb-4 px-md-5">
                Mọi mã giảm giá Shopee, Lazada và các lô hàng bass rời, mạch công suất mới về đều được cập nhật sớm nhất tại Fanpage.
              </p>
              <a 
                href={fbLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-light btn-lg rounded-pill px-5 fw-bold d-inline-flex align-items-center gap-2 shadow-sm"
              >
                <SiFacebook size={20} /> GHÉ FANPAGE NGAY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;