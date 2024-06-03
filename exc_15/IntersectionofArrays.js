function intersectArrays(arr1, arr2) {
  const commonNumbers = arr1.filter((number) => {
    return arr2.includes(number);
  });
  console.log(commonNumbers);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

intersectArrays(array1, array2);
