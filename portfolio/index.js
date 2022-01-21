const menuButton = document.querySelector('.header__menu-button');
function toggleMenuButton() {
  menuButton.classList.toggle('header__menu-button_opened');
}

menuButton.addEventListener('click', toggleMenuButton);