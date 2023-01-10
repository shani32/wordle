import bankWord from "./bankWord.txt";
export const matrix = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWord = async () => {
  let newWordSet;
  let randomWord;
  await fetch(bankWord)
    .then((response) => response.text())
    .then((res) => {
      const newList = res.split("\n");

      randomWord = newList[Math.floor(Math.random() * newList.length)];
      newWordSet = new Set(newList);
    });
  return { newWordSet, randomWord };
};
