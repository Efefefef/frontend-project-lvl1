const getRandomNumber = (startNumber, endNumber) => Math.floor(
  Math.random() * (endNumber - startNumber + 1) + startNumber,
);

export default getRandomNumber;
