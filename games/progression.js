import startGame from '../src/index.js';
import generateRandomInteger from '../src/utils.js';

const description = 'What number is missing in the progression?';

const progression = () => {
  const expressionCreator = () => {
    const startNumber = generateRandomInteger(0, 9);
    const step = 2;
    const progressionLength = 10;
    const missingNumber = generateRandomInteger(1, 8);
    let resultString = '';
    for (let i = 0; i < progressionLength; i += 1) {
      resultString += `${startNumber + step * i} `;
    }
    const quizArray = resultString.split(' ');
    quizArray[missingNumber] = '..';
    return quizArray.join(' ');
  };

  const expressionSolver = (expression) => {
    const array = expression.split(' ');
    const index = array.indexOf('..');
    const number1 = Number(array[index - 1]);
    const number2 = Number(array[index + 1]);
    const result = (number1 + number2) / 2;
    return String(result);
  };

  startGame(description, expressionCreator, expressionSolver);
};

export default progression;
