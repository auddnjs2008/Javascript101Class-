const carrot = document.querySelector(".special");
const button = document.querySelector("button");

const handleClick = (e) => {
  carrot.scrollIntoView({ behavior: "smooth", block: "center" });
};

const init = () => {
  button.addEventListener("click", handleClick);
};

init();
