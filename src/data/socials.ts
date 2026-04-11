import { SiZalo, SiTiktok, SiYoutube, SiFacebook } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";

export const siteInfo = {
  author: "Loa kéo MT",
  avatar: "/images/avatar.png",
  qrZalo: "/images/zaloqr.jpg",
  slogan: "Tư vấn kỹ thuật - Link mua linh kiện uy tín"
};

export const socials = [
  {
    id: "zalo",
    name: "Nhắn tin Zalo",
    desc: "Tư vấn kỹ thuật & gửi sơ đồ mạch",
    link: "https://zalo.me/0966862510", // Thay số của bạn
    icon: SiZalo,
    color: "#0068ff",
    highlight: true
  },
  {
    id: "tiktok",
    name: "Kênh TikTok",
    desc: "Video test bass, mạch công suất thực tế",
    link: "https://tiktok.com/@soundtechpro", 
    icon: SiTiktok,
    color: "#000000"
  },
  {
    id: "facebook",
    name: "Fanpage Facebook",
    desc: "Cập nhật mã giảm giá Shopee hàng ngày",
    link: "https://www.facebook.com/profile.php?id=61564031254804",
    icon: SiFacebook,
    color: "#1877f2"
  },
  {
    id: "youtube",
    name: "Kênh YouTube",
    desc: "Review chi tiết nội thất linh kiện",
    link: "https://youtube.com/@loakeomt",
    icon: SiYoutube,
    color: "#ff0000"
  },
  {
    id: "call",
    name: "Gọi điện trực tiếp",
    desc: "Hỗ trợ gấp (8h - 22h)",
    link: "tel:0966862510",
    icon: BsTelephoneFill,
    color: "#28a745"
  }
];