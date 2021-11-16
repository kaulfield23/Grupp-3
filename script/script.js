 
//Function for fetching information from api
async function getData(number){

  const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.challenges);
    
  //loopar cards och information
   for (let i =0; i<number; i++){
   let challenge = data.challenges[i];
   let card = document.querySelector(".challenge-all");
   let newCard = card.cloneNode(true);
   card.after(newCard);
    
    
     //ändrar värdet i deklarationerna
    card = challenge;
     let Type = document.querySelector(".challenges-type").innerHTML=card.type;
     let Title = document.querySelector(".challenge-title").innerHTML = card.title;
     let Description = document.querySelector(".challenge-description").innerHTML = card.description;
     let MinParticipants = document.querySelector(".minParticipants").innerHTML = card.minParticipants + "-";
     let MaxParticipants = document.querySelector(".maxParticipants").innerHTML = card.maxParticipants + " Participants";
     let Rating = document.querySelector(".challenge-rating").innerHTML = card.rating;
     let Image = document.querySelector(".challenge-picture").innerHTML = card.image; //did we do this right? o.O
     let Lables = document.querySelector(".challenges-lable").innerHTML = card.labels;
     let Btn1 = document.querySelector(".challenge-cta");
     let Btn2 = document.querySelector(".challenge-cta");
  
    if (Type == "onsite"){
      Title = document.querySelector(".challenge-title").innerHTML = card.title + "(on-site)";
      Btn2.innerHTML = "Book this room";
      }
       else if(Type == "online"){
        Title = document.querySelector(".challenge-title").innerHTML = card.title;
        Btn2.innerHTML = "Take this challenge online";
    
       }

  }
}
getData(15);

    
//function somename(parameter1,parameter2)  
//så parameter 1 blir data som ni hämtar från fetch och parameter 2 blir numret som ni vill loopa

  

//fixa stjärnorna switch
//bara visa 15 cards
//VARFÖR GÅR DET SÅ LÅNGSAMT
//participants??
//bilden???
//cards och text storlek
//städa koden
//Kolla om det går att filtera 
//buttons blir lika stora
//dölja vårt original card?
