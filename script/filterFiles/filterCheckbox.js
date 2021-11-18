//fetching data
async function getData() {
    const url = "https://lernia-sjj-assignments.vercel.app/api/challenges";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

let cards = [];
getData().then((data) => {
    cards = data.challenges;
});
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