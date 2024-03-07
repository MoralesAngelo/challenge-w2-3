import { arrayLength, arrayPush, myPop, myIndexOff, shif, unshift } from './modeles.js';

describe('arrayLength', () => {
  test('it should be 0 when argument is []', () => {
    const x = [];
    const expected = 0;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('it should be 1 when argument is [0]', () => {
    const x = [6];
    const expected = 1;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('it should be 3 when argument is [6,6,6]', () => {
    const x = [6, 6, 6];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('it should be 1 when argument is [false,false,false]', () => {
    const x = [false, false, false];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});

describe.only('push', () => {
  test('it should be [4] when argument is [1,2,3]', () => {
    const array = [1, 2, 3];
    const element = 4;
    const result = arrayPush(array, element);

    expect(arrayLength(result)).toBe(arrayLength(array) + 1);
  });
});

describe('myIndexOff', () => {
  test('it should be [3] when argument is [1,2,3,4,5,6]', () => {
    const array = [1, 2, 3];
    const element = 3;
    const expected = 2;
    const result = myIndexOff(array, element);

    expect(result).toBe(expected);
  });
});

describe('myPop', () => {
  test('it should be ... when argument is [1,2,3,4,5]', () => {
    const array = [1, 2, 3, 4, 5];
    const expected = 5;
    const result = myPop(array);

    expect(result).toBe(expected);
  });
});


describe('shift', () => {
  test('it should be ... when argument is [1,2,3,4]', () => {
    const array = [1, 2, 3, 4, 5];
    const expected = 1;
    const result = shift(array);

    expect(result).toBe(expected);
  });
});


describe('unshift', () => {
  test('it should be 1 when argument is [2,3,4,5]', () => {
    const array = [2, 3, 4,5]
    const element = 1
    const expected = 5;
    const result = unshift(array);

    expect(result).toBe(expected);
  });
});


