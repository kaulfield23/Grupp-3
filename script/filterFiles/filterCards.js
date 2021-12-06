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
  
  const sortIcon = document.querySelectorAll('.sortIcon')
  sortIcon.forEach((element) =>{
      element.onclick = (event) => {
    let sortType = event.target.getAttribute("sortType");
          const container = document.querySelector("section.challenges");
          container.innerHTML = "";
          buildCardsForChallenges(sort(filtered,sortType));
      }
  })
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
