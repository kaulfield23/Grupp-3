 
let inputSearchField = document.querySelector('#inputSearch');
let inputSearchContainer = '';

inputSearch.addEventListener('keyup', () => {
    inputSearchContainer = inputSearchField.value.trim().toLowerCase();
    // let matches = cards.filter(state => {
    //     const regex = new RegExp(`^${inputSearchContainer}`, 'gi');
    //     return state.title.match(regex) || state.description.match(regex);
    // });
    printFilteredCard();
})

//text