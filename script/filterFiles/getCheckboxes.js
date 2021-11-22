
//show selected checkbox values when user click the checkbox
let checkBoxFilters = [];
const onClickCheckbox = (event) => {
    let eventId = event.target.id;
    let boxIsChecked = event.target.checked;

    if (boxIsChecked) {
        checkBoxFilters.push(eventId);
    } else {
        checkBoxFilters.splice(checkBoxFilters.indexOf(eventId), 1);
    }

    printFilteredCard();
};