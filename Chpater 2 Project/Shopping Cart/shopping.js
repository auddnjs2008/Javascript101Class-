const list = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");

const deleteList = (e) => {
  const {
    currentTarget: {
      parentNode: { id },
    },
  } = e;
  list.removeChild(e.currentTarget.parentNode);
  // 로컬 딜리트 함수
  localDelete(id);
};

const localDelete = (id) => {
  let store = JSON.parse(localStorage.getItem("cart"));
  store = store.filter((item) => item.id !== parseInt(id));
  localStorage.setItem("cart", JSON.stringify(store));
};

const localStore = (text, id) => {
  const store = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  localStorage.setItem("cart", JSON.stringify([...store, { text, id }]));
};

const paintList = (text, id) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.id = id;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteList);
  li.appendChild(button);
  list.prepend(li);
};

const initPaint = () => {
  const initStore = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  initStore.forEach((item) => paintList(item.text, item.id));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const text = input.value;
  const id = Date.now();
  if (text !== "") {
    // 생성해서 그려주는 함수
    paintList(text, id);
    // 로컬에 저장해주는 함수
    localStore(text, id);
  }
  input.value = "";
};

const init = () => {
  initPaint();
  form.addEventListener("submit", handleSubmit);
};

init();
