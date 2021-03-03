const special = document.querySelector(".special");
const buttons = document.querySelectorAll("button");
const whereSpecial = special.getBoundingClientRect();

const repeatAddScroll = () => {
  window.scrollBy(0, 100);
  //window.scrollBy({top:100,left:0,behavior:smooth});
};

const toNumberScroll = () => {
  window.scrollTo(0, 100);
};

const toSpecialScroll = () => {
  special.scrollIntoView();
  //window.scroll(0, whereSpecial.top);
};

const init = () => {
  buttons[0].addEventListener("click", repeatAddScroll);
  buttons[1].addEventListener("click", toNumberScroll);
  buttons[2].addEventListener("click", toSpecialScroll);
};

init();
