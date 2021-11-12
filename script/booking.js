let bookingStep1 = document.querySelector('.bookingStep1');
let bookingStep2 = document.querySelector('.bookingStep2');
let bookingStep3 = document.querySelector('.bookingStep3');
async function getData() {
    const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
    const response = await fetch(url);
    const data = await response.json();
}
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