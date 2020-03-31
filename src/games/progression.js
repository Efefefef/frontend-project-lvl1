import playGame from '../index.js';
import generateRandomInteger from '../utils.js';

const description = 'What number is missing in the progression?';

const makeProgressionGame = () => {
  const start = generateRandomInteger(0, 9);
  const step = 2;
  const progressionLength = 10;
  const missingPosition = generateRandomInteger(1, progressionLength - 2);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  progression[missingPosition] = '..';
  const question = progression.join(' ');
  const answer = String(start + step * missingPosition);
  return [question, answer];
};

const startProgressionGame = () => playGame(description, makeProgressionGame);

export default startProgressionGame;
