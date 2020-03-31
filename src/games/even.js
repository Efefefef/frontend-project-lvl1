import playGame from '../index.js';
import generateRandomInteger from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (integer) => integer % 2 === 0;

const makeEvenGame = () => {
  const question = generateRandomInteger(0, 9);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => playGame(description, makeEvenGame);

export default startEvenGame;
