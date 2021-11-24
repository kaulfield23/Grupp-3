//print filtered cards in hmtl
function printFilteredCard() {
  let filtered = originalData.filter((card) => {
    return (
        checkCheckBox(card) && checkTag(card) && checkRate(card) && checkInput(card)
    );
  });
  buildCardsForChallenges(filtered);
}

//4 functions to for filtering.
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
