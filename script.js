'use strict mode';

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
  animal1: {
    picture: '🐶',
    nameEnglish: 'dog',
    nameKorean: '개',
  },
  animal2: {
    picture: '🐱',
    nameEnglish: 'cat',
    nameKorean: '고양이',
  },
  animal3: {
    picture: '🐭',
    nameEnglish: 'mouse',
    nameKorean: '쥐',
  },
  animal4: {
    picture: '🐴',
    nameEnglish: 'horse',
    nameKorean: '말',
  },
  animal5: {
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

console.log(animals.animal1.nameKorean);
console.log(sentenceSlicers.isVowel, sentenceSlicers.isConsonant);
console.log(
  animals.animal1.nameKorean.replace(
    animals.animal1.nameKorean,
    animals.animal1.nameKorean + sentenceSlicers.isVowel
  )
);
