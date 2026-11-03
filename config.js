/* CẤU HÌNH — chỉ cần sửa file này khi đổi link ứng dụng. Không sửa index.html. */
window.HLIS_CONFIG = {
  // Link exec CHÍNH của Bảng điều hành (bản deploy "Anyone with Google account", đường dẫn /a/macros/himlamis.edu.vn/ ép chọn tài khoản trường)
  appUrl: 'https://script.google.com/a/macros/himlamis.edu.vn/s/AKfycbwlbI_lhF6WLREakoEg4z2UBNiOrIrAsQ86MLlO2fPW42idsEdZQFM5xlm3kEQ6LX1hEQ/exec',
  // Tên miền tài khoản trường (dùng cho nút Đăng nhập)
  domain: 'himlamis.edu.vn',
  // Email hỗ trợ hiển thị trên màn hình lỗi
  support: 'duccm@himlamis.edu.vn',
  // Thời gian chờ (ms) trước khi hiện nút "Đăng nhập" nếu khung ứng dụng không báo đã sẵn sàng
  readyTimeout: 7000,
  // Chế độ mặc định theo thiết bị: 'auto' | 'frame' (nhúng trong khung) | 'open' (mở trực tiếp)
  mode: 'auto',
  // Phiên bản vỏ ứng dụng — tăng số này mỗi lần sửa file để điện thoại tự cập nhật
  version: '2026.11.03'
};
