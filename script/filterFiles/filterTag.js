let tagFilter = [];
let showFilteredTags = [];
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

//print the new array which has filtered tags
const printFilteredCard = () => {
  let showSelectedTags = document.querySelector(".showSelectedTags");
  let item = JSON.parse(JSON.stringify(cards));
  if (checkBoxFilters.length === 0) {
  }
  let filtered = item.filter(
    (card) =>
      checkBoxFilters.indexOf(card.type) !== -1 &&
      tagFilter.every((value) => card.labels.includes(value))
  );

  let result = JSON.stringify(filtered);
  if (filtered.length === 0) {
    result = "No matching result";
  }
  showSelectedTags.innerHTML = result;
};

//show only selected tags in html
const filterTags = (event) => {
  toggleBackgroundColor(event);
  addFilteredTag(event);
  printFilteredCard();
};
