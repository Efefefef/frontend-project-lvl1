import readlineSync from 'readline-sync';

let userName;

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getRandomInteger = () => Math.floor(Math.random() * 10);

const getCorrectAnswer = (integer) => (integer % 2 === 0 ? 'yes' : 'no');

export const playGame = () => {
  let attempt = 1;
  const playRound = () => {
    if (attempt === 4) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const randomInteger = getRandomInteger();
    const correctAnswer = getCorrectAnswer(randomInteger);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${randomInteger}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      attempt += 1;
      playRound();
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  playRound();
};
