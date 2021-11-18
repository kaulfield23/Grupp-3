//style input
// when user write something in input box, you need to get text of it.
// and push that text in an empty array.
//addeventlister ('keyup') => 'take input'  
let inputSearchField = document.querySelector('#inputSearch');
let inputSearchContainer = '';

const getResult = () => {
    inputSearch.addEventListener('keyup', () => {
        inputSearchContainer = inputSearchField.value.trim().toLowerCase();

        let item = JSON.parse(JSON.stringify(cards));
        //console.log(testing)

        // let filteredText = item.filter((card) => card.title.toLowerCase().includes(inputSearchContainer) || card.description.toLowerCase().includes(inputSearchContainer))
        // console.log(filteredText)


        let matches = cards.filter(state => {
            const regex = new RegExp(`^${inputSearchContainer}`, 'gi');
            return state.title.match(regex) || state.description.match(regex);
        });

        console.log(matches);
    })
}
getResult();
//fetch the data first and then 
//compare in the item, if your inputSearchContainer value exists.
//then it will be returned as a new variable u gonna return new variable in the end.
//filter, find, every, includes
//filterTag.js line 24-33