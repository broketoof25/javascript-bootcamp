/* function getOuncesFromPounds(pounds) {
    return pounds * 16;
}

const ounces = getOuncesFromPounds(4);
console.log(ounces) */

/* let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3); */

/* for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
} */

/* for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
} */

//functin to arrow function
/* function ftToInches(ft) {
    return ft * 12;
  };

const ftToInches = (ft) => ft * 12;

function area(width, length) {
return width * length;
};

const area = (width, length) => width * length;

const daysToHours = function(days) {
return days * 24;
};

const daysToHours = (days) => days * 24;

const cardName = function(value, suit) {
return `${value} of ${suit}`;
};

const cardName = (value, suit) => `${value} of ${suit}`; */

/* const getInitials = (firstName, lastName) => {firstName[0] + lastName[0];}
console.log(getInitials("Charlie", "Brown")); */

function digitToWord(digit) {
    switch (digit) {
      case 0: return "zero";
      case 1: return "one";
      case 2: return "two";
      case 3: return "three";
      case 4: return "four";
      case "5": return "five";
      case 6: return "six";
      case 7: return "seven";
      case 8: return "eight";
      case 9: return "nine";
      default: return "unknown";
    }
  }
  const word = digitToWord("5");
  console.log("5 is " + word); // This should console.log "5 is five"