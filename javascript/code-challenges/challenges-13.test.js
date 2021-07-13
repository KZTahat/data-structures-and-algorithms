"use strict";

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named longestString that takes in an array of strings and returns the index position of the longest string. 
------------------------------------------------------------------------------------------------ */

const longestString = (arr) => {
  // Solution code here...
  let longest = 1;
  let longestString;
  arr.forEach((element, index) => {
    let splitted = element.split("");
    if (splitted.length > longest) {
      longest = splitted.length;
      longestString = splitted.join("");
    }
  });
  return arr.indexOf(longestString);
};
// console.log(longestString(strArray3));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named firstLetters that takes in an array of strings and returns an array containing only the first letter of each string.

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['t', 'w', 'w', ':']
------------------------------------------------------------------------------------------------ */

const firstLetters = (arr) => {
  // Solution code here...
  let firstLetter = arr.map((element) => {
    return element.substring(0, 1);
  });
  return firstLetter;
};
// const words = ["apple", "banana", "cantaloupe"];
// console.log(firstLetters(words));
// console.log(firstLetters(["a", "b", "c", "d"]));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named findHappiness that takes in an array of strings and returns an array containing only the strings from the input array that contain ":)".

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['this is great :)', ':)))))']
------------------------------------------------------------------------------------------------ */

const findHappiness = (arr) => {
  // Solution code here...
  let happyArray = arr.filter((element) => {
    if (element.includes(":)")) {
      return element;
    }
  });
  return happyArray;
};
// const words = [
//   "things",
//   "apple (:)",
//   ":)banana",
//   "missing that thing",
//   "cant:)aloupe",
// ];
// console.log(findHappiness([":) yay", ":( no", "", "", "", ""]));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named standardizePhoneNumbers that takes in an array of phone number strings in (XXX) XXX-XXXX format and returns an array with the phone number strings in XXXXXXXXXX format.

For example, (123) 456-7890 returns 1234567890
------------------------------------------------------------------------------------------------ */

const standardizePhoneNumbers = (arr) => {
  // Solution code here...
  const regex = /\D/g;
  let compinedNumbers = arr.map((element) => {
    return element.replace(regex, "");
  });
  return compinedNumbers;
};
// const nums = ["(123) 456-7890", "(222) 222-2222"];
// console.log(standardizePhoneNumbers(nums));
// console.log(standardizePhoneNumbers([nums[0]]));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 

Write a function named onlyOddChars that takes in a string and returns only the odd-index characters from that string.

For example, 'abcdefg' returns 'bdf'
------------------------------------------------------------------------------------------------ */

const onlyOddChars = (str) => {
  // Solution code here...
  const splitted = str.split("");
  let newArray = splitted.filter((element, index) => {
    if (index % 2 !== 0) {
      return element;
    }
  });
  return newArray.join("");
};
// console.log(onlyOddChars("abcd"));
// console.log(onlyOddChars("a"));
// console.log(onlyOddChars(""));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 

Write a function named allHappy that takes in an array of strings and returns a Boolean indicating whether all those strings contain ":)".
------------------------------------------------------------------------------------------------ */

const allHappy = (arr) => {
  // Solution code here...
  let flag = true;
  arr.forEach((element) => {
    if (!element.includes(":)")) {
      flag = false;
    }
  });
  return flag;
};
// const words = [
//         "things",
//         "apple (:)",
//         ":)banana",
//         "missing that thing",
//         "cant:)aloupe",
//       ];
// console.log(allHappy(words));
// console.log(allHappy(["apple (:)", ":)banana", "cant:)aloupe"]));
// console.log(allHappy([]));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named findAnything that takes in an array of strings, along with a target string. Return an array containing only those strings from the original array that contain the target string.
------------------------------------------------------------------------------------------------ */

const findAnything = (arr, target) => {
  // Solution code here...
  let targeted = arr.filter((element) => {
    if (element.includes(target)) {
      return element;
    }
  });
  return targeted;
};
// console.log(findAnything(words, ":)"));
// console.log(findAnything(words, "i"));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named findEvery that takes in an array of strings, along with a target string. Return a Boolean based on whether or not every string in the array contains the target string.
------------------------------------------------------------------------------------------------ */

const findEvery = (arr, target) => {
  // Solution code here...
  let flag = true;
  arr.forEach((element) => {
    if (!element.includes(target)) {
      flag = false;
    }
  });
  return flag;
};
const words = [
  "things",
  "apple pie (:)",
  ":)banana pie",
  "missing that thing",
  "cant:)aloupe is tasty",
];
// console.log(findEvery(words, "a"));
// console.log(findEvery(words, ""));
// console.log(findEvery(words, "i"));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

We've been testing a new course enrollment system, and we think we have the bugs worked out, but in the meantime, Brook enrolled himself in a bunch of different classes to test if it was working.

Write a function named unenrollBrook that takes in a two-dimensional array, where each array represents one course's roster and is an array of strings of the names of the people in that course.

Return a two-dimensional array with the same roster, but where anyone whose name includes Brook is removed from every course.

