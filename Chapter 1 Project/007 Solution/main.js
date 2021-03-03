const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

// document.addEventListener("mousemove", (event) => {
//   const x = event.clientX;
//   const y = event.clientY;

//   vertical.style.left = `${x}px`;
//   horizontal.style.top = `${y}px`;
//   target.style.left = `${x}px`;
//   target.style.top = `${y}px`;
//   tag.style.left = `${x}px`;
//   tag.style.top = `${y}px`;
//   tag.innerHTML = `${x}px ${y}px`;
// });  // 이렇게  top과  left를 쓰면  이 css친구들은  layout -> paint -> composite
// 단계에서  layout부터 다시 그려지기 때문에 성능이 안 좋다.
// -> translate를 이용해서 composite만 발생시키는게 좋다.

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px,${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px,${y}px)`;
    tag.innerHTML = `${x}px ${y}px`;
  });
});

// load 이벤트는  모든 리소스가 (이미지,폰트)가 다운되면 실행된다.
// getBoundingRect()의 값이 없을 수 있으므로  위에 처럼 해준다.
