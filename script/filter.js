const showAndCloseFilter = (event) => {
  const filter = document.querySelector(".filter");
  const filterBtn = document.querySelector(".filterBtn");
  if (event.target.classList.contains("filterBtn")) {
    filterBtn.style.display = "none";
    filter.style.display = "block";
  } else {
    filter.style.display = "none";
    filterBtn.style.display = "block";
  }
};

let cards = [];
let count = 0;

//make random card in cards
for (let i = 0; i < 10; i++) {
  if (count == 6) {
    count = 0;
  }
  let tags = [
    "Web",
    "Linux",
    "Cryptography",
    "Coding",
    "Some other tag",
    "A final tag",
  ];
  if (i % 2 === 0) {
    cards.push({
      challenge: "online",
      tag: `${tags[count]}`,
      id: `${i}`,
    });
  } else {
    cards.push({
      challenge: "on-site",
      tag: `${tags[count]}`,
      id: `${i}`,
    });
  }
  count++;
}

let filteredTag = [];
let showFilteredTags = [];
//show selected checkbox values when user click the checkbox
const onClickCheckbox = (event) => {
  let filteredItem = null;
  const showResult = document.querySelector(".showResult");
  let eventId = event.target.id;
  let boxIsChecked = event.target.checked;

  //chceck if the box is checked and which value it has.
  if (eventId === "checkOnline" && boxIsChecked) {
    filteredTag.push("online");
    // filteredItem = cards.filter((item) => item.challenge === "online");
    // for (item of filteredItem) {
    //   let span = document.createElement("span");
    //   span.innerHTML = JSON.stringify(item.challenge) + "<br>";
    //   showResult.appendChild(span);
    // }
  } else if (eventId === "checkOnSite" && boxIsChecked) {
    filteredTag.push("on-site");
    // filteredItem = cards.filter((item) => item.challenge === "on-site");
    // for (item of filteredItem) {
    //   let span = document.createElement("span");
    //   span.innerHTML = JSON.stringify(item.challenge) + "<br>";
    //   showResult.appendChild(span);
    // }
  } else {
    //when box is unchecked, then it will remove texts in html
    event.target.id === "checkOnline"
      ? filteredTag.splice(filteredTag.indexOf("online"), 1)
      : filteredTag.splice(filteredTag.indexOf("on-site"), 1);
    showResult.textContent = "";
  }
  console.log(filteredTag);
};

//show only selected tags in html
const filterTags = (event) => {
  toggleBackgroundColor(event);
  addFilteredTag(event);
  printFilteredTag();
};

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
    filteredTag.push(eventTarget.innerHTML);
  } else {
    filteredTag.splice(filteredTag.indexOf(eventTarget.innerHTML), 1);
  }
  console.log(filteredTag);
};

//print the new array which has filtered tags
const printFilteredTag = () => {
  showFilteredTags = cards.filter((card) => {
    return filteredTag.indexOf(card.tag) !== -1;
  });
  let showSelectedTags = document.querySelector(".showSelectedTags");
  showSelectedTags.innerHTML = JSON.stringify(showFilteredTags);
  if (showFilteredTags.length === 0) {
    showSelectedTags.innerHTML = "";
  }
  //   for (let index = 0; index < cards.length; index++) {
  //     if (filteredTag.indexOf(cards[index].tag) !== -1) {
  //       showFilteredTags.push(cards[index]);
  //     }
  //   }
};
