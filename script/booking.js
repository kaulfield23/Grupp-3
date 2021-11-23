let bookingStep1 = document.querySelector('.bookingStep1');
let bookingStep2 = document.querySelector('.bookingStep2');
let bookingStep3 = document.querySelector('.bookingStep3');
let roomTitle = document.querySelector('.roomTitle');
let roomTitle2 = document.querySelector('.roomTitleStep2');

let inputDate = document.querySelector('#inputDate');
let search = document.querySelector('#search');
let originalUrl = 'https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=';
let selectTimes = document.querySelector('#selectTimes');
let option = document.querySelectorAll('option');

//Notes: users input, compare with title description. If exists return it.*/

//use this below
let titleName;
let participant = [];

const giveTitleAndTrigger = (event) => {
        let eventName = event.target.className;
        if (eventName === "challenge-cta") {
            titleName = event.target.parentNode.children[1].textContent;
            roomTitle.innerHTML = `Book room: ${ titleName } step 1`;
            bookingStep1.style.display = "block";
            let a = event.target.parentNode.children[2].lastElementChild.innerText;
            let blah = a.split(' ');
            let ooo = [];
            participant = blah.concat(ooo);
            participant.pop();
        } else if (eventName === "submitBtnStep1") {
            bookingStep1.style.display = "none";
            bookingStep2.style.display = "block";
            participantsDropDown();
            roomTitle2.innerHTML = `Book room: ${ titleName } step 2`;
        } else if (eventName === "submitBtnStep2") {
            bookingStep2.style.display = "none";
            bookingStep3.style.display = "block";
        } else {
            bookingStep3.style.display = "none";
        }
    }
    //gets available slots and pushes result to availableSlots array
search.addEventListener('click', () => {
        let result;
        if (selectTimes.length !== 0) {
            while (selectTimes.options.length > 0) {
                selectTimes.remove(0);
            }
        }
        result = originalUrl.concat(inputDate.value);
        fetch(result)
            .then(res => res.json())
            .then(data => dropDown(data.slots))

        return result;
    })
    /*const d = new Date();
    console.log(d);
    if (d < inputDate.value || availableSlots == false) {
        alert('test');

    }*/

function dropDown(data) {
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

function participantsDropDown() {
    var selectParticipants = document.querySelector('#inputParticipants')

    if (inputParticipants.length !== 0) {
        while (inputParticipants.options.length > 0) {
            inputParticipants.remove(0);
        }
    }
    let x = participant.splice(1, 1);
    let count = parseInt(participant[0]);
    for (i = parseInt(participant[0]); i <= parseInt(participant[1]); i++) {
        let opt = count;
        let el = document.createElement("option");
        el.text = `${opt} participants`;
        el.value = opt;
        selectParticipants.appendChild(el);
        count++;
    }


    return selectParticipants;
}

let postBookingBtn = document.querySelector('#postBookingBtn');
postBookingBtn.addEventListener('click', postBooking);

async function postBooking() {
    const selectParticipants = document.querySelector('#inputParticipants').value;
    let namex = document.querySelector('#name').value;
    let emailx = document.querySelector('#email').value;
    let inputDate = document.querySelector('#inputDate').value;
    let selectTimes = document.querySelector('#selectTimes').value;
    let url = 'https://lernia-sjj-assignments.vercel.app/api/booking/reservations';

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
                name: namex,
                email: emailx,
                date: inputDate,
                time: selectTimes,
                participants: parseInt(selectParticipants)
            })

        }) //.then(res => {
    return response.json();
    //}).then(data => console.log(data)).catch(error => console.log('ERROR'))
}

//Left to do:
// -Clean up code
// -Rename variables
// -Prevent step2 if inputdate is invalid
// -Styling (selectTimes, add p to step1)
// -Add comments
// blabla
