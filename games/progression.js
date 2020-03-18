import { greetUser, startGame, initiateGame } from '../src/index.js';

const progression = () => {
  const text = 'What number is missing in the progression?';

  const generateStartInteger = () => Math.floor(Math.random() * 10);
  const generateMissingNumber = () => Math.floor(Math.random() * 8) + 1;

  const expressionCreator = () => {
    const startNumber = generateStartInteger();
    const step = 2;
    const progressionLength = 10;
    const missingNumber = generateMissingNumber();
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

  greetUser();
  initiateGame();
  startGame(text, expressionCreator, expressionSolver);
};

export default progression;