For example, [['Brook Testing', 'Actual Person'], ['Human Person', 'Brook again', 'still Brook']] returns [['Actual Person'], ['Human Person']]
------------------------------------------------------------------------------------------------ */

const unenrollBrook = (arr) => {
  // Solution code here...
  const newArray = [];
  arr.forEach((element) => {
    let newSubArray = [];
    element.forEach((ele) => {
      if (!ele.includes("Brook")) {
        newSubArray.push(ele);
      }
    });
    newArray.push(newSubArray);
  });
  return newArray;
};
// const roster = [
//   ["Michelle", "Allie", "Brook TESTING"],
//   ["Brook Riggio", "hey look it's Brook", "Jennifer"],
//   ["Nicholas", "Sam", "Scott", "Vinicio"],
// ];
// console.log(unenrollBrook(roster));
// console.log(unenrollBrook([["Brook", "person"], [], ["person", "person", "Brook"]]));
// console.log(unenrollBrook([]));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named sortByDay that takes in an array of strings, each of which represents an event's day and time.

Return a two-dimensional array that organizes those strings based on the day on which they occur. For example, all events on Monday are in the first array, all events on Tuesday are in the second array, etc.

If an event takes place on multiple days (i.e. "Dancing on Mondays and Tuesdays"), it should appear in both arrays.

For example, ['Tuesday', 'Monday', 'Wednesday and Thursday', 'Tuesday 2', 'Thursday'] returns
[
  ['Monday'],
  ['Tuesday', 'Tuesday 2'],
  ['Wednesday and Thursday'],
  ['Wednesday and Thursday', 'Thursday'],
  [],
  [],
  []
]
------------------------------------------------------------------------------------------------ */

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const sortByDay = (arr) => {
  // Solution code here...
  let newArray = new Array(7);
  daysOfWeek.forEach((element, index) => {
    let dayActivity = [];
    arr.forEach((ele) => {
      if (ele.includes(element)) {
        dayActivity.push(ele);
      }
    });
    newArray[index] = dayActivity;
  });
  return newArray;
};
// const events2 = [
//   "Tuesday",
//   "Monday",
//   "Wednesday and Thursday",
//   "Tuesday 2",
//   "Thursday",
// ];
// console.log(sortByDay(events2));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named characterByIndex that takes in an array of strings and returns an array containing the first character of the first string, the second character of the second string, etc.

For example, ['abcd', 'efgh', 'ijkl', 'mnop'] returns ['a', 'f', 'k', 'p']
------------------------------------------------------------------------------------------------ */

const characterByIndex = (arr) => {
  // Solution code here...
  let characters = arr.map((element, index) => {
    return element.substring(index, index + 1);
  });
  return characters;
};
// const wordss = ["apple", "banana", "cantaloupe"];
// console.log(characterByIndex(wordss));
// console.log(characterByIndex(["abc", "def", "ghi"]));
// console.log(characterByIndex(["wow", "wow", "wow"]));
/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-13.test.js

------------------------------------------------------------------------------------------------ */

describe("Testing challenge 1", () => {
  test("It should return an index position of the longest string", () => {
    const strArray1 = [
      "Ginger",
      "Goose",
      "Tangerine",
      "Rosie",
      "Mario",
      "Malaki",
    ];
    const strArray2 = [];
    const strArray3 = ["Ginger"];

    expect(longestString(strArray1)).toStrictEqual(2);
    expect(longestString(strArray2)).toStrictEqual(-1);
    expect(longestString(strArray3)).toStrictEqual(0);
  });
});

describe("Testing challenge 2", () => {
  test("It should return the first letter of each element of the array", () => {
    const words = ["apple", "banana", "cantaloupe"];

    expect(firstLetters(words)).toStrictEqual(["a", "b", "c"]);
    expect(firstLetters(["a", "b", "c", "d"])).toStrictEqual([
      "a",
      "b",
      "c",
      "d",
    ]);
    expect(firstLetters([])).toStrictEqual([]);
  });
});

describe("Testing challenge 3", () => {
  test("It should return only the strings that contain smiley faces", () => {
    const words = [
      "things",
      "apple (:)",
      ":)banana",
      "missing that thing",
      "cant:)aloupe",
    ];

    expect(findHappiness(words)).toStrictEqual([
      "apple (:)",
      ":)banana",
      "cant:)aloupe",
    ]);
    expect(findHappiness([])).toStrictEqual([]);
    expect(findHappiness(["sadness"])).toStrictEqual([]);
    expect(findHappiness([":) yay", ":( no", "", "", "", ""])).toStrictEqual([
      ":) yay",
    ]);
  });
});

describe("Testing challenge 4", () => {
  test("It should return a standardized set of phone numbers", () => {
    const nums = ["(123) 456-7890", "(222) 222-2222"];

    expect(standardizePhoneNumbers(nums)).toStrictEqual([
      "1234567890",
      "2222222222",
    ]);
    expect(standardizePhoneNumbers([nums[0]])).toStrictEqual(["1234567890"]);
  });
});

