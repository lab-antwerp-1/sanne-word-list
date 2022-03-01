import { sortStrings } from './sort-strings.js';

describe('sorts the strings in an array in different ways', () => {
  describe('oldest to newest', () => {
    it('empty array', () => {
      expect(sortStrings([], 'oldest')).toEqual([]);
    });
    it('3 items', () => {
      expect(sortStrings(['a', 'b', 'c'], 'oldest')).toEqual(['a', 'b', 'c']);
    });
    it('4 items', () => {
      const expected = ['a', 'b', 'c', 'd'];
      expect(sortStrings(['a', 'b', 'c', 'd'], 'oldest')).toEqual(expected);
    });
  });
  describe('newest to oldest', () => {
    it('empty array', () => {
      expect(sortStrings([], 'newest')).toEqual([]);
    });
    it('3 items', () => {
      expect(sortStrings(['a', 'b', 'c'], 'newest')).toEqual(['c', 'b', 'a']);
    });
    it('4 items', () => {
      const expected = ['d', 'c', 'b', 'a'];
      expect(sortStrings(['a', 'b', 'c', 'd'], 'newest')).toEqual(expected);
    });
  });
  describe('alphabetical order', () => {
    it('empty array', () => {
      expect(sortStrings([], 'a')).toEqual([]);
    });
    it('3 items', () => {
      expect(sortStrings(['b', 'a', 'c'], 'a')).toEqual(['a', 'b', 'c']);
    });
    it('4 items', () => {
      const expected = ['a', 'b', 'c', 'd'];
      expect(sortStrings(['b', 'd', 'c', 'a'], 'a')).toEqual(expected);
    });
  });
  describe('reverse-alphabetical order', () => {
    it('empty array', () => {
      expect(sortStrings([], 'z')).toEqual([]);
    });
    it('3 items', () => {
      expect(sortStrings(['b', 'a', 'c'], 'z')).toEqual(['c', 'b', 'a']);
    });
    it('4 items', () => {
      const expected = ['d', 'c', 'b', 'a'];
      expect(sortStrings(['b', 'd', 'c', 'a'], 'z')).toEqual(expected);
    });
  });
  describe('longest to shortest', () => {
    it('empty array', () => {
      expect(sortStrings([], 'longest')).toEqual([]);
    });
    it('3 items', () => {
      const expected = ['zzz', 'ee', 'e'];
      expect(sortStrings(['e', 'zzz', 'ee'], 'longest')).toEqual(expected);
    });
    it('4 items', () => {
      const actual = sortStrings(['e', 'bbb', 'eeee', 'ee'], 'longest');
      expect(actual).toEqual(['eeee', 'bbb', 'ee', 'e']);
    });
  });
  describe('shortest to longest', () => {
    it('empty array', () => {
      expect(sortStrings([], 'shortest')).toEqual([]);
    });
    it('3 items', () => {
      const expected = ['e', 'ee', 'zzz'];
      expect(sortStrings(['e', 'zzz', 'ee'], 'shortest')).toEqual(expected);
    });
    it('4 items', () => {
      const actual = sortStrings(['e', 'zzz', 'eeee', 'ee'], 'shortest');
      expect(actual).toEqual(['e', 'ee', 'zzz', 'eeee']);
    });
  });

  it('no sort type', () => {
    const strings = ['a', 'b', 'c'];
    sortStrings(strings);
    expect(strings).toEqual(['a', 'b', 'c']);
  });
});
