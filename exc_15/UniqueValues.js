function uniqueValues(arr) {
  const uniques = arr.reduce((acc, number) => {
    if (!acc.includes(number)) {
      acc.push(number);
    }
    return acc;
  }, []);
  console.log(uniques);
}

const duplicates = [1, 2, 2, 3, 4, 4, 5];
uniqueValues(duplicates);
