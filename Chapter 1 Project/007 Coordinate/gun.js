const coordinate = document.querySelector(".coordinate");
const img = document.querySelector("img");
const boxes = document.querySelectorAll(".box");

const handleMoveMouse = (e) => {
  img.style.top = `${e.clientY}px`;
  img.style.left = `${e.clientX}px`;
  coordinate.style.top = `${e.clientY}px`;
  coordinate.style.left = `${e.clientX}px`;
  boxes[0].style.width = `${e.clientX}px`;
  boxes[0].style.height = `${e.clientY}px`;
  boxes[1].style.width = `${Math.abs(window.innerWidth - e.clientX)}px`;
  boxes[1].style.height = `${e.clientY}px`;
  boxes[2].style.width = `${e.clientX}px`;
  boxes[2].style.height = `${Math.abs(window.innerHeight - e.clientY)}px`;
  boxes[3].style.width = `${Math.abs(window.innerWidth - e.clientX)}px`;
  boxes[3].style.height = `${Math.abs(window.innerHeight - e.clientY)}px`;

  coordinate.innerText = `(${e.clientX},${e.clientY})`;
};

const init = () => {
  window.addEventListener("mousemove", handleMoveMouse);
};

init();
