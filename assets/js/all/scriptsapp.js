document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabProduct');
  const contents = document.querySelectorAll('.contentTabProduct');
  const container = document.querySelector('.contentProductsBlock');
  const clics = document.querySelectorAll('.clicProduct');
  const triggers = document.querySelectorAll('.info-box');
  const allTargets = document.querySelectorAll('.phoneItem');
  const allBlockTargets = document.querySelectorAll('.block-acordeon');
  const targetText = document.querySelector('.titleProducts .target-text');


  triggers.forEach(trigger => {
    trigger.onclick = function () {
      const selector = trigger.getAttribute('data-target');

      allTargets.forEach(el => el.classList.remove('active'));
      allBlockTargets.forEach(el => el.classList.remove('active'));

      const targetsToShow = document.querySelectorAll(selector);
      targetsToShow.forEach(el => el.classList.add('active'));
    };
  });

  // Activar el primer contenido por defecto
  if (tabs.length > 0 && contents.length > 0) {
    contents[0].classList.add('active');
    contents[0].style.display = 'block';
    if (container) {
      container.classList.add('activated1');
    }
  }

  clics.forEach((clic, index) => {
    clic.addEventListener('click', (e) => {

      const text_titulo = e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('h4').textContent.trim();
      targetText.textContent = '';
      targetText.textContent = text_titulo;

      // Remover clase 'active' de todos los contenidos
      contents.forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
      });

      // Resetear clases del contenedor
      if (container) {
        container.classList.remove(...container.classList);
        container.classList.add('contentProductsBlock'); // Restaurar clase base
      }

      // Activar contenido correspondiente
      contents[index].classList.add('active');
      contents[index].style.display = 'block';

      // Agregar clase activated#
      if (container) {
        container.classList.add(`activated${index + 1}`);
      }
    });
  });
});

document.querySelector('.btn-acordeon-monterrey').addEventListener('click', function () {
  const targetElement = document.querySelectorAll('.block-acordeon.monterrey');
  Array.from(targetElement).forEach(element => {
    element.classList.toggle('active');
    if (element.querySelector('.customtxt')) {
      document.querySelector('.block-acordeon.monterrey.two').classList.toggle('d-none');
    }
  });
});

document.querySelector('.btn-acordeon-guadalajara').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.guadalajara');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-cdmx').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.cdmx');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-torreon').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.torreon');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-saltillo').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.saltillo');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-toluca').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.toluca');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-queretaro').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.queretaro');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-leon').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.leon');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-puebla').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.puebla');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-cuernavaca').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.cuernavaca');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-aguascalientes').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.aguascalientes');
  targetElement.classList.toggle('active');
});

document.querySelector('.btn-acordeon-slp').addEventListener('click', function () {
  const targetElement = document.querySelector('.block-acordeon.slp');
  targetElement.classList.toggle('active');
});
