import {printFilteredCard} from './filterCards.js';
export let tagFilter = [];
//change the background color of tag button when user click it
const toggleBackgroundColor = (event) => {
  let btn = event.target;
  if (btn.classList.contains("tagSelected")) {
    btn.classList.remove("tagSelected");
  } else {
    btn.classList.add("tagSelected");
  }
};

//filter the selected tags and save/remove filtered tags in array
const addFilteredTag = (event) => {
  const eventTarget = event.target;
  if (eventTarget.classList.contains("tagSelected")) {
    tagFilter.push(eventTarget.innerHTML);
  } else {
    tagFilter.splice(tagFilter.indexOf(eventTarget.innerHTML), 1);
  }
};

//show only selected tags in html
export const filterTags = (event) => {
  toggleBackgroundColor(event);
  addFilteredTag(event);
  printFilteredCard(event);
};