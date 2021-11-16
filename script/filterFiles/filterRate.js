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
  if (maxNum - 5 < minNum) {
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
