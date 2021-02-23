const Listes = document.querySelectorAll("li");

const handleResize = () => {
  Listes[0].innerText = `window.screen:${window.screen.width},${window.screen.height}`;
  Listes[1].innerText = `window.outer:${window.outerWidth},${window.outerHeight}`;
  Listes[2].innerText = `window.inner:${window.innerWidth},${window.innerHeight}`;
  Listes[3].innerText = `documentElement.clientWidth:${document.documentElement.clientWidth},${document.documentElement.clientHeight}`;
};

const init = () => {
  handleResize();
  window.addEventListener("resize", handleResize);
};

init();
