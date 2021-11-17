function printFilteredCard() {
  let showSelectedTags = document.querySelector(".showSelectedTags");
  let item = JSON.parse(JSON.stringify(cards));
  let filtered = item.filter((card) => {
    return (
      (checkBoxFilters.length === 0 ||
        checkBoxFilters.indexOf(card.type) !== -1) &&
      (tagFilter.length === 0 ||
        tagFilter.every((value) => card.labels.includes(value)) &&
        (rate.min <= card.rating && card.rating <= rate.max))

    );
  });

  let result = JSON.stringify(filtered);
  if (filtered.length === 0) {
    result = "No matching result";
  }
  showSelectedTags.innerHTML = result;
}
