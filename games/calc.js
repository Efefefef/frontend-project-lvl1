import startGame from '../src/index.js';
import generateRandomInteger from '../src/utils.js';

const description = 'What is the result of the expression?';

const calc = () => {
  const generateRandomSign = () => {
    const randomNumber = generateRandomInteger(0, 2);
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

  const expressionCreator = () => `${generateRandomInteger(0, 9)} ${generateRandomSign()} ${generateRandomInteger(0, 9)}`;

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

  startGame(description, expressionCreator, expressionSolver);
};

export default calc;
