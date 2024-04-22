import { PersonType } from "../types/Person";

export const getRandomUniqueId = (): string => {
  return `USER-ID-${Math.floor(Math.random() * 10000)}`;
};

export const getAvgAge = (persons: PersonType[]): number => {
  let sum = 0;

  persons.forEach((person) => {
    sum += person.age;
  });

  const avg = sum / persons.length;
  return avg;
};
