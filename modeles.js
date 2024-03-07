export const arrayLength = (array) => {
  let r = 0;
  for (const iterator of array) {
    r++;
  }

  return r;
};

export const push = (array, element) => {
  const newArray = [...array, element];
  array[arrayLength(array)] = element;
  return arrayLength(newArray);
};

export const indexOff = (array, element) => {
  let elementIndex = -1;
  const arrayindex = arrayLength(array);
  for (let i = 0; i < arrayindex; i++) {
    if (element === array[i]) {
      elementIndex = i;
      break;
    }
  }
  return elementIndex;
};
export const pop = (array) => {
  const deletec = array[array.length - 1];

  array.length = array.length - 1;

  return deletec;
};

export const shift = (array) => {
  const firstElement = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length--;

  return firstElement;
};

export const unshift = (array, element) => {
  const newArray = [element, ...array];
  return newArray.length;
};

export const map = (arr, callback) => {
  const newArr = [];
  for (const element of arr) {
    push(newArr, callback(element));
  }

  return newArr;
};

export const filter = (array, condicion) => {
  const newArray = [];
  for (const iterator of array) {
    if (condicion(iterator) === true) {
      push(newArray, iterator);
    }
  }
  return newArray;
};

export const find = (array, condicion) => {
  for (const iterator of array) {
    if (condicion(iterator)) {
      return iterator;
    }
  }
};
