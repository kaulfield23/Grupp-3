let minNum = 0;
let maxNum = 10;

const giveStarAndGetNumbers = (event) => {
  let secondStar = document.getElementById("2");
  let inputNum = parseInt(event.target.id);
  if (
    event.target.id === "1" &&
    event.target.className === "fas fa-star" &&
    secondStar.className === "far fa-star"
  ) {
    let star = document.getElementById("1");
    star.className = "far fa-star";
    star.setAttribute("onlick", "ratingFilter1(event)");
    minNum = 0;
    filterRate(minNum);
  } else {
    if (inputNum <= 5) {
      if (inputNum < maxNum -5) {
        minNum = parseInt(event.target.id);
        filterRate(minNum);
        changeStar(1, minNum);
      } else {
        alert("Give a number which is less than maximum number");
      }
    } else {
      if (minNum < inputNum -5) {
        maxNum = parseInt(event.target.id);
        filterRate(maxNum);
        changeStar(6, maxNum);
      } else {
        alert(`Give a number which is more than minimum number`);
      }
    }
  }
};

// const ratingFilter1 = (event) => {
//   let secondStar = document.getElementById("2");
//   if (parseInt(event.target.id) < maxNum - 5) {
//     minNum = parseInt(event.target.id);
//   } else {
//     alert("Give a number which is less than maximum number");
//   }
//   if (
//     event.target.id === "1" &&
//     event.target.className === "fas fa-star" &&
//     secondStar.className === "far fa-star"
//   ) {
//     let star = document.getElementById("1");
//     star.className = "far fa-star";
//     star.setAttribute("onlick", "ratingFilter1(event)");
//     minNum = 0;
//   } else {
//     changeStar(1, minNum);
//   }
//   filterRate(minNum);
//   // changeStar(1, minNum);
// };
// const ratingFilter2 = (event) => {
//   if (parseInt(event.target.id) - 5 > minNum) {
//     maxNum = parseInt(event.target.id);
//   } else {
//     alert(`Give a number which is more than minimum number`);
//   }
//   filterRate(maxNum);
//   changeStar(6, maxNum);
// };

const changeStar = (num, bpNum) => {
  let max = num > 5 ? 10 : 5;
  for (let i = num; i < bpNum + 1; i++) {
    let star = document.getElementById(`${i}`);
    star.setAttribute("class", "fas fa-star");
    star.setAttribute("onlick", "ratingFilter1(event)");
    star.style.color = "purple";
  }
  for (let i = bpNum; i < max; i++) {
    let star = document.getElementById(`${i + 1}`);
    star.setAttribute("class", "far fa-star");
    star.style.color = "purple";
  }
};

let min = 0;
let max;
let rate = {};
const filterRate = (num) => {
  num > 5 ? (max = num - 5) : (min = num);
  rate.min = min;
  rate.max = max;

  let item = JSON.parse(JSON.stringify(cards));
  console.log(rate);
  let filteredRate = item.filter(
    (card) => rate.min <= card.rating && card.rating <= rate.max
  );
};
filterRate(maxNum);
//test