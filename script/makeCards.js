function createElement(type, className, innerHTML) {
  const newElement = document.createElement(type);

  newElement.classList.add(className);
  if (innerHTML) {
    newElement.innerHTML = innerHTML;
  }

  if (className === "challenge-cta" && innerHTML === "online") {
    newElement.innerHTML = `Take this challenge online`;
  }
  if (className === "challenge-cta" && innerHTML === "onsite") {
    newElement.innerHTML = `Book this room`;
  }

  return newElement;
}
function createCard(challenge) {
  const newCardElement = createElement("div", "challenge-all");
  const typeElement = createElement("div", "challenges-type", challenge.type);
  const labelElement = createElement(
    "div",
    "challenges-lable",
    challenge.labels
  );
  const challengesListElement = createElement("ul", "challenges-list");
  const challengesListItem = createElement("li", "challenges-item");
  const challengesImageElement = createElement("img", "challenge-picture");
  challengesImageElement.src = challenge.image;

  const challengeTitleElement = createElement(
    "h3",
    "challenge-title",
    challenge.title
  );
  const challengeMetaElement = createElement("div", "challenge-meta");
  const challengeStarContainer = createStarContainer(challenge);
  const participantsElement = createElement("div", "participants");
  const minParticipants = createElement(
    "small",
    "minParticipants",
    `${challenge.minParticipants} - `
  );
  const maxParticipants = createElement(
    "small",
    "minParticipants",
    `${challenge.maxParticipants} Participants;`
  );
  const challengeDescElement = createElement(
    "p",
    "challenge-description",
    challenge.description
  );
  const challengeCtaElement = createElement(
    "a",
    "challenge-cta",
    challenge.type
  );

  newCardElement.append(typeElement, labelElement, challengesListElement);
  challengesListElement.append(challengesListItem);
  challengesListItem.append(
    challengesImageElement,
    challengeTitleElement,
    challengeMetaElement,
    challengeDescElement,
    challengeCtaElement
  );
  challengeMetaElement.append(challengeStarContainer, participantsElement);
  participantsElement.append(minParticipants, maxParticipants);

  return newCardElement;
}

function createStarContainer(challenge) {
  const starContainer = createElement("ul", "challenge-rating");

  for (let starIndex = 0; starIndex < 5; starIndex++) {
    const star = document.createElement("li");
    if (starIndex <= challenge.rating - 1) {
      star.className = "fa fa-star";
    } else if (starIndex < challenge.rating) {
      star.className = "fa fa-star-half-alt";
    } else {
      star.className = "fa fa-star-o";
    }
    starContainer.append(star);
  }

  return starContainer;
}

//Function for fetching api.
async function getData2(msg, item) {
  let data;
  if (!item) {
    const url = "https://lernia-sjj-assignments.vercel.app/api/challenges";
    const response = await fetch(url);
    data = (await response.json()).challenges;
  } else {
    data = item;
  }

  //loop for cards and information.
  let numberOfCards = data.length;
  const parentContainer = document.getElementById("cardContainer");

  if (msg === "filter") {
      parentContainer.innerHTML = "";
  }
  if(msg === "filter" && data.length === 0){
    const noMatch = document.createElement("span");
        noMatch.className = "noMatch";
        noMatch.innerHTML = "No matching result";
        parentContainer.append(noMatch);
  }

  for (let i = 0; i < numberOfCards; i++) {
    let challenge = data[i];
    const newCard = createCard(challenge);
    parentContainer.append(newCard);
  }
}
getData2();
