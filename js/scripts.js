// Constantes
const menuButton = document.querySelector('.menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');



// Events
menuButton.addEventListener('click', (e) => {
  let opened = navigationMobile.classList.contains('open');
  if (opened)
  {
    navigationMobile.classList.remove('open');
    navigationMobile.classList.add('close');
  } else
  {
    navigationMobile.classList.remove('close');
    navigationMobile.classList.add('open');
  }
});