describe("Testing challenge 5", () => {
  test("It should only return the odd indexed characters from the string", () => {
    expect(onlyOddChars("0123456789")).toStrictEqual("13579");
    expect(onlyOddChars("abcd")).toStrictEqual("bd");
    expect(onlyOddChars("a")).toStrictEqual("");
    expect(onlyOddChars("")).toStrictEqual("");
  });
});

describe("Testing challenge 6", () => {
  test("It should correctly assess whether all the strings are happy", () => {
    const words = [
      "things",
      "apple (:)",
      ":)banana",
      "missing that thing",
      "cant:)aloupe",
    ];

    expect(allHappy(words)).toStrictEqual(false);
    expect(allHappy(["apple (:)", ":)banana", "cant:)aloupe"])).toStrictEqual(
      true
    );
    expect(allHappy([])).toStrictEqual(true);
  });
});

describe("Testing challenge 7", () => {
  test("It should find all the strings that contain a given string", () => {
    const words = [
      "things",
      "apple (:)",
      ":)banana",
      "missing that thing",
      "cant:)aloupe",
    ];

    expect(findAnything(words, ":)")).toStrictEqual(findHappiness(words));
    expect(findAnything(words, "i")).toStrictEqual([
      "things",
      "missing that thing",
    ]);
  });
});

describe("Testing challenge 8", () => {
  test("It should determine whether all the strings contain a given string", () => {
const words = [
  "things",
  "apple pie (:)",
  ":)banana pie",
  "missing that thing",
  "cant:)aloupe is tasty",
];

    expect(findEvery(words, "a")).toStrictEqual(false);
    expect(findEvery(words, "")).toStrictEqual(true);
    expect(findEvery(words, "i")).toStrictEqual(true);
  });
});

describe("Testing challenge 9", () => {
  test("It should remove Brook from all courses", () => {
const roster = [
  ["Michelle", "Allie", "Brook TESTING"],
  ["Brook Riggio", "hey look it's Brook", "Jennifer"],
  ["Nicholas", "Sam", "Scott", "Vinicio"],
];

    expect(unenrollBrook(roster)).toStrictEqual([
      ["Michelle", "Allie"],
      ["Jennifer"],
      ["Nicholas", "Sam", "Scott", "Vinicio"],
    ]);
    expect(
      unenrollBrook([["Brook", "person"], [], ["person", "person", "Brook"]])
    ).toStrictEqual([["person"], [], ["person", "person"]]);
    expect(unenrollBrook([])).toStrictEqual([]);
  });
});

describe("Testing challenge 10", () => {
  test("It should sort events by the day on which they happen", () => {
const events = [
  "Dancing on Mondays and Tuesdays",
  "Meet the inventors! Monday, August 7",
  "in the club on a Tuesday",
  "Thursday Night Code",
  "Saturday Night Fever",
];
    const sortedEvents = sortByDay(events);
    expect(sortedEvents[0]).toEqual(
      expect.arrayContaining([
        "Dancing on Mondays and Tuesdays",
        "Meet the inventors! Monday, August 7",
      ])
    );
    expect(sortedEvents[1]).toEqual(
      expect.arrayContaining([
        "Dancing on Mondays and Tuesdays",
        "in the club on a Tuesday",
      ])
    );
    expect(sortedEvents[2]).toStrictEqual([]);
    expect(sortedEvents[3]).toStrictEqual(["Thursday Night Code"]);
    expect(sortedEvents[4]).toStrictEqual([]);
    expect(sortedEvents[5]).toStrictEqual(["Saturday Night Fever"]);
    expect(sortedEvents[6]).toStrictEqual([]);

const events2 = [
  "Tuesday",
  "Monday",
  "Wednesday and Thursday",
  "Tuesday 2",
  "Thursday",
];
    const sortedEvents2 = sortByDay(events2);
    expect(sortedEvents2[0]).toStrictEqual(["Monday"]);
    expect(sortedEvents2[1]).toEqual(
      expect.arrayContaining(["Tuesday", "Tuesday 2"])
    );
    expect(sortedEvents2[2]).toStrictEqual(["Wednesday and Thursday"]);
    expect(sortedEvents2[3]).toEqual(
      expect.arrayContaining(["Wednesday and Thursday", "Thursday"])
    );
    expect(sortedEvents2[4]).toStrictEqual([]);
    expect(sortedEvents2[5]).toStrictEqual([]);
    expect(sortedEvents2[6]).toStrictEqual([]);
  });
});

describe("Testing challenge 11", () => {
  test("It should return the ith character of the ith string", () => {
    const words = ["apple", "banana", "cantaloupe"];

    expect(characterByIndex(words)).toStrictEqual(["a", "a", "n"]);
    expect(characterByIndex(["abc", "def", "ghi"])).toStrictEqual([
      "a",
      "e",
      "i",
    ]);
    expect(characterByIndex(["wow", "wow", "wow"])).toStrictEqual([
      "w",
      "o",
      "w",
    ]);
  });
});
