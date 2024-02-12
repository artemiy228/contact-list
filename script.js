function addAllInfoUser() {
  const nameValue = getValueInputName();
  const surnameValue = getValueInputSurname();
  const telephoneValue = getValueInputTelephone();
  const char = nameValue[0].toLowerCase();
  const template = createBlockElement(nameValue, surnameValue, telephoneValue);

  const idElement = document.querySelector(`#element--${char}`);
  console.log(typeof hundleCounter());
  idElement.classList.add("active");
  idElement.insertAdjacentHTML("beforeend", template);
  deleteItem();
}

function removeLastElement() {
  const nameValue = getValueInputName();
  const char = nameValue[0].toLowerCase();
  const blockElement = document.querySelector(`#element--${char}`);
  blockElement.classList.remove("active");
  return blockElement;
}

function hundleCounter(type) {
  const nameValue = getValueInputName();
  const char = nameValue[0].toLowerCase();
  const countElement = document.querySelector(`.counter-${char}`);

  parseInt(countElement.value);

  if (type == "minus") {
    if (countElement.value == 1) {
      removeLastElement();
      return (countElement.value = "");
    }
    return parseInt(countElement.value--);
  } else if (type == "zero") {
    return (countElement.value = "");
  } else {
    return parseInt(countElement.value++);
  }
}

function createBlockElement(name, surname, telephone) {
  const block = `
    <ul class="block-element">
      <li>Name: ${name}</li>
      <li>Surname: ${surname}</li>
      <li>tel: ${telephone}</li>
      <button class="delete">Удалить запись</button>
    </ul>
  `;
  return block;
}

function getValueInputName() {
  const inputName = document.querySelector(".name");
  const textInputName = inputName.value.replaceAll(" ", "");
  return textInputName;
}

function getValueInputSurname() {
  const inputSurname = document.querySelector(".surname");
  const textInputSurname = inputSurname.value.replaceAll(" ", "");
  return textInputSurname;
}

function getValueInputTelephone() {
  const inputTelephone = document.querySelector(".telephone");
  const textInputSurname = inputTelephone.value.replaceAll(" ", "");
  return textInputSurname;
}

function clearListItems() {
  const arrAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "a",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  arrAlphabet.forEach((el) => {
    const arrElementChar = "element--" + el;
    const contactElement = document.querySelector(`#${arrElementChar}`);
    contactElement.innerHTML = el.toUpperCase();
  });
  hundleCounter("zero");
  const activeElements = document.querySelectorAll(".active");
  activeElements.forEach((element) => {
    element.classList.remove("active");
  });
}

function deleteItem() {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((item) => {
    const parentBlock = item.parentNode.parentNode;
    console.log(parentBlock);
    item.addEventListener("click", () => {
      parentBlock.removeChild(item.parentNode);
      hundleCounter("minus");
    });
  });
}

const contentElements = document.querySelectorAll(".contact-element");
const contentInfo = document.querySelectorAll(".contact-desc");
contentElements.forEach((item) => {
  item.addEventListener("click", (el) => {
    console.log(el.target);
  });
});
