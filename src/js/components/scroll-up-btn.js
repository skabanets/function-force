const scrollUpBtn = document.querySelector('.js-scroll-up-btn');

const showSrollUpBtn = () => scrollUpBtn.classList.remove('hide-scroll-up-btn');
const hideScrollUpBtn = () => scrollUpBtn.classList.add('hide-scroll-up-btn');

const onScrollBtnClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const onWindowScroll = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  scrollY > 400 ? showSrollUpBtn() : hideScrollUpBtn();
  scrollUpBtn.addEventListener('click', onScrollBtnClick);
};

window.addEventListener('scroll', onWindowScroll);
