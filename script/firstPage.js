let firstArray = [];

async function first() {
    initialCard = document.querySelector(".challenge-all");
    initialCard.remove();
    const data = await getChallenges();
    firstArray = data;

    firstArray.sort(function(a, b) {
        return b.rating - a.rating
    });
    let newThreeCards = firstArray.splice(0, 3);
    buildCardsForChallenges(newThreeCards);
}

first();