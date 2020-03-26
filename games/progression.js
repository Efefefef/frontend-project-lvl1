import startGame from '../src/index.js';
import generateRandomInteger from '../src/utils.js';

const description = 'What number is missing in the progression?';

const makeProgressionGame = () => {
  const startNumber = generateRandomInteger(0, 9);
  const step = 2;
  const progressionLength = 10;
  const missingNumber = generateRandomInteger(1, 8);
  const quizArray = [];
  for (let i = 0; i < progressionLength; i += 1) {
    quizArray.push(startNumber + step * i);
  }
  quizArray[missingNumber] = '..';
  const question = quizArray.join(' ');
  const answer = String((Number(quizArray[missingNumber - 1])
    + Number(quizArray[missingNumber + 1])) / 2);
  return [question, answer];
};

const startProgressionGame = () => startGame(description, makeProgressionGame);

export default startProgressionGame;
