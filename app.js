// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile menu
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('header nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('hidden');
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Demo news data
const demoNews = [
  {
    date: '2025-08-10',
    title: 'Ra mắt máy chủ mới: Bạch Hổ',
    desc: 'Tăng tốc đua top, quà đăng nhập 7 ngày, x2 kinh nghiệm toàn server.'
  },
  {
    date: '2025-07-22',
    title: 'Cập nhật 1.2.0 - Thú cưỡi Hắc Long',
    desc: 'Thêm thú cưỡi mới, tối ưu PK liên server, cân bằng kỹ năng.'
  },
  {
    date: '2025-07-01',
    title: 'Sự kiện Hè Rực Lửa',
    desc: 'Thu thập vỏ sò, đổi trang phục Hạ Nhật và khung avatar độc quyền.'
  }
];

const newsList = document.getElementById('news-list');
demoNews.forEach(n => {
  const article = document.createElement('article');
  article.className = 'news-item';
  article.innerHTML = `
    <time datetime="${n.date}">${new Date(n.date).toLocaleDateString('vi-VN')}</time>
    <h3>${n.title}</h3>
    <p>${n.desc}</p>
    <a href="#" class="btn">Xem chi tiết</a>
  `;
  newsList.appendChild(article);
});

// Feedback form (demo only)
const form = document.getElementById('feedback-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    msg.textContent = 'Đã nhận góp ý! (demo — chưa gửi đi)';
    form.reset();
  });
}
