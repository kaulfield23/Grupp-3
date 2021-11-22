function printFilteredCard(msg) {
  let item = JSON.parse(JSON.stringify(dataForFilter));
  let filtered = item.filter((card) => {
    return (
        checkCheckBox(card) && checkTag(card) && checkRate(card) && checkInput(card)
    );
  });
  let result = JSON.stringify(filtered);
  if (filtered.length === 0) {
    result = "No matching result";
  }
  
  // getData2('filter', filtered)

  if(msg ==="close"){
    showSelectedTags.innerHTML ="";
    filter.style.display = "none";
    filterBtn.style.display="block"
  }

  buildCardsForChallenges(filtered);
}

function checkCheckBox(card){
  return(
    (checkBoxFilters.length === 0 ||
      (checkBoxFilters.indexOf(card.type) !== -1
      && rate.min <= card.rating && card.rating <= rate.max))
  )
}

function checkTag(card){
  return(
    (tagFilter.length === 0 ||
      (tagFilter.every((value) => card.labels.includes(value)
      &&rate.min <= card.rating && card.rating <= rate.max)))
  )

}
function checkRate(card){
  return(
    (rate.min <= card.rating && card.rating <= rate.max)
  )
}

function checkInput(card){
  return(
    (card.title.toLowerCase().includes(inputSearchContainer)
    || card.description.toLowerCase().includes(inputSearchContainer))
  )
}

//text