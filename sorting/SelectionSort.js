const selectionSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    
    // swap
    [list[minIndex], list[i]] = [list[i], list[minIndex]];
  }
  return list;
};

const arr = [2, 7, 4, 1, 5, 3];
console.log(selectionSort(arr));
