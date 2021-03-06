const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer_button");

const onAdd = () => {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });

  input.value = "";
  input.focus();
};

let id = 0; // UUID

const createItem = (text) => {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete" data-id=${id}>❌</button>
    </div>
    <div class="item__divider"></div>
`;

  id++;
  //   const item = document.createElement("div");
  //   item.setAttribute("class", "item");

  //   const name = document.createElement("span");
  //   name.setAttribute("class", "item__name");
  //   name.innerText = text;

  //   const deleteBtn = document.createElement("button");
  //   deleteBtn.setAttribute("class", "item__delete");
  //   deleteBtn.innerHTML = "delete";
  //   deleteBtn.addEventListener("click", () => {
  //     item.removeChild(itemRow);
  //   });

  //   const itemDivider = document.createElement("div");
  //   itemDivider.setAttribute("class", "item__divider");

  //   item.appendChild(name);
  //   item.appendChild(deleteBtn);

  //   itemRow.appendChild(item);
  //   itemRow.appendChild(itemDivider);

  return itemRow;
};

addBtn.addEventListener("click", onAdd);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") onAdd();
});

//이벤트 위임
items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
