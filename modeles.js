export const arrayLength = (array) => {
  let r = 0;
  for (const iterator of array) {
    r++;
  }

  return r;
};

export const push = (array, element) => {
  const newArray = [...array, element];
  return newArray;
};

export const myIndexOff = (array, element) => {
  let elementIndex = -1;
  const arrayindex = arrayLength(array);
  for (let i = 0; i < arrayindex; i++) {
    if (element === array[i]) {
      elementIndex = i;
    }
  }
  return elementIndex;
};
export const MyPop = (array) => {
  const deletec = array[array.length - 1];

  array.length = array.length - 1;

  return deletec;
};
