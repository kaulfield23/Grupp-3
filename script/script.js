
//cards copy and array save TEST
 function Copy(){
  const card = document.querySelector(".challenges-list");
   for(let i = 0; i < 30; i++){
           const array = []; 
           let newCard = card.cloneNode(true);
           card.after(newCard);
           array.push(newCard);  
    }
} Copy()


   async function Copy() { 
    const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
    const response = await fetch(url);
    const data = await response.json();
    
    let card = data.challenges[0];
    let type = document.querySelector(".challenges-type").innerContent=card.type;
    let Title = document.querySelector(".challenge-title").innerContent = card.title;
    let Description = document.querySelector(".challenge-description").innerContent = card.description;
    let MinParticipants = document.querySelector(".minParticipants").innerContent = card.minParticipants;
    let MaxParticipants = document.querySelector(".maxParticipants").innerContent = card.maxParticipants;
    let Rating = document.querySelector(".challenge-rating-star").innerContent = card.rating;
    let Image = document.querySelector(".challenge-picture").innerContent = card.image; //did we do this right? o.O
    let Lables = document.querySelector(".challenges-lable").innerContent = card.labels;
    let Btn = document.querySelector(".challenge-cta");
     
   
    if (card.type == "onsite"){
      Title = document.querySelector(".challenge-title").innerHTML = card.title + " (On-Site)";
    }
    else if(card.type == "online"){
        Title = document.querySelector(".challenge-title").innerHTML = card.title;
        Btn.innerHTML = "Take this challenge online";
        
       }


       document.querySelector(".challenge-rating-star").innerHTML = '*'.repeat(card.rating);
}
 
   
