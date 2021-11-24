//open and close filter
import {filterTags} from './getTags.js'
const showAndClose = document.querySelectorAll('.showAndCloseFilter');
showAndClose.forEach((element) =>{
  element.addEventListener('click', (event) =>{
    const filter = document.querySelector(".filter");
    const filterBtn = document.querySelector(".filterBtn");
    if (event.target.classList.contains("filterBtn")) {
      filterBtn.style.display = "none";
      filter.style.display = "block";
      generateTags();
    } else {
      filter.style.display = "none";
      filterBtn.style.display = "block";
    }

  })
})

//when you open the nav menu from hamburger, then it hides filter
document.querySelector('.hide').addEventListener('click', () =>{
  const filter = document.querySelector(".filter");
  filter.style.display === "none"
    ? (filterBtn.style.display = "block")
    : (filter.style.display = "none");
})


//save original data to an array
export let originalData = [];
getChallenges().then((data) => {
  originalData = data;
});

//generate tags
export let tagName = [];
const generateTags = () => {
  if (tagName.length === 0) {
    originalData.forEach((card) =>
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
