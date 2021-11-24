//show selected checkbox values when user click the checkbox
import {printFilteredCard} from './filterCards.js';
export let checkBoxFilters = [];
let checkInput = document.querySelectorAll('.checkInput');
checkInput.forEach((element) =>{
    element.addEventListener('click', (event) =>{
        let eventId = event.target.id;
        let boxIsChecked = event.target.checked;
        
        if (boxIsChecked) {
            checkBoxFilters.push(eventId);
        } else {
            checkBoxFilters.splice(checkBoxFilters.indexOf(eventId), 1);
        }
        printFilteredCard();
    })
})


//text

