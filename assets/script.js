const menu = document.querySelector('menu');
const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', () => {
    spans.forEach((s) => s.classList.remove('active'));
    span.classList.add('active');
    menu.classList.toggle('open');
  });
});
