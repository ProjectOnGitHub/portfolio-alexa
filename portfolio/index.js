
import i18Obj from './assets/scripts/translate.js';

const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-button');
const themeButton = document.querySelector('.header__theme-button');
const activePortfolioButton = document.querySelector('.active');

const lightThemeMainSelectors = ['.skills', '.portfolio', '.video', '.price', '.skills__list', '.section__title-cover', '.price__subtitle', '.price__sublist'];
const lightThemeTitleSelectors = ['.section__title'];
const lightThemeMenuSelectors = ['.header__menu', '.header__menu-link'];
const lightThemePortfolioSelectors = ['.portfolio__filter-button'];

const langSwitcher = document.querySelector('.header__switcher');
const langRuButton = langSwitcher.querySelector('[name=ru]');
const langEnButton = langSwitcher.querySelector('[name=en]');

const portfolioFilter = document.querySelector('.portfolio__filter');
const portfolioButtons = portfolioFilter.querySelectorAll('.portfolio__filter-button');
const portfolioImages = document.querySelectorAll('.portfolio__photo');


const changeImage = (e) => {
  if (e.target.classList.contains('portfolio__filter-button')) {
    portfolioButtons.forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
  }
}

portfolioFilter.addEventListener('click', changeImage);

const toggleMenuButton = () => {
  menu.classList.toggle('header__menu_opened');
  menu.classList.contains('light-theme__burger-menu')
    ? menuButton.classList.toggle('light-theme__burger-menu-button')
    : menuButton.classList.toggle('header__menu-button_opened');
}

const closeMenu = (e) => {
  if (e.target.classList.contains('header__menu-link')) {
    menuButton.classList.remove('light-theme__burger-menu-button');
    menuButton.classList.remove('header__menu-button_opened');
    menu.classList.remove('header__menu_opened');
  }
}

const getSelectors = (arr, selector) => {
  arr.map((item) => Array
    .from(document.querySelectorAll(item)))
    .reduce((acc, cur) => acc.concat(cur))
    .forEach(item => item.classList.toggle(selector));
}

const toggleTheme = () => {
  getSelectors(lightThemeMainSelectors, 'light-theme');
  getSelectors(lightThemeTitleSelectors, 'light-theme__section-title');
  getSelectors(lightThemeMenuSelectors, 'light-theme__burger-menu');
  getSelectors(lightThemePortfolioSelectors, 'light-theme__portfolio-button');
  activePortfolioButton.classList.toggle('active');
  themeButton.classList.toggle('header__theme-button_dark');
}

const switchLanguage = (e) => {
  if (e.target === langRuButton) {
    langRuButton.classList.add('header__switcher-button_active');
    langEnButton.classList.remove('header__switcher-button_active');
  }
  if (e.target === langEnButton) {
    langRuButton.classList.remove('header__switcher-button_active');
    langEnButton.classList.add('header__switcher-button_active');
  }
  return getTranslate(e.target.name);
}

const getTranslate = (lang) => {
  document.querySelectorAll('[data-i18]')
    .forEach(item => item.textContent = i18Obj[lang][item.dataset.i18]);
}

menuButton.addEventListener('click', toggleMenuButton);
menu.addEventListener('click', closeMenu);
themeButton.addEventListener('click', toggleTheme);
langSwitcher.addEventListener('click', switchLanguage);


