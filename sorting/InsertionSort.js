const insertionSort = (arr) => {
  const list = [...arr];

  for (let i = 1; i < arr.length; i++) {
    let value = list[i];
    let hole = i;
    while (hole > 0 && list[hole - 1] > value) {
      list[hole] = list[hole - 1];
      hole--;
    }
    list[hole] = value;
  }

  return list;
};

const arr = [2, 7, 4, 1, 5, 3];
console.log(insertionSort(arr));
