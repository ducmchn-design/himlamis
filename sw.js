/* Service Worker — chỉ lưu đệm "vỏ" ứng dụng (các tệp cùng tên miền). Không chạm tới dữ liệu Google. */
const VERSION = 'hlis-shell-v2';
const SHELL = ['./', './index.html', './config.js', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png', './favicon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return; // Google/Apps Script: để trình duyệt tự xử lý
  // Mạng trước, đệm sau: luôn lấy bản mới nhất khi có mạng; mất mạng thì vẫn mở được vỏ ứng dụng
  e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(VERSION).then(c => c.put(e.request, cp)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
