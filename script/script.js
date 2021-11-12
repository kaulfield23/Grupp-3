//cards copy and array save TEST
function cardCopy(){
    let card = document.querySelector(".challenges-list");
    
    for(let i = 0; i < 14; i++){
        const array = []; 
        let newCard = card.cloneNode(true);
        card.after(newCard);
        array.push(newCard);  
    }
}
cardCopy();

//Change Elements TEST
let challengesList = document.querySelectorAll(".challenges-list");
for (let i = 0; i < challengesList.length; i++) {
  challengesList[i].querySelector("h3").innerText = `Title${i}`;
  challengesList[i].querySelector(".challenge-rating").innerText = `rating ${i}`;
  challengesList[i].querySelector("small").innerText = `participants ${i}`;
  challengesList[i].querySelector(".challenge-description").innerText = `challenge description ${i}`;
};

//change buttons depending on property TEST
function changeBtn(){

let challengeBtn = document.getElementById(".challenge-cta");
if(changeBtn.value == "online") changeBtn.Btn = "Take challenge online";
else changeBtn.value = "Book this room";


}