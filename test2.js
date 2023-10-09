const WAVE_POOL_MIN_HEIGHT = 42; // in inches
const WATERSLIDE_MIN_HEIGHT = 48; // in inches
const LAZY_RIVER_MIN_HEIGHT = 36; // in inches

function buyTicket() {
    const attractionType = prompt('Which attraction do you want to visit: type "wave" for wave pool, "water" for waterslide, or "river" for lazy river?');
    const userHeight = prompt('What is your height in inches?');
    console.log("User's selected attraction is " + attractionType);
    console.log("User's height is " + userHeight);
    const isAllowed = checkHeight(attractionType, userHeight);
    if (isAllowed === True) {
        alert("user here");
    }
}

function checkHeight(attraction, height) {
    if ((attraction === "wave") && (height >= 42)) {
        return true;
    } else if ((attraction === "water") && (height >= 48)) {
        return true;
    } else if ((attraction === "river") && (height >= 36)) {
        return true;
    } else {
        return false;
    }  
}



buy