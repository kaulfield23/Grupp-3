let bookingStep1 = document.querySelector('.bookingStep1');
let bookingStep2 = document.querySelector('.bookingStep2');
let bookingStep3 = document.querySelector('.bookingStep3');
const bookingStep1Content = document.querySelector('.bookingStep1Content');

let roomTitle = document.querySelector('.roomTitle');
const roomTitle2 = document.querySelector('.roomTitleStep2');
const dateWarning = document.querySelector('.dateWarning');
const createP = document.createElement('p');

let inputDate = document.querySelector('#inputDate');
let search = document.querySelector('#search');
let originalUrl = 'https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=';
let selectTimes = document.querySelector('#selectTimes');
let option = document.querySelectorAll('option');


let titleName;
let participant = [];
//Opens booking-modal and gets title and participants from the chosen challenge
const giveTitleAndTrigger = (event) => {
        let eventName = event.target.className;
        if (eventName === "challenge-cta") {
            titleName = event.target.parentNode.children[1].textContent;
            roomTitle.innerHTML = `Book room - ${ titleName }`;
            bookingStep1.style.display = "block";
            let getTitle = event.target.parentNode.children[2].lastElementChild.innerText;
            let splitgetParts = getTitle.split(' ');
            let partsContainer = [];
            participant = splitgetParts.concat(partsContainer);
            participant.pop();
        }
        //if (inputDate.value === '') {

        //}
        /*  else if (eventName === "submitBtnStep1" || eventName === 'submitBtnStep1FirstPage') {
            bookingStep1.style.display = "none";
            bookingStep2.style.display = "block";
            participantsDropDown();
            roomTitle2.innerHTML = `Book room - ${ titleName }`;
        } else if (eventName === "submitBtnStep2") {
            bookingStep2.style.display = "none";
            bookingStep3.style.display = "block";
        } else {
            bookingStep3.style.display = "none";
        }
        */
    }
    //Checks if selectTimes has any old values and removes them then gets time slots from booking API. 
search.addEventListener('click', (event) => {
    let result;
    createP.innerHTML = 'Enter valid date';
    bookingStep1Content.appendChild(createP);
    let eventName = event.target.className;

    if (inputDate.value === '') {

    } else if (eventName === "submitBtnStep1" || eventName === 'submitBtnStep1FirstPage') {
        bookingStep1.style.display = "none";
        bookingStep2.style.display = "block";
        participantsDropDown();
        roomTitle2.innerHTML = `Book room - ${ titleName }`;
    } else if (eventName === "submitBtnStep2") {
        bookingStep2.style.display = "none";
        bookingStep3.style.display = "block";
    } else {
        bookingStep3.style.display = "none";
    }
    if (selectTimes.length !== 0) {
        while (selectTimes.options.length > 0) {
            selectTimes.remove(0);
        }
    }
    result = originalUrl.concat(inputDate.value);
    fetch(result)
        .then(res => res.json())
        .then(data => renderAvailableSlots(data.slots))

    return result;
})

//Loops time slots from booking API with choosed date and renders data with createElement 'option'.
function renderAvailableSlots(data) {
    let availableSlots = [];
    for (item of data) {
        availableSlots.push(item)
    }
    for (i = 0; i < availableSlots.length; i++) {
        let opt = availableSlots[i];
        let el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        selectTimes.appendChild(el);
    }
}
//Gets min-max participants from chosen challenge. Removes unwanted strings and renders options to user  
function participantsDropDown() {
    let selectParticipants = document.querySelector('#inputParticipants')

    if (inputParticipants.length !== 0) {
        while (inputParticipants.options.length > 0) {
            inputParticipants.remove(0);
        }
    }
    participant.splice(1, 1);
    for (i = parseInt(participant[0]); i <= parseInt(participant[1]); i++) {
        let opt = i;
        let el = document.createElement("option");
        el.text = `${opt} participants`;
        el.value = opt;
        selectParticipants.appendChild(el);
    }
    return selectParticipants;
}

//Collects name, email, date, selected time, participants and posts to reservation API with JSON
let postBookingBtn = document.querySelector('#postBookingBtn');
postBookingBtn.addEventListener('click', postBooking);
async function postBooking() {
    const selectParticipants = document.querySelector('#inputParticipants');
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let inputDate = document.querySelector('#inputDate');
    let selectTimes = document.querySelector('#selectTimes');
    let url = 'https://lernia-sjj-assignments.vercel.app/api/booking/reservations';
    let phoneInput = document.querySelector('#phoneInput');

    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credential: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            name: name.value,
            //phone: phoneInput.value,
            email: email.value,
            date: inputDate.value,
            time: selectTimes.value,
            participants: parseInt(selectParticipants.value)
        })

    })
    return response.json();
}

//1. När man klickar på Sökknappen ska ett felmeddelande visas OM inget datum är angett.
//2.