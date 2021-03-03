"use strict";
import * as sound from "./sound.js";

const CARROT_SIZE = 80;

export const ItemType = Object.freeze({
  carrot: "carrot",
  bug: "bug",
});
export class Field {
  constructor(carrotCount, bugCount) {
    this.CARROT_COUNT = carrotCount;
    this.BUG_COUNT = bugCount;

    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", (e) => {
      this.onClick && this.onClick(e);
    });

    // this.field.addEventListener("click",this.onClick);
    // 이렇게 인자로 전달하면 클래스 정보는 함께 전달되지 않는다
    //자바스크립트에서는 클래스가 무시된채 함수 onClick만 전달된다.
    // 결국  onClick 함수안에  this는 무시된다.  그래서 undefined
    // 가된다.
    //이렇게 클래스를 무시하고 싶지 않을 때는 함수를 클래스와 바인딩을 해줘야 한다.
    // 이것을 this 바인딩이라고 한다.
  }

  onClick(event) {
    const target = event.target;
    if (target.matches(".carrot")) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick(ItemType.carrot);
    } else if (target.matches(".bug")) {
      this.onItemClick && this.onItemClick(ItemType.bug);
    } // matches는  css를 매치해준다.
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  _addItem(className, count, imgPath) {
    // 언더스코어는 내가 외부에서 부르면 안되겠구나
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imgPath);
      item.style.position = "absolute";
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;

      this.field.appendChild(item);
    }
  }
  init() {
    this.field.innerHTML = "";
    this._addItem("carrot", this.CARROT_COUNT, "/Game/carrot/img/carrot.png"); //
    this._addItem("bug", this.BUG_COUNT, "/Game/carrot/img/bug.png");
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
