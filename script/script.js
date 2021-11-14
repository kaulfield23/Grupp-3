//cards copy and array save TEST
          

async function getData()
{
   const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
   const response = await fetch(url);
   const data = await response.json();
  
  

for (let i =0; i<data.challenges.length; i++){
 const challenge = data.challenges[i];
 console.log(challenge);
  let card = document.querySelector(".challenge-all");
   const array = []; 
   let newCard = card.cloneNode(true);
   card.after(newCard);
   array.push(newCard);  
 const promises = [];
 
 for(let i = 0; i<1;i++){
   const req = fetch('https://lernia-sjj-assignments.vercel.app/api/challenges'); 
   promises.push(req);
 }
 const finalData = await Promise.all(promises);
 console.log(finalData);
 
   card = challenge;
   let Type = document.querySelector(".challenges-type").innerHTML=card.type;
   let Title = document.querySelector(".challenge-title").innerHTML = card.title;
   let Description = document.querySelector(".challenge-description").innerHTML = card.description;
   let MinParticipants = document.querySelector(".minParticipants").innerHTML = card.minParticipants;
   let MaxParticipants = document.querySelector(".maxParticipants").innerHTML = card.maxParticipants;
   let Rating = document.querySelector(".challenge-rating").innerHTML = card.rating;
   let Image = document.querySelector(".challenge-picture").innerHTML = card.image; //did we do this right? o.O
   let Lables = document.querySelector(".challenges-lable").innerHTML = card.labels;
   let Btn1 = document.querySelector(".challenge-cta");
   let Btn2 = document.querySelector(".challenge-cta");
   
    
   
   if (Type == "onsite"){
     Title = document.querySelector(".challenge-title").innerHTML = card.title + " (On-Site)";
     Btn2.innerHTML = "Book this room";

     
   }
   else if(Type == "online"){
       Title = document.querySelector(".challenge-title").innerHTML = card.title;
       Btn2.innerHTML = "Take this challenge online";
       
     }
       
    //  document.querySelector(".challenge-rating-star").innerHTML = '*'.repeat(card.rating);

   }
       
 }
 
  getData();


//fixa stjärnorna
//bara visa 15 cards
//VARFÖR GÅR DET SÅ LÅNGSAMT
//participants??
//bilden???
//cards och text storlek
//städa koden
//Kolla om det går att filtera 
//filter knapp
//buttons blir lika stora
//dölja vårt original card?
