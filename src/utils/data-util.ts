export const getRandomElementFromList = (list: any[]) => {
  return list[Math.floor(Math.random() * list.length)];
};
