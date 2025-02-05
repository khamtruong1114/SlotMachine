/**
 * Generates an array of random indices.
 *
 * @returns {number[]} An array of 3 random indices, each between 0 and the length of the items array minus 1.
 *
 * @example
 * // Assuming items.length is 5
 * randomIndex(); // might return [2, 4, 1]
 */
export const randomIndex = () =>
  Array.from({ length: 3 }, () => Math.floor(Math.random() * 3));