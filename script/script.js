//cards copy and array save TEST
          
let user_list  = [{"challenges":1 },{"challenges":2 },{"challenges":3 },{"challenges":4 },{"challenges":5 },
{"challenges":6 },{"challenges":7},{"challenges":8 },{"challenges":9 },{"challenges":10}, 
{"challenges":11 },{"challenges":12 },{"challenges":13 },{"challenges":14 },{"challenges":15 },
{"challenges":16 },{"challenges":17},{"challenges":18 },{"challenges":19 },{"challenges":20},
{"challenges":21 },{"challenges":22 },{"challenges":23 },{"challenges":24 },{"challenges":25 },
{"challenges":26 },{"challenges":27},{"challenges":28 },{"challenges":29 },{"challenges":30}, 
];

async function getData()
   {
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
      }  
     //  document.querySelector(".challenge-rating-star").innerHTML = '*'.repeat(card.rating);

  getData();

  function Copy(){
    let card = document.querySelector(".challenges-list");
    for(let i = 0; i < 29; i++){
            const array = []; 
            let newCard = card.cloneNode(true);
            card.after(newCard);
            array.push(newCard);  
     }
  }  