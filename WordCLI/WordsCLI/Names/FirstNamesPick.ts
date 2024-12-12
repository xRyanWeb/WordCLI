import { Numbers } from "../Nums/Nums";

export const getFirstNames = () => {
  const stringArray: any = [];
  stringArray.push("James");
  stringArray.push("Joey");
  stringArray.push("John");
  stringArray.push("Peterson");

  randomFirstName(stringArray);
};

// const num2 =

export const num1 = Numbers(1, 10);
export const num2 = Numbers(5, 10);

type FirstNames = {
  [firstName: string]: string[];
}[];

type lastName = {
  [lastName: string]: string[];
}[];

export const getLastNames = () => {
  const stringArray: any = [];
  stringArray.push("Perty");
  stringArray.push("Luker");
  stringArray.push("Owns");
  stringArray.push("Jonston");

  return randomLastName(stringArray);
};

export const randomFirstName = (names: FirstNames[]) => {
  let randomNameFirst = Math.floor(Math.random() * names.length);
  let randomName = names[randomNameFirst];
  const lastName = getLastNames();
  return lastName;
};

export const randomLastName = (names: lastName[]) => {
  let randomNameLastFirst = Math.floor(Math.random() * names.length);
  let randomName = names[randomNameLastFirst];
  return randomName;
};

getFirstNames();
