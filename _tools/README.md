# Trang app và form góp ý

Các thư mục bắt đầu bằng `_` không được GitHub Pages xuất bản.

- Dữ liệu: `_data/apps.json` (thêm, sửa app ở đây; `"draft": true` thì chưa xuất bản)
- Build: `node _tools/build-apps.mjs` tạo `apps/index.html`, `apps/<id>/index.html`, `feedback/index.html`
- Xem cả app nháp trên máy: `node _tools/build-apps.mjs --drafts` rồi `python3 -m http.server 8000`
- Giao diện: `apps/apps.css`
- Icon, ảnh màn hình: đặt trong `apps/<id>/` và ghi đường dẫn vào `icon` / `screenshots`, ví dụ `/apps/focus-timer/icon.png`

Bộ nhận góp ý (Cloudflare Worker): `~/Documents/Projects/app-feedback`.

Các trang privacy/term cũ không bị đổi đường dẫn.
