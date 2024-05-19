import { isValidCard } from "../validators";
import { checkCardIdentity } from "../cardIdentity";
import { CardsWidget } from "../cardsWidget/cardsWidget";
import "./widget.css";

export class CreditCardWidget {
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
