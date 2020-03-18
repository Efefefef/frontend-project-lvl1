import readlineSync from 'readline-sync';

let userName;
let attempt;

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const initiateGame = () => {
  attempt = 1;
};

const incrementAttempt = () => {
  attempt += 1;
};

const startGame = (text, expressionCreator, expressionSolver) => {
  if (attempt === 4) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const expression = expressionCreator();
  const correctAnswer = expressionSolver(expression);
  console.log(text);
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    incrementAttempt();
    startGame(text, expressionCreator, expressionSolver);
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export {
  greetUser,
  initiateGame,
  startGame,
};
