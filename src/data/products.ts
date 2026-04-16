// data/products.ts

export interface Product {
  id: number;
  title: string;           // Tên linh kiện (VD: Bass 40 RCF)
  category: string;        // Phân loại (bass, treble, mạch, v.v.)
  shortDescription: string; // Thông số nhanh (Coil, từ, công suất)
  details: string;         // Mô tả chi tiết kỹ thuật
  image: string;           // Link ảnh sản phẩm
  link: string;            // Link Affiliate (Shopee, Lazada, Tiki...)
}

export const products: Product[] = [
  {
    id: 1, // Hoặc ID tiếp theo trong danh sách của bạn
    title: "Loa Bass 20 Từ 120 Coil 35",
    category: "bass",
    shortDescription: "Đường kính 20cm, Từ 120mm, Coil 35mm, Trở kháng 8 Ohm",
    details: "Mẫu bass 20cm tiêu chuẩn với nam châm Ferrite 120mm và coil đồng 35mm. Màng loa kết hợp gân cao su mềm mại giúp dải trầm sâu và ấm, phù hợp cho loa nằm, loa bookshelf hoặc loa kéo mini công suất vừa phải.",
    image: "/images/products/1.jpg",
    link: "https://s.shopee.vn/2g762An2H7"
  },
  {
    id: 2,
    title: "Mạch Loa Kéo V200 - Nguồn Xuyến Đồng (200W)",
    category: "bo mạch",
    shortDescription: "Nguồn xuyến, Bluetooth 5.0, Chống hú AI, Nguồn 220V/Bình 12V",
    details: "Mạch V200 sở hữu công suất cực mạnh, trang bị chip DSP xử lý âm thanh chuyên nghiệp. Hỗ trợ đầy đủ các cổng ăn chơi: Optical, HDMI ARC, Guitar in, và 2 cổng Micro có dây. Phù hợp cho cấu hình loa 4 tấc đôi hoặc 5 tấc đơn công suất lớn.",
    image: "/images/products/2.jpg",
    link: "https://s.shopee.vn/5AoR0fEAX2"
  },
  {
    id: 3,
    title: "Bo Mạch Loa Kéo V450 - Công Suất Thực 300W",
    category: "bo mạch",
    shortDescription: "Nguồn xuyến đồng lớn, Chạy 10 sò, Bluetooth 6.0, DSP chuyên sâu",
    details: "V450 là dòng mạch loa kéo cao cấp nhất hiện nay với hệ thống tản nhiệt nhôm cực lớn và dàn tụ lọc nguồn chất lượng cao. Tích hợp bộ xử lý vang số DSP cho phép chỉnh Reverb, Echo, Delay cực mượt. Hỗ trợ đầy đủ cổng Optical, HDMI ARC và cổng sạc bình thông minh.",
    image: "/images/products/3.jpg",
    link: "https://s.shopee.vn/1LbiRxlMhU"
  },
  {
    id: 4,
    title: "Loa Bass 20 Thái Lan - Từ 140 Coil 51 - Xương Nhôm",
    category: "bass",
    shortDescription: "Hàng nhập khẩu, Từ 140mm, Coil 51mm, Khung nhôm đúc",
    details: "Dòng bass 20 chuyên dụng cho loa kéo xách tay công suất lớn hoặc loa trợ lời cho dàn âm thanh sự kiện. Với từ 140 và coil 51, loa cho tiếng bass cực kỳ uy lực, chắc chắn và chịu được công suất cao từ các mạch như V20X hoặc V200 mà không sợ cháy coil.",
    image: "/images/products/4.jpg",
    link: "https://s.shopee.vn/3B3MdQGVtA"
  },
  {
    id: 5,
    title: "Bo Mạch Loa Kéo DSP12 - Công Suất 120W - Chống Hú",
    category: "bo mạch",
    shortDescription: "Chip DSP xử lý âm thanh, Bluetooth 5.0, Công suất 120W thực",
    details: "DSP12 là dòng mạch chuyên dụng cho loa kéo mini cao cấp. Mạch sở hữu bộ vang số chỉnh cơ cho tiếng Reverb và Echo cực bay bổng. Tích hợp chức năng chống hú chuyên nghiệp, hỗ trợ đầy đủ cổng kết nối USB, Thẻ nhớ, AUX và Bluetooth thế hệ mới.",
    image: "/images/products/5.jpg",
    link: "https://s.shopee.vn/W2bSdM7RP"
  },
  {
    id: 6,
    title: "Loa Bass 30 RCF - Từ 190 Coil 75 - Xương Nhôm Đúc",
    category: "bass",
    shortDescription: "Xương nhôm, Từ Ferrite 190mm, Coil 75mm, Công suất 400W-700W",
    details: "Mẫu Bass 30 RCF huyền thoại chuyên dùng cho loa Full đơn hoặc loa kéo cao cấp. Với kích thước từ 190mm và coil 75mm, loa cho dải trầm cực mạnh, tiếng bass chắc, uy lực. Màng loa được phủ keo chống nước, gân vải tẩm dầu 3 xếp giúp chịu được cường độ âm thanh cao trong thời gian dài.",
    image: "/images/products/6.jpg",
    link: "https://s.shopee.vn/5VRHQ0Zh7y"
  },
  {
    id: 7,
    title: "Loa Bass 30 RCF - Từ 170 Coil 65 - Xương Nhôm",
    category: "bass",
    shortDescription: "Từ 170mm, Coil 65mm, Trở kháng 8 Ohm, Công suất 300W - 500W",
    details: "Phiên bản Bass 30 RCF sử dụng từ 170mm và coil 65mm mang lại sự cân bằng hoàn hảo giữa lực bass và tiếng ca. Phù hợp cho loa kéo tầm trung hoặc loa Full gia đình. Màng loa gân vải 3 xếp bền bỉ, xương nhôm đúc tản nhiệt tốt, giúp loa hoạt động ổn định ở cường độ cao.",
    image: "/images/products/7.jpg",
    link: "https://s.shopee.vn/6AgyDIC17o"
  },
  {
    id: 8,
    title: "Phân Tần Loa Kéo 3 Đường Tiếng - Có Chống Cháy Treble",
    category: "phụ kiện",
    shortDescription: "Tách 3 dải (Bass - Mid - Treble), Cuộn cảm đồng nguyên chất",
    details: "Bộ mạch phân tần chuyên dụng cho loa kéo hoặc loa gia đình. Sử dụng tụ lọc âm chất lượng cao và cuộn cảm đồng lớn giúp tiếng bass sâu, tiếng mid rõ và tiếng treble sáng mịn. Tích hợp mạch bảo vệ chống cháy loa treble, giúp hệ thống hoạt động bền bỉ ở công suất lớn.",
    image: "/images/products/8.png",
    link: "https://s.shopee.vn/W2bTE8tKE"
  },
  {
    id: 9,
    title: "Phân Tần Loa 2 Đường Tiếng - Chống Cháy Treble Cao Cấp",
    category: "phụ kiện",
    shortDescription: "Tách 2 dải (Bass - Treble), Cuộn cảm đồng lớn, Tụ lọc MKP",
    details: "Mạch phân tần chuyên dụng cho loa Full bass 30, 40. Trang bị cuộn cảm bằng đồng nguyên chất giúp lọc nhiễu cực tốt, cho tiếng bass uy lực và tiếng treble sắc sét. Hệ thống bảo vệ treble thông minh với trở sứ và tụ bảo vệ giúp hạn chế tối đa tình trạng cháy coil treble khi hát karaoke công suất lớn.",
    image: "/images/products/9.png",
    link: "https://s.shopee.vn/7Ksvdg5Se8"
  }, {
    id: 10,
    title: "Loa Bass 40 RCF - Từ 190 Coil 75 - Xương Nhôm Đúc",
    category: "bass",
    shortDescription: "Bass 4 tấc, Từ 190mm, Coil 75mm, Công suất 500W - 800W",
    details: "Dòng Bass 40 RCF chuyên dụng cho loa kéo công suất lớn và loa hội trường. Với kích thước màng loa rộng 40cm kết hợp cùng từ 190mm, sản phẩm cho tiếng trầm cực kỳ uy lực, độ lan tỏa rộng. Xương nhôm đúc chịu lực tốt, màng loa phủ keo chuyên dụng bền bỉ, chịu được môi trường hoạt động ngoài trời.",
    image: "/images/products/10.png",
    link: "https://s.shopee.vn/8fOJEHNHlA"
  }, {
    id: 11,
    title: "Bộ Micro Không Dây Q36 - Thân Nhôm Cao Cấp",
    category: "micro",
    shortDescription: "Sóng UHF, Set tần số, Chống hú, Thân nhôm nguyên khối",
    details: "Micro Q36 sử dụng công nghệ sóng UHF cho khoảng cách kết nối xa và ổn định. Đầu thu (cartridge) chất lượng cao giúp tái tạo tiếng ca dày, ấm và bắt nhẹ. Thân micro làm bằng nhôm CNC cầm rất chắc tay, tích hợp màn hình LCD hiển thị tần số và dung lượng pin. Phù hợp thay thế hoặc lắp mới cho các dòng loa kéo sử dụng bo mạch 5-10 nút.",
    image: "/images/products/11.png",
    link: "https://s.shopee.vn/3VgD4s5oY4"
  }, {
    id: 12,
    title: "Loa Bass 40 RCF - Từ 220 Coil 100 - Xương Nhôm Đúc",
    category: "bass",
    shortDescription: "Bass 4 tấc, Từ 220mm, Coil 100mm, Công suất 800W - 1200W",
    details: "Mẫu Bass 40 rời có cấu hình mạnh mẽ nhất hiện nay với từ Ferrite khổng lồ 220mm và coil đồng 100mm. Sản phẩm chuyên dùng cho loa sub hoặc loa Full sân khấu cần áp lực âm thanh cực lớn. Xương nhôm đúc dày dặn, màng loa chịu lực cao, đáp ứng hoàn hảo các dòng nhạc mạnh như Remix, Vinahouse ở cường độ cao.",
    image: "/images/products/12.png",
    link: "https://s.shopee.vn/AKWXDXCMtE"
  }, {
    id: 13,
    title: "Loa Bass 50 RCF - Từ 280 Coil 125 - Chuyên Sub",
    category: "bass",
    shortDescription: "Bass 5 tấc, Từ 280mm, Coil 125mm, Công suất 1500W - 2500W",
    details: "Dòng bass siêu trầm (Subwoofer) đỉnh cao với nam châm Ferrite khổng lồ 280mm và coil đồng chịu nhiệt lên đến 125mm. Thiết kế xương nhôm đúc cực dày, màng loa chuyên dụng có độ đàn hồi tốt giúp tái tạo dải siêu trầm từ 30Hz - 200Hz cực kỳ mạnh mẽ, chắc tiếng và sâu lắng. Chuyên dùng cho các thùng sub hơi sân khấu hoặc sub điện công suất lớn.",
    image: "/images/products/13.png",
    link: "https://s.shopee.vn/3fzdHOCe8s"
  },
  {
    id: 14,
    title: "Loa Bass 10 RCF - Từ 80 Coil 25 - Chuyên Loa cây, loa ô tô, loa bluetooth",
    category: "bass",
    shortDescription: "Bass 1 tấc, Từ 80mm, Coil 25mm, Công suất 30W - 60W",
    details: "Dòng bass mini chất lượng cao với từ Ferrite 80mm và coil đồng 25mm. Thích hợp cho anh em ráp loa bluetooth, loa xách tay nhỏ gọn hoặc làm loa trung cho dàn âm thanh.",
    image: "/images/products/14.png",
    link: "https://s.shopee.vn/70GEfksUvn", // Bạn hãy thay link Shopee thực tế của sản phẩm này vào đây
  },
];