// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable consistent-return */

/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [toSort=''] - The array of strings to sort, assuming the order is oldest to newest.
 * @param {string} [sortType='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest.
 * - newest: from newest to oldest.
 * - shortest: from shortest to longest.
 * - longest: from longest to shortest.
 * - a: alphabetical order.
 * - z: reverse alphabetical order.
 * If the sortType is not one of these 6 options, a copy of toSort is returned.
 * @returns {string[]} A new sorted array containing the same strings as toSort.
 * @example
 *
 * // ... write this!
 */
export const sortStrings = (toSort = '', sortType = 'oldest') => {
  if (sortType === 'oldest') {
    return toSort;
  }
  if (sortType === 'newest') {
    return toSort.reverse();
  }
  if (sortType === 'shortest') {
    return toSort.sort((a, b) => {
      // ASC  -> a.length - b.length
      // DESC -> b.length - a.length
      return a.length - b.length;
    });
  }
  if (sortType === 'longest') {
    return toSort.sort((a, b) => {
      // ASC  -> a.length - b.length
      // DESC -> b.length - a.length
      return b.length - a.length;
    });
  }
  // we could also have used reverse() method

  if (sortType === 'a') {
    return toSort.sort((a, z) => {
      if (a < z) {
        return -1;
      }
      if (z > a) {
        return 1;
      }
      return 0;
    });
  }

  if (sortType === 'z') {
    return toSort.sort((a, z) => {
      if (z < a) {
        return -1;
      }
      if (a > z) {
        return 1;
      }
      return 0;
    });
  }
};
