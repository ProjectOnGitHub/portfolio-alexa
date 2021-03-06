import i18Obj from './assets/scripts/translate.js';

const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-button');
const themeButton = document.querySelector('.header__theme-button');

const lightThemeMainSelectors = ['.skills', '.portfolio', '.video', '.price', '.skills__list', '.section__title-cover', '.price__subtitle', '.price__sublist'];
const lightThemeTitleSelectors = ['.section__title'];
const lightThemeMenuSelectors = ['.header__menu', '.header__menu-link'];
const lightThemePortfolioSelectors = ['.portfolio__filter-button'];

const langSwitcher = document.querySelector('.header__switcher');
const langButtons = langSwitcher.querySelectorAll('.header__switcher-button');

const portfolioFilter = document.querySelector('.portfolio__filter');
const portfolioButtons = portfolioFilter.querySelectorAll('.portfolio__filter-button');
const portfolioImages = document.querySelectorAll('.portfolio__photo');

const getTranslate = (lang = 'en') => document.querySelectorAll('[data-i18]')
  .forEach((item) => item.textContent = i18Obj[lang][item.dataset.i18]);

const setLocalStorage = (name, value) => localStorage.setItem(`${name}`, value);

const getLocalStorageLang = () => {
  if (localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    document.querySelector(`[name=${lang}]`).classList.add('active');
    getTranslate(lang);
  } else {
    document.querySelector('[name=\'en\']').classList.add('active');
  }
};

const getSelectors = (arr, selector) => {
  arr.map((item) => Array
    .from(document.querySelectorAll(item)))
    .reduce((acc, cur) => acc.concat(cur))
    .forEach((item) => item.classList.toggle(selector));
};

const toggleTheme = () => {
  themeButton.classList.toggle('active');
  getSelectors(lightThemeMainSelectors, 'light-theme');
  getSelectors(lightThemeTitleSelectors, 'light-theme__section-title');
  getSelectors(lightThemeMenuSelectors, 'light-theme__burger-menu');
  getSelectors(lightThemePortfolioSelectors, 'light-theme__portfolio-button');
  if (themeButton.classList.contains('active')) {
    setLocalStorage('lightTheme', 'enabled');
  } else { setLocalStorage('lightTheme', 'disabled'); }
};

const getLocalStorageTheme = () => {
  const theme = localStorage.getItem('lightTheme');
  if (theme === 'enabled') {
    toggleTheme();
  }
};

const changeImage = (e) => {
  if (e.target.classList.contains('portfolio__filter-button')) {
    portfolioButtons.forEach((item) => item.classList.remove('active'));
    e.target.classList.add('active');
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${e.target.dataset.i18}/${index + 1}.jpg`);
  }
};

const toggleMenuButton = () => {
  menu.classList.toggle('header__menu_opened');
  menu.classList.contains('light-theme__burger-menu')
    ? menuButton.classList.toggle('light-theme__burger-menu-button')
    : menuButton.classList.toggle('header__menu-button_opened');
};

const closeMenu = (e) => {
  if (e.target.classList.contains('header__menu-link')) {
    menuButton.classList.remove('light-theme__burger-menu-button');
    menuButton.classList.remove('header__menu-button_opened');
    menu.classList.remove('header__menu_opened');
  }
};

const switchLanguage = (e) => {
  if (e.target.classList.contains('header__switcher-button')) {
    langButtons.forEach((item) => item.classList.remove('active'));
    setLocalStorage('lang', e.target.name);
    e.target.classList.add('active');
  }
  return getTranslate(e.target.name);
};

window.addEventListener('load', getLocalStorageLang);
window.addEventListener('load', getLocalStorageTheme);
portfolioFilter.addEventListener('click', changeImage);
menuButton.addEventListener('click', toggleMenuButton);
menu.addEventListener('click', closeMenu);
themeButton.addEventListener('click', toggleTheme);
langSwitcher.addEventListener('click', switchLanguage);
