import bankWord from "./bankWord.txt";
export const matrix = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWord = async () => {
  let newWordSet;
  await fetch(bankWord)
    .then((response) => response.text())
    .then((res) => {
      const newList = res.split("\n");
      newWordSet = new Set(newList);
    });
  return { newWordSet };
};
