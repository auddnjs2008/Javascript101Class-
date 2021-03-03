"use strict";
const button = document.querySelector(".progress");
const timeBox = document.querySelector(".timeBox");
const number = document.querySelector(".number");
const field = document.querySelector(".field");
const restart = document.querySelector(".regame"); // display는 flex로
const message = restart.querySelector("div");
const restartBtn = restart.querySelector("button");

const bg = document.querySelector("#bg").play();
const soundBug = document.querySelector("#bugPull");
const soundCarrot = document.querySelector("#carrotPull");
const soundWin = document.querySelector("#win");

const fieldWidth = field.getBoundingClientRect().width - 91;
const fieldHeight = field.getBoundingClientRect().height - 91;

let game = 0;
let time = 10;
let carrotNumber = 10;
let timer;

const onCatch = (e) => {
  const {
    target: { id },
  } = e;
  if (id === "carrot") {
    soundCarrot.play();
    carrotNumber--;
    number.innerText = `${carrotNumber}`;
    field.removeChild(e.target);
    if (!carrotNumber) {
      soundWin.play();
      game = 0;
      carrotNumber = 10;
      clearInterval(timer);
      createReturn("You Won!!! HAHA");
      onTimerBox();
    }
  } else if (id === "bug") {
    soundBug.play();
    game = 0;
    clearInterval(timer);
    createReturn("You Lost!!! HAHA");
    onTimerBox();
  }
};

const createElement = (src, id) => {
  const img = document.createElement("img");
  img.src = src;
  img.id = id;
  const x = Math.floor(Math.random() * fieldWidth);
  const y = Math.floor(Math.random() * fieldHeight);
  img.style.transform = `translate(${x}px,${y}px)`;
  field.appendChild(img);
};

const createCarrot = (number) => {
  while (number--) {
    createElement("/Game/carrot/img/carrot.png", "carrot");
  }
};

const createBug = (number) => {
  while (number--) {
    createElement("/Game/carrot/img/bug.png", "bug");
  }
};
const settingField = () => {
  // 장애물과  목표물을 만들어준다.
  field.innerHTML = "";
  if (game) {
    createCarrot(10);
    createBug(10);
  }
};

const onTimerBox = () => {
  if (!game) {
    // 멈춰있다는 의미
    timeBox.innerText = "00:00";
  } else {
    //게임이 플레이 되면
    settingTimer(time);
    timer = setInterval(() => {
      settingTimer(--time);
      if (time === 0) {
        clearInterval(timer);
        button.style.opacity = "0";
        createReturn("You Lose HaHa");
      }
    }, 1000);
  }
};

const settingTimer = (time) => {
  const min = Math.floor(time / 60);
  const sec = time % 60;
  timeBox.innerText = `${min}:${sec}`;
};

const onreturnClick = (e) => {
  game = 1;
  time = 10;
  carrotNumber = 10;
  button.style.opacity = "1";
  button.innerHTML = '<i class="fas fa-square-full"></i>';
  number.innerText = `${carrotNumber}`;
  button.id = "pause";
  restart.style.display = "none";
  onTimerBox();
  settingField();
  field.addEventListener("click", onCatch);
};

const createReturn = (text) => {
  restart.style.display = "flex";
  message.innerText = text;
  field.removeEventListener("click", onCatch);
  restartBtn.addEventListener("click", onreturnClick);
};

const onControlClick = (e) => {
  const {
    currentTarget: { id },
  } = e;
  if (id === "play") {
    e.currentTarget.innerHTML = '<i class="fas fa-square-full"></i>';
    game = 1;
    number.innerText = `${carrotNumber}`;
    e.currentTarget.id = "pause";
    settingField();
  } else {
    game = 0;
    e.currentTarget.style.opacity = "0";
    clearInterval(timer);
    createReturn("Do you want to regame?");
  }
  onTimerBox();
};

const init = () => {
  button.addEventListener("click", onControlClick);
  field.addEventListener("click", onCatch);
};

init();
