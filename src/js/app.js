import { CreditCardWidget } from "./widget/widget";
import { CardsWidget } from "./cardsWidget/cardsWidget";

const container = document.querySelector(".container");

const form = new CreditCardWidget(container);
const cardContainer = new CardsWidget(container);

form.bindToDOM();
cardContainer.bindToDOM();
