import { greetUser, startGame, initiateGame } from '../src/index.js';

const calc = () => {
  const text = 'What is the result of the expression?';

  const generateRandomInteger = () => Math.floor(Math.random() * 10);

  const generateRandomSign = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    let sign;
    switch (randomNumber) {
      case 0:
        sign = '+';
        break;
      case 1:
        sign = '-';
        break;
      case 2:
        sign = '*';
        break;
      default:
        console.log('Random numbers handled are 0, 1, 2');
    }
    return sign;
  };

  const expressionCreator = () => `${generateRandomInteger()} ${generateRandomSign()} ${generateRandomInteger()}`;

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
        console.log('Unknown operator');
    }
    return result;
  };

  const expressionSolver = (expression) => {
    const array = expression.split(' ');
    const number1 = Number(array[0]);
    const number2 = Number(array[2]);
    const operationSign = array[1];
    const result = calculate(number1, number2, operationSign);
    return String(result);
  };

  greetUser();
  initiateGame();
  startGame(text, expressionCreator, expressionSolver);
};

export default calc;
