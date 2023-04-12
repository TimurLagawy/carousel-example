const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const createCardTemplate = () => {
  const card = document.createElement("div");
  card.classList.add("card");
  return card;
};

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    changedItem = ITEM_LEFT;
  } else {
    CAROUSEL.classList.remove("transition-right");
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    changedItem = ITEM_RIGHT;
  }
  const card1 = createCardTemplate();
  card1.innerText = Math.floor(Math.random() * 8);

  const card2 = createCardTemplate();
  card2.innerText = Math.floor(Math.random() * 8);

  const card3 = createCardTemplate();
  card3.innerText = Math.floor(Math.random() * 8);

  changedItem.innerHTML = "";
  changedItem.appendChild(card1);
  changedItem.appendChild(card2);
  changedItem.appendChild(card3);

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});
