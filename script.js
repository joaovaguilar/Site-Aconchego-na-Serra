// 1. Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    alvo.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 2. Efeito de aparecer ao rolar (scroll animation)
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
    }
  });
});

document.querySelectorAll('section').forEach(secao => {
  observador.observe(secao);
});

// 3. Efeito no botão "Reservar Agora"
const botaoReserva = document.querySelector('.btn-reserve');
const secaoReserva = document.querySelector('#booking');

window.addEventListener('scroll', () => {
  const posicao = secaoReserva.getBoundingClientRect().top;
  if (posicao < window.innerHeight && posicao > 0) {
    botaoReserva.classList.add('destaque');
  } else {
    botaoReserva.classList.remove('destaque');
  }
});

// 4. Confirmação no formulário
const form = document.querySelector('#booking form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Reserva enviada com sucesso! Entraremos em contato por e-mail.');
  form.reset();
});

