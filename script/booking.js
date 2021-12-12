let bookingStep1 = document.querySelector('.bookingStep1');
let bookingStep2 = document.querySelector('.bookingStep2');
let bookingStep3 = document.querySelector('.bookingStep3');
let roomTitle = document.querySelector('.roomTitle');
let roomTitle2 = document.querySelector('.roomTitleStep2');
const createP = document.createElement('p');
const bookingStep1Content = document.querySelector('.bookingStep1Content');
let inputDate = document.querySelector('#inputDate');
let search = document.querySelector('#search');
let originalUrl = 'https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=';
let selectTimes = document.querySelector('#selectTimes');
let option = document.querySelectorAll('option');

let selectParticipants = document.querySelector('#inputParticipants');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let url = 'https://lernia-sjj-assignments.vercel.app/api/booking/reservations';
let phoneInput = document.querySelector('#phoneInput');

let titleName;
let participant = [];
let isFilled;
console.log(participant);
//Opens booking-modal and gets title and participants from the chosen challenge
const giveTitleAndTrigger = (event) => {
    let isEmpty;
    if (isFilled === false) {
        isFilled = true;
        return;
    } else {
        let eventName = event.target.className;
        if (eventName === "challenge-cta") {
            titleName = event.target.parentNode.children[2].textContent;
            roomTitle.innerHTML = `Book room - ${ titleName }`;
            bookingStep1.style.display = "block";
            let getTitle = event.target.parentNode.children[3].lastElementChild.innerText;
            let splitgetParts = getTitle.split(' ');
            let partsContainer = [];
            participant = splitgetParts.concat(partsContainer);
            participant.pop();
        } else if (eventName === "submitBtnStep1" || eventName === 'submitBtnStep1FirstPage') {
            bookingStep1.style.display = "none";
            bookingStep2.style.display = "block";
            participantsDropDown();
            roomTitle2.innerHTML = `Book room - ${ titleName }`;
        } else
        if (eventName === "submitBtnStep2") {
            isEmpty = checkEmptyValue(isEmpty);
            if (!isEmpty) {
                bookingStep2.style.display = "none";
                bookingStep3.style.display = "block";
            }
        } else {
            bookingStep3.style.display = "none";
        }

        return participant;
    }
}

//Checks if selectTimes has any old values and removes them then gets time slots from booking API. //Booking step 1
search.addEventListener('click', () => {
    let result;
    if (inputDate.value === '') {
        isFilled = false;
        bookingStep1.style.display = "block";
        bookingStep2.style.display = "none";
        bookingStep1Content.appendChild(createP);
        createP.innerHTML = 'Enter valid date';
    } else {
        bookingStep1.style.display = 'none';
        bookingStep2.style.display = 'block';
        createP.innerHTML = '';
        result = originalUrl.concat(inputDate.value);
        fetch(result)
            .then(res => res.json())
            .then(data => renderAvailableSlots(data.slots))
    }

});

    //Checks if selectTimes has any old values and removes them then gets time slots from booking API. 

search.addEventListener('click', () => {
    let result;
    if (selectTimes.length !== 0) {
        while (selectTimes.options.length > 0) {
            selectTimes.remove(0);
        }
    }
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
    selectParticipants;
    name;
    email;
    inputDate;
    selectTimes;
    url;
    phoneInput;
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
//Function for course 'Arbetsmetodik'
const userInput = document.querySelectorAll('.userInput')
const checkEmptyValue = (isEmpty) => {
    isEmpty = false;
    userInput.forEach((element) => {
        if (element.value.length === 0) {
            isEmpty = true;
        }
    })
    if (isEmpty) {
        alert('You must enter the input')
    }
    return isEmpty
}