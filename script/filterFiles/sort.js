let sortDirection = "ascending";

//change the direction
const changeDirection = () => {
  sortDirection = sortDirection === "ascending" ? "descending" : "ascending";
};

//sort by name and rate
const sortFunc = (data, sortType, sortDirection) => {
    console.log(sortDirection)
  const sortedList = data.sort(function (a, b) {
    switch (sortType.toLowerCase()) {
      case "name":
        return a.title < b.title ? -1 : 1;
      case "rate":
      default:
        return a.rating - b.rating;
    }
  });
  if (sortDirection === "descending"){
    return sortedList.reverse();
  }
  return sortedList;

};

//function for addEventListener
const sortFunElement = (data, sortDirection) => {
  const sortBy = document.querySelector(".nameOrRate");
  let sortType = sortBy.options[sortBy.selectedIndex].text;
  const container = document.querySelector("section.challenges");
  container.innerHTML = "";
  console.log(data)
  buildCardsForChallenges(sortFunc(data, sortType, sortDirection));
};
