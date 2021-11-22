

async function getChallenges() {
  const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
  const response = await fetch(url);
  const data = await response.json();

  return data.challenges;
}

let initialCard;

function buildCardsForChallenges(challenges) {
  const container = document.querySelector('section.challenges');
  container.innerHTML = '';

  //loop for cards and information.
  for (let i = 0; i < challenges.length; i++) {
    let challenge = challenges[i];
    let newCard = initialCard.cloneNode(true);
    container.append(newCard);

    //ändrar värdet i deklarationerna.
    let Type = newCard.querySelector(".challenges-type").innerHTML = challenge.type;
    let Title = newCard.querySelector(".challenge-title").innerHTML = challenge.title;
    let Description = newCard.querySelector(".challenge-description").innerHTML = challenge.description;
    let MinParticipants = newCard.querySelector(".minParticipants").innerHTML = challenge.minParticipants + " - ";
    let MaxParticipants = newCard.querySelector(".maxParticipants").innerHTML = challenge.maxParticipants + " Participants";
    let Image = newCard.querySelector(".challenge-picture").src = challenge.image; 
    let Lables = newCard.querySelector(".challenges-lable").innerHTML = challenge.labels;
    let Btn2 = newCard.querySelector(".challenge-cta");
    
    //changes cards depending on "onsite" or "online".
    if (Type == "onsite") { 
      Btn2.innerHTML = "Book this room";
    }
    else if (Type == "online") {
      Btn2.innerHTML = "Take this challenge online";
    }

    //Makes the rating number a star.
    const starContainer = newCard.querySelector('.challenge-rating');
    for (let starIndex = 0; starIndex < 5; starIndex++) {
      const star = document.createElement('li');
      if (starIndex <= (challenge.rating - 1)) {
        star.className = 'fa fa-star';
      }
      else if (starIndex < challenge.rating) {
        star.className = 'fa fa-star-half-alt';
      }
      else {
        star.className = 'fa fa-star-o';
      }
      starContainer.append(star);
    }
  }
}

async function init() {
  initialCard = document.querySelector(".challenge-all");
  initialCard.remove();

  const data = await getChallenges();
  buildCardsForChallenges(data);
}

init();






