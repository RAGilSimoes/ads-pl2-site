let capinha = document.getElementById('capinha');
let message = document.getElementById('message');

capinha.addEventListener('click', () => {
  message.style.display = message.style.display == 'block' ? 'none' : 'block';
});
