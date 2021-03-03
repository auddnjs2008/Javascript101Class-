const boxes = document.querySelectorAll("div");

const handleClick = (e) => {
  console.log(e.target.getBoundingClientRect());
  console.log(`client X:${e.clientX}, clien Y:${e.clientY} `);
  console.log(`window X:${e.pageX}, window Y:${e.pageY}`);
};

const init = () => {
  boxes.forEach((item) => item.addEventListener("click", handleClick));
};

init();
