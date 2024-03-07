export const arrayLength = (array) => {
  let r = 0;
  for (const iterator of array) {
    r++;
  }

  return r;
};

export const arrayPush = (array, element) => {
  const newArray = [...array, element];
  array[arrayLength(array)] = element
  return arrayLength(newArray);
};

export const myIndexOff = (array, element) => {
  let elementIndex = -1;
  const arrayindex = arrayLength(array);
  for (let i = 0; i < arrayindex; i++) {
    if (element === array[i]) {
      elementIndex = i;
      break
    }
  }
  return elementIndex;
};
export const myPop = (array) => {
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



