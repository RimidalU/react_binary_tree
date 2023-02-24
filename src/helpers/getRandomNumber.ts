export const getRandomNumber = (min: number = -100, max: number = 100): number => {
  let randomNumber = min + Math.random() * (max + 1 - min)
  return Math.floor(randomNumber)
}