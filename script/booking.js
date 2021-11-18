let bookingStep1 = document.querySelector('.bookingStep1');
let bookingStep2 = document.querySelector('.bookingStep2');
let bookingStep3 = document.querySelector('.bookingStep3');
let roomTitle = document.querySelector('.roomTitle');
let roomTitle2 = document.querySelector('.roomTitle2');
let submitBtn1 = document.querySelector('.submitBtnStep1');
let card = document.querySelector(".challenge-all");


async function getData() {
    const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
    const response = await fetch(url);
    const data = await response.json();

    /*for (let i = 0; i < data.challenges.length; i++) {
        let challenge = data.challenges[i];
        console.log(challenge);
        if (triggerBooking == true) {
            let roomTitle = card.querySelector(".roomTitle").innerHTML = data.title;
            roomTitle.innerHTML = `Book room ${card.title}  Step 2`;
        }
    }*/
}
getData();
//let title = [];
/*getData().then((card) => {
data.challenges.forEach((card) => {
    title.push(card.title);
});
roomTitle.innerHTML = `Book room ${card.title}  Step 2`;
roomTitle2.innerHTML = `Book room ${card.title} Step 2`;
console.log();

});*/


getData().then((data) => {
            data.challenges.forEach((card) => {
                title.push(card.title);
            });
            roomTitle.innerHTML = `Book room ${title[0]}`;
            roomTitleStep2.innerHTML = `Book room ${title[0]}`;


            //roomTitle.innerHTML = 'Book Room: ' + challenges.title;

            let Title = document.querySelector(".challenge-title").innerHTML = card.title;



            const giveName = (event) => {
                    let titleName = event.target.parentNode.children[1].textContent;
                    roomTitle2.innerHTML = `Book room: ${titleName} step 2`;
                }
                //Notes: users input, compare with title description. If exists return it.*/


        }
        //use this below
        // let titleName;
        // const giveTitleAndTrigger = (event) => {
        //     let eventName = event.target.className;
        //     if (eventName === "challenge-cta") {
        //         titleName = event.target.parentNode.children[1].textContent;
        //         roomTitle.innerHTML = Book room: $ { titleName }
        //         step 1;
        //         bookingStep1.style.display = "block";
        //     } else if (eventName === "submitBtnStep1") {
        //         bookingStep1.style.display = "none";
        //         bookingStep2.style.display = "block";
        //         roomTitle2.innerHTML = Book room: $ { titleName }
        //         step 2;
        //     } else if (eventName === "submitBtnStep2") {
        //         bookingStep2.style.display = "none";
        //         bookingStep3.style.display = "block";
        //     } else {
        //         bookingStep3.style.display = "none";
        //     }
        // }*/