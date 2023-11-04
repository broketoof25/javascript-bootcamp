// Given array
const guests = [
    'Ayaan', 'Maria', 'Chen', 'Oliver', 'Fatima', 'Satoshi', 'Lucia', 'Kalani', 'Jamal', 'Nadia', 'Thabo'
];

// Task 1: Send Invitations
function sendInvitations() {
    for (let guest of guests) {
        console.log(`You're invited to the party, ${guest}!`);
    }
}

// Task 2: Prepare Party Activities
function prepareActivities() {
    setTimeout(() => {
        console.log("Activities are now ready!");
    }, 2000);
}

// Task 3: Virtual Dance Floor
function virtualDanceFloor() {
    let count = 0;
    const intervalID = setInterval(() => {
        console.log("Let's dance!");
        count++;
        if (count >= 5) {
            clearInterval(intervalID);
        }
    }, 1000);
}

// Task 4: Host Speech
function hostSpeech() {
    console.log("Welcome to the party!");
    setTimeout(() => {
        console.log("Thank you all for joining us today!");
    }, 1500);
}

// Challenge Task 5: Surprise Guest
function surpriseGuest() {
    setTimeout(() => {
        console.log("Announcing the surprise guest: Beyonce!");
    }, 3000);
}

// Task 6: Launch the Party
function launchParty() {
    sendInvitations();
    prepareActivities();
    virtualDanceFloor();
    hostSpeech();
    surpriseGuest();
}

// For the event listener part, I'll provide an example but can't provide a button in this context.
// Assuming you have a button with the ID 'launchPartyButton' in your HTML:
document.getElementById('launchPartyButton').addEventListener('click', launchParty);
