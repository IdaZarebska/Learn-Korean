'use strict mode';

// Play values.
let playing = true;
let level = 1;
let animal = 0; // 0 = dog , 1 cat, 2 = mouse, 3 = horse, 4 = cow
let person = 0; // 0 = I, 1 = you
let size = 0; // 0 = small, 1 = big
let place = 0; // 0 = here, 1 = there

// Fetch HTML elements.

// Values for the game.
const sentenceSlicers = {
  i: '저',
  you: '너',
  small: '작아요',
  big: '커요',
  here: '여기',
  there: '거기',
  isVowel: '에요',
  isConsonant: '이에요',
  isNot: '아니에요',
  topicVowel: '는',
  topicConsonant: '은',
  subjectVowel: '가',
  subjectConsonant: '이',
  possessive: '의',
  location: '에',
};

const animals = {
  0: {
    picture: '🐶',
    nameEnglish: 'dog',
    nameKorean: '개',
  },
  1: {
    picture: '🐱',
    nameEnglish: 'cat',
    nameKorean: '고양이',
  },
  2: {
    picture: '🐭',
    nameEnglish: 'mouse',
    nameKorean: '쥐',
  },
  3: {
    picture: '🐴',
    nameEnglish: 'horse',
    nameKorean: '말',
  },
  4: {
    picture: '🐮',
    nameEnglish: 'cow',
    nameKorean: '암소',
  },
};

/* 
5 animals: dog, cat, mouse, horse, giraffe

levels: 
1) ...
Show a picture of the animal and choose the correct word.

2) It's a...
The word is given, need to add "is" ending (어요).

3) ... is small/big.
The word is given, need to add topic marker.

4) My/Your ... is small/big
The word with the topic marker is given, need to add the possessive marker.

5) My/Your ... is here/there.
The word with the topic marker and the possessive marker are given, need to add the location marker.

Random choices:
- animal
- small/big
- me/you
- here/there
*/

// console.log(animals.animal1.nameKorean);
// console.log(sentenceSlicers.isVowel, sentenceSlicers.isConsonant);
// console.log(
//   animals.animal1.nameKorean.replace(
//     animals.animal1.nameKorean,
//     animals.animal1.nameKorean + sentenceSlicers.isVowel
//   )
// );

// New game.
const newGame = function () {
  playing = true;
  level = 1;
  // Select an animal and store it in the animal variable.
  animal = Math.floor(Math.random() * 5);

  // Select a person and store it in the person variable.
  person = Math.floor(Math.random() * 2);

  // Select a size and store it in the size variable.
  size = Math.floor(Math.random() * 2);

  // Select a place and store it in the place variable.
  place = Math.floor(Math.random() * 2);

  // Log the first level exercise to the console.
  console.log('뭐예요?');
  console.log(animals[animal].picture);

  // Log the answer.
  console.log(animals[animal].nameKorean);
};

newGame();

// console.log(animal);
// console.log(person);
// console.log(size);
// console.log(place);

// console.log(animals[animal].nameEnglish);

level = 2;

// Function for each level's logic.
const gameLevels = function () {
  if ((level = 2)) {
    console.log(`${animals[animal].nameKorean}${sentenceSlicers.isVowel}`);
  }
};

gameLevels();
