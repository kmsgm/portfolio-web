import './ScrollUp.css';

function ScrollUp() {
  window.addEventListener('scroll', () => {
    const scrollup = document.querySelector('.scrollup');
    // when the scroll is higher than 560 viewport height,
    // add the show-scroll class to the a tag with the scroll-top class
    if (window.scrollY >= 560) scrollup?.classList.add('show-scroll');
    else scrollup?.classList.remove('show-scroll');
  });

  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon" />
    </a>
  );
}

export default ScrollUp;
