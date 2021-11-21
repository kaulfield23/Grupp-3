function printFilteredCard(msg) {
  let showSelectedTags = document.querySelector(".showSelectedTags");
  let item = JSON.parse(JSON.stringify(dataForFilter));
  let filtered = item.filter((card) => {
    return (
      (checkBoxFilters.length === 0 ||
        (checkBoxFilters.indexOf(card.type) !== -1
        && rate.min <= card.rating && card.rating <= rate.max))
        &&(tagFilter.length === 0 ||
        (tagFilter.every((value) => card.labels.includes(value)
        &&rate.min <= card.rating && card.rating <= rate.max)))
        &&(rate.min <= card.rating && card.rating <= rate.max)
        &&(card.title.toLowerCase().includes(inputSearchContainer) || card.description.toLowerCase().includes(inputSearchContainer))
    );
  });
  let result = JSON.stringify(filtered);
  if (filtered.length === 0) {
    result = "No matching result";
  }
  showSelectedTags.innerHTML = result;

  if(msg ==="close"){
    showSelectedTags.innerHTML ="";
    filter.style.display = "none";
    filterBtn.style.display="block"
  }
}
