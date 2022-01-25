
const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-button');


function toggleMenuButton() {
  menu.classList.toggle('header__menu_opened');
  menuButton.classList.toggle('header__menu-button_opened');
  menuButton.getAttribute('aria-label') === 'Открыть меню'
    ? menuButton.setAttribute('aria-label', 'Закрыть меню')
    : menuButton.setAttribute('aria-label', 'Открыть меню');
}

function closeMenu(e) {
  if (e.target.classList.contains('header__menu-link')) {
    menuButton.classList.remove('header__menu-button_opened');
    menu.classList.remove('header__menu_opened');
    menuButton.setAttribute('aria-label', 'Открыть меню')
  }

}

menuButton.addEventListener('click', toggleMenuButton);

menu.addEventListener('click', closeMenu);

console.log(`
Ваша отметка - 83 балла(ов)
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений


Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.

`);