import {
  arrayLength,
  push,
  pop,
  indexOff,
  shift,
  unshift,
  filter,
  find,
} from './modeles.js';

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

describe('push', () => {
  test('it should be [4] when argument is [1,2,3]', () => {
    const array = [1, 2, 3];
    const element = 4;
    const result = push(array, element);

    expect(arrayLength(result)).toBe(arrayLength(array) + 1);
  });
});

describe('indexOff', () => {
  test('it should be [3] when argument is [1,2,3,4,5,6]', () => {
    const array = [1, 2, 3];
    const element = 3;
    const expected = 2;
    const result = indexOff(array, element);

    expect(result).toBe(expected);
  });
});

describe('pop', () => {
  test('it should be ... when argument is [1,2,3,4,5]', () => {
    const array = [1, 2, 3, 4, 5];
    const expected = 5;
    const result = pop(array);

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
    const array = [2, 3, 4, 5];
    const element = 1;
    const expected = 5;
    const result = unshift(array);

    expect(result).toBe(expected);
  });
});

describe('map', () => {
  test('should return [4,8,12] when arguments are [2, 4, 6] and (element) => element * 2', () => {
    const x = [2, 4, 6];
    const y = (element) => element * 2;
    const expected = [4, 8, 12];
    const r = map(x, y);
    expect(r).toStrictEqual(expected);
  });
});

describe('filter', () => {
  test('should return [] when arguments are [casa, perro, comida, pizza] and (element) => element >= 6', () => {
    const x = ['casa', 'perro', 'comida', 'pizza'];
    const y = (element) => element.length > 4;
    const expected = ['perro', 'comida', 'pizza'];
    const r = filter(x, y);
    expect(r).toStrictEqual(expected);
  });
});

describe.only('find', () => {
  test('should return [casa] when arguments are [casa, perro, comida, pizza] and (element) => element >= 6', () => {
    const x = ['casa', 'comida', 'carta'];
    const y = (element) => element.length > 4;
    const expected = 'comida';
    const r = find(x, y);
    expect(r).toBe(expected);
  });
});
