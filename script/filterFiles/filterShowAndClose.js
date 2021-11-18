//open and close filter
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
    printFilteredCard('close');
  }
};
//when you open the nav menu, then it hides filter
const hideFilter = () => {
  filter.style.display === "none"
    ? (filterBtn.style.display = "block")
    : (filter.style.display = "none");
};

//generate tags
let tagName = [];
const generateTags = () => {
  let item = JSON.parse(JSON.stringify(cards));
  if (tagName.length === 0) {
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
      tags.onclick = filterTags;
      tags.innerHTML = tagName[i];
      byTags.appendChild(tags);
    }
  }
};
