const rate = {
  min: 0,
  max: 5,
};
const setStars = (inputNum, limit) => {
  if (inputNum == 1 && rate[limit] == 1) {
    inputNum = 0;
  }

  if (limit == 'max' && inputNum < rate.min) {
    inputNum = rate.min;
  }
  
  if(limit =='min' && inputNum > rate.max ){
    inputNum = rate.max;
  }

  for (let i = 1; i <= 5; i++) {
    const classSelector = `.${limit}Star${i}`;
    const starElem = document.querySelector(classSelector);
    starElem.classList.toggle('fas', i <= inputNum);
    starElem.classList.toggle('far', i > inputNum);
  }

  rate[limit] = inputNum;
  printFilteredCard();
}

//text