//print filtered cards in hmtl
import { checkBoxFilters } from "./getCheckboxes.js";
import { tagFilter } from "./getTags.js";
import { originalData } from "./filterShowAndClose.js";
import { rate } from "./getRates.js";
import { inputText } from "./getInput.js";
export function printFilteredCard() {
  let filtered = originalData.filter((card) => {
    return (
      checkCheckBox(card) &&
      checkTag(card) &&
      checkRate(card) &&
      checkInput(card)
    );
  });

  //codes for new course for sorting filtered cards by name and rate
  const sortBy = document.querySelector(".nameOrRate");
  const sortIcon = document.querySelector(".sortIcon");

  sortIcon.addEventListener("click", () => {
    sortFunElement(filtered, sortDirection);
  });
  sortBy.addEventListener("change", () => {
    sortFunElement(filtered, sortDirection);
  });
  buildCardsForChallenges(filtered);
}

//4 functions to for filtering.
function checkCheckBox(card) {
  return (
    checkBoxFilters.length === 0 ||
    (checkBoxFilters.indexOf(card.type) !== -1 &&
      rate.min <= card.rating &&
      card.rating <= rate.max)
  );
}

function checkTag(card) {
  return (
    tagFilter.length === 0 ||
    tagFilter.every(
      (value) =>
        card.labels.includes(value) &&
        rate.min <= card.rating &&
        card.rating <= rate.max
    )
  );
}

function checkRate(card) {
  return rate.min <= card.rating && card.rating <= rate.max;
}

function checkInput(card) {
  return (
    card.title.toLowerCase().includes(inputText) ||
    card.description.toLowerCase().includes(inputText)
  );
}
