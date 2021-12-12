import {printFilteredCard} from './filterCards.js';
export let inputText = '';
//get input text value.
inputSearch.addEventListener('keyup', () => {
    let inputSearchField = document.querySelector('#inputSearch');
    inputText = inputSearchField.value.trim().toLowerCase();
    // let matches = cards.filter(state => {
    //     const regex = new RegExp(`^${inputSearchContainer}`, 'gi');
    //     return state.title.match(regex) || state.description.match(regex);
    // });
    if(inputText.length >= 3){
        printFilteredCard();
    }
})