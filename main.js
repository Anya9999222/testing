/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/validators.js
function isValidCard(input) {
  const number = input.toString();
  const digits = number.replace(/\D/g, "").split("").map(Number);
  let sum = 0;
  let isSecond = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    if (isSecond) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isSecond = !isSecond;
  }
  return sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/cardIdentity.js
function checkCardIdentity(value) {
  const number = value.toString();
  if (number[0] === "6") {
    return ".discover";
  } else if (number[0] === "5") {
    return ".master-card";
  } else if (number[0] === "4") {
    return ".visa";
  } else if (number[0] === "2" && number[1] === "2") {
    return ".mir";
  } else if (number[0] === "3" && number[1] === "5") {
    return ".jcb";
  } else if (number[0] === "3" && number[1] === "4" || number[1] === "7") {
    return ".american-express";
  } else if (number[0] === "3") {
    return ".diners";
  }
}
;// CONCATENATED MODULE: ./src/js/cardsWidget/cardsWidget.js

class CardsWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }
  static get markup() {
    return `
            <div class="cards-container">
                <div class="card visa"></div>
                <div class="card mastercard"></div>
                <div class="card american-express"></div>
                <div class="card discover"></div>
                <div class="card jcb"></div>
                <div class="card diners"></div>
                <div class="card mir"></div>
            </div>
        `;
  }
  bindToDOM() {
    this.parentEl.insertAdjacentHTML("afterbegin", CardsWidget.markup);
  }
  makeActive(sel) {
    const list = document.querySelectorAll(".card");
    list.forEach(i => {
      i.classList.remove("active");
    });
    const activeCard = document.querySelector(sel);
    activeCard.classList.add("active");
  }
}
;// CONCATENATED MODULE: ./src/js/widget/widget.js




class CreditCardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
  }
  static get markup() {
    return `
        <form class="credit-card-form">
            <input type="text" id="card-input" class="input">
            <button class="submit">Click To Validate</button>
        </form>
        `;
  }
  static get submitSelector() {
    return ".submit";
  }
  static get inputSelector() {
    return ".input";
  }
  static get selector() {
    return ".credit-card-form";
  }
  bindToDOM() {
    this.parentEl.innerHTML = CreditCardWidget.markup;
    this.element = this.parentEl.querySelector(CreditCardWidget.selector);
    this.submit = this.element.querySelector(CreditCardWidget.submitSelector);
    this.input = this.element.querySelector(CreditCardWidget.inputSelector);
    this.element.addEventListener("submit", this.onSubmit);
  }
  onSubmit(e) {
    e.preventDefault();
    const value = this.input.value;
    const cardWidget = new CardsWidget();
    if (isValidCard(value)) {
      this.input.classList.add("valid");
      this.input.classList.remove("invalid");
      const activeCard = checkCardIdentity(value);
      cardWidget.makeActive(activeCard);
    } else {
      this.input.classList.add("invalid");
      this.input.classList.remove("valid");
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const container = document.querySelector(".container");
const app_form = new CreditCardWidget(container);
const cardContainer = new CardsWidget(container);
app_form.bindToDOM();
cardContainer.bindToDOM();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;