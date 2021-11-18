let bookingStep1 = document.querySelector('.bookingStep1');
let bookingStep2 = document.querySelector('.bookingStep2');
let bookingStep3 = document.querySelector('.bookingStep3');
let roomTitle = document.querySelector('.roomTitle');
let roomTitleStep2 = document.querySelector('.roomTitleStep2');
async function getData() {
    const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

let title = [];

getData().then((data) => {
    data.challenges.forEach((card) => {
        title.push(card.title);
    });
    roomTitle.innerHTML = `Book room ${title[0]}`;
    roomTitleStep2.innerHTML = `Book room ${title[0]}`;
});


// roomTitle.innerHTML = 'Book Room ' + title;
// console.log(title);
// let Title = document.querySelector(".challenge-title").innerContent = card.title;

function triggerBooking(event) {
    let eventName = event.target.className;
    if (eventName === "challenge-cta") {
        bookingStep1.style.display = "block";
    } else if (eventName === "submitBtnStep1") {
        bookingStep1.style.display = "none";
        bookingStep2.style.display = "block";
    } else if (eventName === "submitBtnStep2") {
        bookingStep2.style.display = "none";
        bookingStep3.style.display = "block";
    } else {
        bookingStep3.style.display = "none";
    }
}

//Notes: users input, compare with title description. If exists return it.*/