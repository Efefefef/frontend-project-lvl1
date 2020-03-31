import playGame from '../index.js';
import generateRandomInteger from '../utils.js';

const description = 'What is the result of the expression?';

const operations = ['-', '+', '*'];

const calculate = (number1, number2, operationSign) => {
  let result;
  switch (operationSign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      return null;
  }
  return result;
};

const makeCalcGame = () => {
  const firstInteger = generateRandomInteger(0, 9);
  const secondInteger = generateRandomInteger(0, 9);
  const sign = operations[generateRandomInteger(0, operations.length - 1)];
  const question = `${firstInteger} ${sign} ${secondInteger}`;
  const answer = String(calculate(firstInteger, secondInteger, sign));
  return [question, answer];
};

const startCalcGame = () => playGame(description, makeCalcGame);

export default startCalcGame;
