const filter = document.querySelector(".filter");
const filterBtn = document.querySelector(".filterBtn");
const showAndCloseFilter = (event) => {
  if (event.target.classList.contains("filterBtn")) {
    filterBtn.style.display = "none";
    filter.style.display = "block";
    generateTags();
  } else {
    filter.style.display = "none";
    filterBtn.style.display = "block";
  }
};
const hideFilter = () => {
  filter.style.display === "none"
    ? (filterBtn.style.display = "block")
    : (filter.style.display = "none");
};

//fetching data
async function getData() {
  const url = "https://lernia-sjj-assignments.vercel.app/api/challenges";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
let tagFilter = [];
let showFilteredTags = [];
let cards = [];
getData().then((data) => {
  cards = data.challenges;
});
//change the background color of tag button when user click it
const toggleBackgroundColor = (event) => {
  let btn = event.target;
  if (btn.classList.contains("tagSelected")) {
    btn.classList.remove("tagSelected");
  } else {
    btn.classList.add("tagSelected");
  }
};
//show only selected tags in html
const filterTags = (event) => {
  toggleBackgroundColor(event);
  addFilteredTag(event);
  printFilteredCard();
};
//generate tags
let tagName = [];
const generateTags = () => {
  let item = JSON.parse(JSON.stringify(cards));
  item.forEach((card) =>
    card.labels.forEach((value) => {
      if (!tagName.includes(value)) {
        tagName.push(value);
      }
    })
  );
  for (let i = 0; i < tagName.length; i++) {
    let tags = document.createElement("button");
    let byTags = document.querySelector(".byTags");
    tags.setAttribute("class", "tags");
    tags.setAttribute("onclick", "filterTags(event)");
    tags.innerHTML = tagName[i];
    byTags.appendChild(tags);
  }
};

//show selected checkbox values when user click the checkbox
let checkBoxFilters = [];
const onClickCheckbox = (event) => {
  let eventId = event.target.id;
  let boxIsChecked = event.target.checked;

  if (boxIsChecked) {
    checkBoxFilters.push(eventId);
  } else {
    checkBoxFilters.splice(checkBoxFilters.indexOf(eventId), 1);
  }
  printFilteredCard();
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
  console.log(item);
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

let minNum = 0;
let maxNum = 10;
const ratingFilter1 = (event) => {
  minNum = parseInt(event.target.id);
  if (minNum >= maxNum - 5) {
    alert("Give a number which is less than maximum number");
  } else {
    filterRate(minNum);
    for (let i = 1; i < minNum + 1; i++) {
      let star = document.getElementById(`${i}`);
      star.setAttribute("class", "fas fa-star");
      star.setAttribute("onlick", "ratingFilter1(event)");
      star.style.color = "purple";
    }
    for (let i = minNum; i < 5; i++) {
      let star = document.getElementById(`${i + 1}`);
      star.setAttribute("class", "far fa-star");
      star.style.color = "purple";
    }
  }
};

const ratingFilter2 = (event) => {
  maxNum = parseInt(event.target.id);
  if (maxNum - 5 <= minNum) {
    alert(`Give a number which is more than minimum number`);
  } else {
    filterRate(maxNum);
    for (let i = 6; i < maxNum + 1; i++) {
      let star = document.getElementById(`${i}`);
      star.setAttribute("class", "fas fa-star");
      star.setAttribute("onlick", "ratingFilter1(event)");
      star.style.color = "purple";
    }
    for (let i = maxNum; i < 10; i++) {
      let star = document.getElementById(`${i + 1}`);
      star.setAttribute("class", "far fa-star");
      star.style.color = "purple";
    }
  }
};
let min = 0;
let max;
let rate = {};
const filterRate = (num) => {
  num > 5 ? (max = num - 5) : (min = num);
  rate.min = min;
  rate.max = max;
  console.log(rate);
};
filterRate(maxNum);
