export const capitalizeFirstLetter = (input: string): string => {
  const firstLetter = input.charAt(0).toUpperCase();
  const theRestLetters = input.slice(1);

  return `${firstLetter}${theRestLetters}`;
};
